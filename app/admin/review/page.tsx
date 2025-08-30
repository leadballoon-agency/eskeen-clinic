'use client';

import { useState } from 'react';

export default function ReviewPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copySection = (section: string, content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  const copyAll = () => {
    const allContent = document.getElementById('all-content');
    if (allContent) {
      const range = document.createRange();
      range.selectNode(allContent);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      setCopiedSection('all');
      setTimeout(() => setCopiedSection(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Eskeen Clinic - Campaign Review</h1>
              <p className="text-gray-600 mt-2">For Elanda & Mavra's Review • August 2025</p>
            </div>
            <button
              onClick={copyAll}
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
            >
              {copiedSection === 'all' ? '✓ Copied Everything!' : 'Copy All for Google Docs'}
            </button>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Click "Copy All for Google Docs" then paste into Google Docs. 
              The formatting and clickable links will transfer properly.
            </p>
          </div>

          <div id="all-content" className="space-y-8">
            {/* Table of Contents */}
            <section className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">📋 Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#website" className="hover:underline">1. Live Website Pages</a></li>
                <li><a href="#advertorials" className="hover:underline">2. Advertorial Versions</a></li>
                <li><a href="#facebook" className="hover:underline">3. Facebook Ad Copy (6 Campaigns)</a></li>
                <li><a href="#prp-assessment" className="hover:underline">4. PRP Assessment Questions</a></li>
                <li><a href="#co2-assessment" className="hover:underline">5. CO2 Assessment Questions</a></li>
                <li><a href="#slo" className="hover:underline">6. Self-Liquidating Offer Strategy</a></li>
                <li><a href="#checklist" className="hover:underline">7. Launch Checklist</a></li>
                <li><a href="#approval" className="hover:underline">8. Approval Section</a></li>
              </ol>
            </section>

            {/* Section 1: Live Website */}
            <section id="website" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">1. Live Website Pages</h2>
              <div className="space-y-2">
                <p>• <strong>Homepage:</strong> <a href="https://eskeen-clinic.vercel.app" className="text-blue-600 hover:underline">https://eskeen-clinic.vercel.app</a></p>
                <p>• <strong>PRP Treatment:</strong> <a href="https://eskeen-clinic.vercel.app/prp" className="text-blue-600 hover:underline">https://eskeen-clinic.vercel.app/prp</a></p>
                <p>• <strong>PRP Assessment:</strong> <a href="https://eskeen-clinic.vercel.app/prp#assessment" className="text-blue-600 hover:underline">https://eskeen-clinic.vercel.app/prp#assessment</a></p>
                <p>• <strong>CO2 Laser:</strong> <a href="https://eskeen-clinic.vercel.app/co2-laser" className="text-blue-600 hover:underline">https://eskeen-clinic.vercel.app/co2-laser</a></p>
                <p>• <strong>Advanced Tools:</strong> <a href="https://eskeen-clinic.vercel.app/tools" className="text-blue-600 hover:underline">https://eskeen-clinic.vercel.app/tools</a></p>
              </div>
            </section>

            {/* Section 2: Advertorials */}
            <section id="advertorials" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">2. Advertorial Versions</h2>
              <p className="mb-4 text-gray-700">Each link shows a different headline based on which ad they clicked:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Version 1: Founding/Local</h3>
                  <p className="text-gray-700">Headline: "Experienced Hair Loss Specialists Open New Putney Clinic"</p>
                  <a href="https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=local" className="text-blue-600 hover:underline">
                    https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=local
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Version 2: Testimonial</h3>
                  <p className="text-gray-700">Headline: "I Spent £1,800 on Treatments That Didn't Work"</p>
                  <a href="https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=testimonial" className="text-blue-600 hover:underline">
                    https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=testimonial
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Version 3: Honest</h3>
                  <p className="text-gray-700">Headline: "An Honest Conversation About Hair Loss Treatment"</p>
                  <a href="https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=honest" className="text-blue-600 hover:underline">
                    https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=honest
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Version 4: Educational</h3>
                  <p className="text-gray-700">Headline: "Why Your Hair Loss Treatment Isn't Working"</p>
                  <a href="https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=education" className="text-blue-600 hover:underline">
                    https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=education
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Version 5: Cost</h3>
                  <p className="text-gray-700">Headline: "The Real Cost of Hair Loss Treatment in London"</p>
                  <a href="https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=cost" className="text-blue-600 hover:underline">
                    https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=cost
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Version 6: Research</h3>
                  <p className="text-gray-700">Headline: "New Medical Research: Why Hair Loss Treatments Fail After 40"</p>
                  <a href="https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=research" className="text-blue-600 hover:underline">
                    https://eskeen-clinic.vercel.app/story/prp-breakthrough?source=research
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: Facebook Ads */}
            <section id="facebook" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">3. Facebook Ad Copy</h2>
              
              {/* Campaign 1 */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Campaign 1: Soft Launch/Founding</h3>
                <p className="text-sm text-gray-600 mb-2">Image: meet Elanda and Mavra.png</p>
                <div className="bg-white p-4 rounded border">
                  <p className="mb-3"><strong>Primary Text:</strong></p>
                  <p className="mb-2">Be Among Our First 50 Putney Patients</p>
                  <p className="mb-2">We're Elanda and Mavra. After treating 1,000+ patients at London's top clinics, we've opened our own practice on Lower Richmond Road.</p>
                  <p className="mb-2">We specialise in PRP therapy for hair restoration. One treatment course, permanent results. No monthly prescriptions or daily routines.</p>
                  <p className="mb-2">Most of our patients are professionals who simply want to look as sharp as they feel. If that sounds like you, we should talk.</p>
                  <p className="mb-2">Founding patient benefits:</p>
                  <ul className="list-disc ml-6 mb-2">
                    <li>Free consultation (usually £100)</li>
                    <li>Special rate: £350 (usually £500)</li>
                    <li>Priority booking for life</li>
                  </ul>
                  <p className="mb-3">Limited to first 50 patients.</p>
                  <p><strong>Headline:</strong> Experienced Practitioners, New Local Clinic</p>
                  <p><strong>Description:</strong> 1,000+ successful treatments - Now in Putney</p>
                </div>
              </div>

              {/* Add other campaigns similarly... */}
              <p className="text-gray-600 italic">
                [Campaigns 2-6 follow similar format - see full document for details]
              </p>
            </section>

            {/* Section 4: PRP Assessment */}
            <section id="prp-assessment" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">4. PRP Assessment Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Q1: What brings you to PRP therapy?</p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>□ Hair Thinning - Noticing more scalp visibility</li>
                    <li>□ Hair Loss - Significant hair fall or bald patches</li>
                    <li>□ Facial Ageing - Fine lines and loss of glow</li>
                    <li>□ Both Concerns - Hair and facial treatment</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Q2: How long have you noticed these changes?</p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>□ Less than 6 months</li>
                    <li>□ 6-12 months</li>
                    <li>□ 1-2 years</li>
                    <li>□ More than 2 years</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Q3: What treatments have you tried?</p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>□ First treatment</li>
                    <li>□ Hair/skin products</li>
                    <li>□ Medications</li>
                    <li>□ Other procedures</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Q4: How many sessions are you considering?</p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>□ Try one session first</li>
                    <li>□ 3 sessions (recommended)</li>
                    <li>□ 6 sessions (optimal)</li>
                    <li>□ Need guidance</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="font-semibold mb-2">PRP Pricing:</p>
                  <ul className="list-disc ml-6">
                    <li>Single: £175 + free biotin</li>
                    <li>3 sessions: £450 (includes biotin)</li>
                    <li>6 sessions: £699 (includes biotin)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: CO2 Assessment */}
            <section id="co2-assessment" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">5. CO2 Assessment Questions</h2>
              <p className="text-gray-600 mb-4">Coming January 2025</p>
              {/* Similar format to PRP */}
            </section>

            {/* Section 6: SLO Strategy */}
            <section id="slo" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">6. Self-Liquidating Offer (SLO) Strategy</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <h3 className="font-bold text-lg mb-3">What is an SLO?</h3>
                <p className="mb-4">A Self-Liquidating Offer is a low-priced product (£27-97) that you sell immediately after someone shows interest but before they buy your main offer. The goal: Recover your advertising costs IMMEDIATELY, not months later.</p>
                
                <h3 className="font-bold text-lg mb-3">Why This Will Help Eskeen Dominate:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Unlimited Ad Budget:</strong> Break even Day 1 while competitors lose money for months</li>
                  <li><strong>Outspend Competition:</strong> Spend £1,000/day while they can only afford £100</li>
                  <li><strong>Build Buyer List:</strong> 30-50% of £37 buyers upgrade vs 2% of free leads</li>
                  <li><strong>Price Psychology:</strong> £500 seems cheap after getting value from £37</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">The Offer: Hair Recovery Starter Pack £37</h3>
                <p className="mb-3">What They Get:</p>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>Professional Hair Loss Recovery Guide (£40 value)</li>
                  <li>30-Day Clinical Biotin Supply (£25 value)</li>
                  <li>WhatsApp Support Group (£22 value)</li>
                  <li>£50 PRP Treatment Credit (£50 value)</li>
                </ol>
                <p className="mt-4 font-bold">Total Value: £137 → Their Price: £37</p>
                
                <div className="mt-4 p-4 bg-white rounded">
                  <p className="font-semibold mb-2">The Math:</p>
                  <p className="text-sm">Without SLO: Spend £1,000 → 5 patients → £2,500 revenue → <span className="text-red-600">Loss £500</span></p>
                  <p className="text-sm">With SLO: Spend £1,000 → 30 packs (£1,110) → <span className="text-green-600">PROFIT + 10 upgrades later</span></p>
                </div>
              </div>
            </section>

            {/* Section 7: Launch Checklist */}
            <section id="checklist" className="border-b pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">7. Launch Checklist</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">Week 1 - Preparation</h3>
                  <div className="space-y-2">
                    <p><strong>Monday:</strong></p>
                    <ul className="list-none ml-4 space-y-1">
                      <li>□ Review all ad copy</li>
                      <li>□ Confirm claims accurate</li>
                      <li>□ Test website links</li>
                    </ul>
                    <p className="mt-2"><strong>Tuesday:</strong></p>
                    <ul className="list-none ml-4 space-y-1">
                      <li>□ Decide on SLO</li>
                      <li>□ Order biotin supply</li>
                      <li>□ Start PDF guide</li>
                    </ul>
                    {/* Continue with other days */}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Week 2 - Soft Launch</h3>
                  <ul className="list-none space-y-1">
                    <li>□ Launch 2 ads at £10/day</li>
                    <li>□ Monitor for 72 hours without changes</li>
                    <li>□ Review metrics on Thursday</li>
                    <li>□ Scale winner to £20/day Friday</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Approval */}
            <section id="approval" className="pb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">8. Approval Section</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Elanda's Approval</h3>
                  <div className="space-y-2">
                    <p>□ I've reviewed all content</p>
                    <p>□ Changes requested: _________________</p>
                    <p>□ Approved to launch: _________________</p>
                    <p>Date: ___________</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Mavra's Approval</h3>
                  <div className="space-y-2">
                    <p>□ I've reviewed all content</p>
                    <p>□ Changes requested: _________________</p>
                    <p>□ Approved to launch: _________________</p>
                    <p>Date: ___________</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-center">
                  <strong>Contact:</strong> 07849 990667 • 
                  <strong>Clinic:</strong> 115 Lower Richmond Road, Putney SW15 1EX
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}