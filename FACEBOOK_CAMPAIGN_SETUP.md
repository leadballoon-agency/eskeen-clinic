# Facebook Campaign Setup Guide for Eskeen Clinic

## Quick Links
- **Facebook Business Manager**: https://business.facebook.com
- **Ads Manager**: https://adsmanager.facebook.com
- **Your Pixel ID**: 1420040315939258
- **Main Landing Page**: https://eskeen-clinic.vercel.app/prp
- **Advertorial Pages**:
  - Local: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=local
  - Testimonial: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=testimonial
  - Honest: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=honest
  - Education: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=education
  - Cost: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=cost
  - Research: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=research

## STEP 1: VERIFY PIXEL INSTALLATION ✅
Your Pixel (1420040315939258) is already installed and tracking:
- PageView ✅
- ViewContent ✅
- StartAssessment ✅
- CompleteAssessment ✅
- Lead ✅

Test it:
1. Install Facebook Pixel Helper Chrome extension
2. Visit https://eskeen-clinic.vercel.app/prp
3. Complete assessment - should fire Lead event

## STEP 2: CREATE CUSTOM CONVERSIONS
Go to Events Manager > Custom Conversions

Create these custom conversions:
1. **Assessment Started**
   - URL Contains: /prp#assessment
   - Category: Lead
   - Value: £100

2. **Assessment Completed**
   - Event: CompleteAssessment
   - Category: Lead
   - Value: £350

3. **High Intent User**
   - Event: ViewContent
   - Parameter: content_category equals "High Intent"
   - Value: £175

## STEP 3: CREATE CAMPAIGN STRUCTURE

### Campaign Settings (Same for all):
- **Objective**: Leads
- **Budget**: £10/day to start (scale to £20-30 after 3 days)
- **Schedule**: Always run
- **Optimization**: Leads (after 50 conversions, switch to "Assessment Completed")

### Ad Set Settings:
- **Location**: Putney, Richmond, Wandsworth (5km radius)
- **Age**: 35-55
- **Gender**: Men (primary), create duplicate for women later
- **Interests**: 
  - Professional services
  - Business owners
  - Executives
  - Hair care products
  - Men's grooming
- **Exclude**: People who like discount/bargain pages
- **Placement**: Automatic (Facebook will optimize)

## STEP 4: LAUNCH SEQUENCE

### Week 1 - Soft Launch (Days 1-3)
**Start with these 2 campaigns only:**

#### Campaign 1: Soft Launch/Founding
- Budget: £10/day
- Landing: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=local
- Image: meet Elanda and Mavra.png
- Monitor CTR (aim for >1%)

#### Campaign 2: Honest Conversation  
- Budget: £10/day
- Landing: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=honest
- Image: An Honest Conversation Elanda.png
- Monitor CTR (aim for >1%)

**Day 3 Review:**
- Pause the worst performer
- Increase best performer to £20/day
- Launch Campaign 3

### Week 1 - Expansion (Days 4-7)

#### Campaign 3: Experience & Results
- Budget: £10/day
- Landing: https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=testimonial
- Image: Michaels story.png

**Day 7 Review:**
- Keep top 2 performers
- Scale best to £30/day
- Create female audience versions

### Week 2 - Optimization

1. **Create Lookalike Audiences:**
   - 1% Lookalike of Assessment Completers
   - 1% Lookalike of High Intent Users
   - 1% Lookalike of Page Viewers (180+ seconds)

2. **Launch Retargeting:**
   - Audience: Visited advertorial but didn't complete assessment
   - Budget: £5/day
   - Message: "Still thinking about it? Free consultation this week only"

3. **Test Remaining Campaigns:**
   - Problem/Solution
   - Local Introduction
   - Straightforward Offer

## STEP 5: TRACKING & METRICS

### Key Metrics to Track:
- **CTR**: >1% good, >2% excellent
- **CPL** (Cost Per Lead): Target <£20
- **Assessment Completion Rate**: Target >30%
- **Quality Score**: Should be 7+

### Daily Checklist:
- [ ] Check CTR - pause ads below 0.7%
- [ ] Check CPL - pause ads above £30
- [ ] Check comments - respond within 2 hours
- [ ] Check Pixel events firing correctly

## STEP 6: AD COPY (READY TO COPY/PASTE)

### Campaign 1: Soft Launch/Founding
**Primary Text:**
Be Among Our First 50 Putney Patients

We're Elanda and Mavra. After treating 1,000+ patients at London's top clinics, we've opened our own practice on Lower Richmond Road.

We specialise in PRP therapy for hair restoration. One treatment course, permanent results. No monthly prescriptions or daily routines.

Most of our patients are professionals who simply want to look as sharp as they feel. If that sounds like you, we should talk.

Founding patient benefits:
• Free consultation (usually £100)
• Special rate: £350 (usually £500)
• Priority booking for life

Limited to first 50 patients.

**Headline:** Experienced Practitioners, New Local Clinic
**Description:** 1,000+ successful treatments - Now in Putney
**CTA Button:** Learn More

### Campaign 2: Honest Conversation
**Primary Text:**
An Honest Conversation About Hair Loss
From Practitioners Who've Seen It All

After treating 1,000+ patients, we know what works and what doesn't.

Regaine? Temporary at best.
Finasteride? Those side effects are real.
Turkey transplant? We've fixed too many disasters.

PRP is different. Your own blood, permanent results, no daily hassle. We've just opened in Putney and we're offering founding patient rates to build our local practice.

Free consultation. Honest advice. Real results.

**Headline:** An Honest Conversation About Hair Loss
**Description:** What London clinics should have told you
**CTA Button:** Learn More

## STEP 7: CREATIVE ASSETS

Images needed (in advertorial folder):
- meet Elanda and Mavra.png ✅
- Michaels story.png ✅
- An Honest Conversation Elanda.png ✅
- why hairloss treatments fail after 40.png ✅
- An Honest Conversation.png ✅
- 300 locals switched clinic.png (needs update)

## STEP 8: RESPONSE TEMPLATES

### For Comments:
**Price Question:**
"Hi [Name], thanks for your interest! Our founding patient rate is £350 per session (usually £500). Most patients need 3 sessions for optimal results. We're offering free consultations this month to discuss your specific needs. Feel free to call 07849 990667 or click the link to learn more."

**Does it work?**
"Great question! We've successfully treated over 1,000 patients with PRP therapy. It uses your own blood's growth factors to reactivate dormant follicles. Results vary by individual, which is why we offer free consultations to assess if you're a good candidate. Click the link for more details."

**Side effects?**
"PRP uses your own blood, so there's virtually no risk of rejection or allergic reaction. Some patients experience mild tenderness at injection sites for 24-48 hours. Unlike medications like finasteride, there are no systemic side effects. Happy to discuss more during a free consultation!"

## STEP 9: SCALING STRATEGY

### Week 1 Success Metrics:
- 50+ leads generated ✓ Scale to £50/day
- 30+ assessment completions ✓ Test Instagram
- CPL under £20 ✓ Expand radius to 10km
- 5+ consultations booked ✓ Launch SLO

### Week 2-3:
- Test video ads (if available)
- Launch Instagram Stories
- Create "Complete Assessment" campaign for retargeting
- Test broader interests

### Week 4:
- Launch SLO campaign (£37 Starter Pack)
- Create email nurture sequence
- Launch Google Ads to capture search intent

## TROUBLESHOOTING

**High CPL (>£30):**
- Check ad relevance score
- Narrow audience
- Test new creative
- Improve landing page load speed

**Low CTR (<0.5%):**
- Creative fatigue - refresh images
- Headline not compelling - test variations
- Wrong audience - adjust targeting

**Good CTR but no conversions:**
- Landing page issue
- Assessment too long
- Price not visible enough
- Add urgency/scarcity

## CONTACT & SUPPORT

**Your Details:**
- Phone: 07849 990667
- Clinic: 115 Lower Richmond Road, Putney SW15 1EX
- Email: [Add email]

**Facebook Support:**
- https://www.facebook.com/business/help
- Pixel Issues: Check Events Manager > Diagnostics

## LAUNCH CHECKLIST

### Before Going Live:
- [ ] Pixel firing on all pages
- [ ] Landing pages loading fast (<3 seconds)
- [ ] Phone number clickable on mobile
- [ ] Assessment form working
- [ ] Images uploaded to Ads Manager
- [ ] Payment method added
- [ ] Daily budget set to £10
- [ ] Notifications enabled for comments

### Day 1:
- [ ] Launch Campaigns 1 & 2 at 9am
- [ ] Check Pixel is tracking
- [ ] Monitor for first hour
- [ ] Respond to any comments
- [ ] Note initial metrics

### Day 2:
- [ ] Check overnight performance
- [ ] Pause if CTR <0.5%
- [ ] Respond to comments
- [ ] Check lead quality

### Day 3:
- [ ] Compare campaigns
- [ ] Pause worst performer
- [ ] Scale best to £20
- [ ] Prepare Campaign 3

Remember: Don't touch anything for first 48 hours! Let Facebook's algorithm learn.

Good luck with your launch! 🚀