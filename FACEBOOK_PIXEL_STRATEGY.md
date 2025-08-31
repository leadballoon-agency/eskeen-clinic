# Facebook Pixel Optimization Strategy

## Current Goal: EXIT LEARNING PHASE FAST! 🎯
**Target: 50+ Lead events per week**

## Event Values (Optimized for Volume)

### Advertorial Page Events
| User Action | Event | Value | Why |
|------------|-------|-------|-----|
| Reads 75% of advertorial | Lead | £5 | Shows engagement, easy to achieve |
| Reads 90% of advertorial | Lead | £10 | High engagement signal |
| Clicks CTA to assessment | Lead | £15 | Intent to take assessment |

### Assessment Events  
| User Action | Event | Value | Why |
|------------|-------|-------|-----|
| Starts assessment | Lead | £1 | Top of funnel, maximum volume |
| Completes assessment (single) | Lead | £20 | Quality signal |
| Completes assessment (3 pack) | Lead | £30 | Higher intent |
| Completes assessment (6 pack) | Lead | £40 | Highest intent |

## Why These Values?

1. **Low values = More volume** 
   - Facebook needs 50+ conversions/week to exit learning phase
   - High values (£350+) would limit our reach

2. **All events are "Lead"**
   - Using one event type helps Facebook optimize faster
   - We differentiate quality through values

3. **Progressive value ladder**
   - £1 → £5 → £10 → £15 → £20-40
   - Shows Facebook the quality progression

## Campaign Optimization Path

### Week 1-2: Volume Phase
**Optimize for: Lead (All)**
- Include all Lead events
- Focus on getting 50+ per week
- Budget: £20-30/day

### Week 3-4: Quality Phase  
**Optimize for: Lead ≥£15**
- Exclude £1 and £5 events
- Focus on CTAs and completions
- Budget: £30-50/day

### Month 2: Revenue Phase
**Optimize for: Lead ≥£20**
- Only assessment completions
- Highest quality leads only
- Budget: £50-100/day

## Setting Up in Facebook

### Step 1: Create Custom Conversions
In Events Manager, create:

1. **"Engaged Reader"**
   - URL contains: /story/prp-breakthrough
   - When: Lead event fires
   - Value: £5-10

2. **"Assessment Starter"**
   - URL contains: /prp#assessment
   - When: Lead event fires  
   - Value: £1

3. **"Assessment Completer"**
   - When: Lead event fires
   - Value: ≥£20

### Step 2: Campaign Setup
```
Campaign Objective: Leads
Optimization Event: Lead (All Events)
Bid Strategy: Lowest Cost
Budget: £20/day to start
```

### Step 3: Monitor & Adjust
**Daily checks:**
- Lead events count (aim for 7+ per day)
- Cost per lead (should be <£3 initially)
- Quality check (are they real engagement?)

**After 50 leads:**
- Check quality in CRM
- Adjust values if needed
- Consider excluding low-value events

## Testing Checklist

- [ ] Visit https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=test
- [ ] Scroll to 75% - Check Lead £5 fires
- [ ] Scroll to 90% - Check Lead £10 fires  
- [ ] Click CTA - Check Lead £15 fires
- [ ] Start assessment - Check Lead £1 fires
- [ ] Complete assessment - Check Lead £20+ fires

## Common Issues & Fixes

**Not getting 50 events/week:**
- Lower values further (even £0.50 works)
- Broaden audience
- Increase budget

**Getting events but no real leads:**
- Values too low - increase slightly
- Check if bot traffic
- Add form submission requirement

**High cost per result:**
- Creative fatigue - refresh ads
- Audience too narrow
- Landing page too slow

## Pro Tips

1. **Don't change optimization mid-week**
   - Let it run Mon-Sun before changing
   
2. **Use ValueTrack parameters**
   - Add ?source={placement} to track where leads come from
   
3. **Duplicate winners, not losers**
   - When scaling, duplicate successful ad sets
   
4. **Time of day matters**
   - Professional audience: 7-9am, 12-1pm, 5-7pm

## Next Steps After Learning Phase

Once you're getting 50+ leads/week consistently:

1. **Create Lookalike Audiences**
   - 1% LAL of £20+ Lead events
   - 1% LAL of 90% scroll readers

2. **Implement Dynamic Pricing**
   - Show different prices based on source
   - Track value more accurately

3. **Add Purchase Events**
   - When someone books consultation
   - Use actual monetary values

Remember: **Volume first, quality second, revenue third!**