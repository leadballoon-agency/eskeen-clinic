# SLO (Self-Liquidating Offer) Launch Checklist

## 🚀 QUICK LAUNCH INSTRUCTIONS
**To enable SLO immediately:**
1. Open `/components/prp/PRPAssessment.tsx`
2. Change line 9: `const ENABLE_SLO = false;` to `const ENABLE_SLO = true;`
3. Deploy: `git add -A && git commit -m "Enable SLO" && git push`
4. SLO will appear after assessment completion!

---

## 📦 CURRENT SLO OFFER DETAILS

### Product: Hair Recovery Starter Pack
**Price: £37** (Special assessment discount from £67)

**What's Included:**
- Premium Biotin supplements (30-day supply)
- Hair growth serum sample
- Scalp massage tool
- Personalized hair care guide
- £50 voucher toward PRP treatment

**Value Stack:**
- Biotin supplements: £25
- Hair serum sample: £15  
- Scalp massager: £12
- Care guide: £10
- PRP voucher: £50
- **Total Value: £112** (Customer pays £37)

---

## ✅ PRE-LAUNCH CHECKLIST

### 1. **Stripe Setup** (REQUIRED)
- [ ] Create Stripe account at https://stripe.com
- [ ] Get API keys from Stripe Dashboard
- [ ] Add to `.env.local`:
```
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
```
- [ ] Create product in Stripe: "Hair Recovery Starter Pack" - £37
- [ ] Get Stripe checkout link
- [ ] Update line 39 in `/components/SLOOffer.tsx` with real Stripe URL

### 2. **Offer Approval**
- [ ] Confirm price with Elanda: £37?
- [ ] Confirm price with Mavra: £37?
- [ ] Confirm product contents
- [ ] Confirm PRP voucher value (£50?)
- [ ] Confirm shipping/collection method

### 3. **Fulfillment Plan**
- [ ] Who packages orders? _____________
- [ ] Where stored? _____________
- [ ] Shipping or collection only? _____________
- [ ] Delivery timeline? _____________

### 4. **Legal/Compliance**
- [ ] Terms for voucher use (expiry, conditions)
- [ ] Refund policy
- [ ] Product disclaimers

---

## 🎯 WHERE SLO APPEARS

1. **After Assessment Completion** 
   - Shows below personalized recommendations
   - 24-hour countdown timer
   - One-time special price

2. **Targeting:**
   - Only shows to completed assessments
   - Emphasizes "assessment discount"
   - Creates urgency with timer

---

## 📊 TRACKING & OPTIMIZATION

### Facebook Pixel Events:
- `InitiateCheckout` - When clicking buy button
- `Purchase` - After Stripe payment
- Value: £37 per purchase

### Success Metrics:
- Target: 10-20% of assessment completers buy
- Break-even: £15-20 ad spend per sale
- Profit from PRP upsell later

---

## 🔄 POST-LAUNCH WORKFLOW

1. **Customer completes assessment** → Sees SLO offer
2. **Clicks "Get Starter Pack"** → Goes to Stripe checkout
3. **Completes payment** → Receives email confirmation
4. **Kerry notified** → Prepares package
5. **Collection/Delivery** → Within 48 hours
6. **Follow-up** → Kerry calls to book PRP consultation

---

## 💡 TALKING POINTS FOR ELANDA & MAVRA

### Why This Works:
- **Low barrier entry** - £37 vs £175+ for treatment
- **Builds trust** - They try products first
- **Self-funding** - Ad costs covered by product sale
- **Qualified leads** - Buyers are serious about hair loss
- **Upsell opportunity** - £50 voucher drives PRP bookings

### Objection Handlers:
**"It's too cheap"**
- It's a loss leader to acquire customers
- Real profit comes from PRP treatments
- Builds trust before big purchase

**"Too much work"**
- Kerry can pre-package 20-30 units
- Simple fulfillment process
- Generates warm leads automatically

**"What if they don't book PRP?"**
- Still breaks even on ad spend
- Builds email list
- Can retarget with offers

---

## 🚨 EMERGENCY DISABLE

If you need to turn OFF the SLO immediately:
1. Open `/components/prp/PRPAssessment.tsx`
2. Change line 9: `const ENABLE_SLO = true;` to `const ENABLE_SLO = false;`
3. Deploy immediately

---

## 📞 SUPPORT CONTACTS

**Technical Issues:**
- Check Stripe dashboard
- Check browser console for errors
- Contact dev support

**Order Fulfillment:**
- Kerry: 07846 888649

**Strategic Questions:**
- Review metrics in Facebook Ads Manager
- Check Stripe payment analytics

---

## FINAL NOTE
The SLO is fully built and ready. Just need:
1. Stripe account connected
2. Approval from Elanda/Mavra
3. Change one line of code to enable

Everything else is automated! The timer, the offer display, the tracking - all ready to go!