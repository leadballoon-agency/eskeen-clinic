import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GHL webhook endpoint to update contact with assessment data
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Log incoming data for debugging with current timestamp
    const currentTime = new Date();
    console.log('=== INCOMING WEBHOOK DATA ===');
    console.log('Current server time:', currentTime.toISOString());
    console.log('Readable time:', currentTime.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
    console.log('Full request data:', JSON.stringify(data, null, 2));
    
    // Extract assessment data
    const { 
      email, 
      phone, 
      name,
      treatment,
      assessmentData,
      recommendedPackage,
      recommendedPrice
    } = data;
    
    // Log extracted values
    console.log('Extracted values:');
    console.log('- Name:', name);
    console.log('- Email:', email);
    console.log('- Phone:', phone);

    // Format assessment notes for GHL - clean and readable
    const concernLabels: Record<string, string> = {
      'hair-thinning': 'Hair Thinning',
      'hair-loss': 'Hair Loss', 
      'facial-ageing': 'Facial Ageing',
      'both': 'Both Hair & Facial'
    };

    const durationLabels: Record<string, string> = {
      'recent': 'Less than 6 months',
      '1year': '6-12 months',
      '2years': '1-2 years',
      'longer': 'More than 2 years'
    };

    const triedLabels: Record<string, string> = {
      'nothing': 'First treatment',
      'products': 'Hair/skin products',
      'medications': 'Medications',
      'other-treatments': 'Other procedures'
    };

    const commitmentLabels: Record<string, string> = {
      'single': 'Try one session first',
      'package3': '3 sessions (recommended)',
      'package6': '6 sessions (optimal)',
      'unsure': 'Need guidance'
    };

    // Send to GHL webhook
    const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/USJbaW3fRzevnqAcsm2W/webhook-trigger/12c77706-d501-4c79-b819-7457febbf635';
    
    const webhookPayload = {
      // Contact Info - Try multiple formats for GHL compatibility
      email: email || '',
      phone: phone || '',
      firstName: name?.split(' ')[0] || '',
      lastName: name?.split(' ').slice(1).join(' ') || '',
      first_name: name?.split(' ')[0] || '',  // Underscore version
      last_name: name?.split(' ').slice(1).join(' ') || '',  // Underscore version
      contact_email: email || '',  // Alternative field name
      contact_phone: phone || '',  // Alternative field name
      fullName: name || '',
      name: name || '',  // Simple name field
      
      // Assessment Results
      treatment: treatment,
      recommendedPackage: recommendedPackage,
      recommendedPrice: recommendedPrice,
      
      // Assessment Answers (human-readable)
      primaryConcern: concernLabels[assessmentData.concern] || assessmentData.concern,
      duration: durationLabels[assessmentData.duration] || assessmentData.duration,
      previousTreatments: triedLabels[assessmentData.tried] || assessmentData.tried,
      commitment: commitmentLabels[assessmentData.commitment] || assessmentData.commitment,
      
      // Raw data for automation
      concernValue: assessmentData.concern,
      durationValue: assessmentData.duration,
      triedValue: assessmentData.tried,
      commitmentValue: assessmentData.commitment,
      
      // Metadata with fresh timestamp
      source: 'PRP Assessment Tool',
      assessmentDate: currentTime.toISOString(),
      assessmentTimestamp: Date.now(),
      
      // Notes for Kerry with current UK date/time
      notes: `PRP Assessment completed on ${currentTime.toLocaleString('en-GB', { timeZone: 'Europe/London' })}
Treatment: ${treatment}
Recommended: ${recommendedPackage} - ${recommendedPrice}
Concern: ${concernLabels[assessmentData.concern] || assessmentData.concern}
Duration: ${durationLabels[assessmentData.duration] || assessmentData.duration}
Previous: ${triedLabels[assessmentData.tried] || assessmentData.tried}
Ready to book: ${commitmentLabels[assessmentData.commitment] || assessmentData.commitment}`
    };

    // Log what we're sending for debugging
    console.log('=== SENDING TO GHL WEBHOOK ===');
    console.log('Webhook URL:', GHL_WEBHOOK_URL);
    console.log('Payload being sent:', JSON.stringify(webhookPayload, null, 2));
    console.log('Key fields check:');
    console.log('- email:', webhookPayload.email);
    console.log('- phone:', webhookPayload.phone);
    console.log('- firstName:', webhookPayload.firstName);
    console.log('- lastName:', webhookPayload.lastName);
    
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookPayload)
    });

    if (!response.ok) {
      console.error('GHL webhook failed:', response.status, response.statusText);
      // Don't fail the user experience if webhook fails
      return NextResponse.json({ 
        success: true, 
        message: 'Assessment completed (webhook may have failed)',
        warning: 'Contact sync may have failed'
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Assessment data sent to GHL',
      timestamp: currentTime.toISOString()
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('GHL webhook error:', error);
    // Don't fail the user experience if webhook fails
    return NextResponse.json({ 
      success: true, 
      message: 'Assessment completed',
      warning: 'Contact sync failed'
    });
  }
}