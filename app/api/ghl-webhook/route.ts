import { NextRequest, NextResponse } from 'next/server';

// GHL webhook endpoint to update contact with assessment data
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
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
      
      // Metadata
      source: 'PRP Assessment Tool',
      assessmentDate: new Date().toISOString(),
      
      // Notes for Kerry
      notes: `PRP Assessment completed on ${new Date().toLocaleDateString()}
Treatment: ${treatment}
Recommended: ${recommendedPackage} - ${recommendedPrice}
Concern: ${concernLabels[assessmentData.concern] || assessmentData.concern}
Duration: ${durationLabels[assessmentData.duration] || assessmentData.duration}
Previous: ${triedLabels[assessmentData.tried] || assessmentData.tried}
Ready to book: ${commitmentLabels[assessmentData.commitment] || assessmentData.commitment}`
    };

    // Log what we're sending for debugging
    console.log('Sending to GHL webhook:', webhookPayload);
    
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
      message: 'Assessment data sent to GHL'
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