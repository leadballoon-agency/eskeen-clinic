export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-neutral-600">
          <p className="text-sm text-neutral-500 mb-8">Last updated: August 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Information We Collect</h2>
            <p>At Eskeen Clinic, we collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email, phone number)</li>
              <li>Medical history relevant to aesthetic treatments</li>
              <li>Treatment preferences and consultation notes</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage your aesthetic treatments</li>
              <li>Communicate with you about appointments and follow-ups</li>
              <li>Send treatment reminders and aftercare instructions</li>
              <li>Improve our services and develop new treatments</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Data Protection</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage. Your medical records are stored securely and accessed only by authorised practitioners.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Sharing of Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>In case of medical emergency, with relevant healthcare providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">5. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">6. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience and analyse site traffic. We use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how visitors use our site</li>
              <li>Marketing cookies to provide relevant advertisements</li>
            </ul>
            <p className="mt-4">You can control cookie settings through your browser preferences.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">7. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations. Medical records are retained in accordance with NHS guidelines (typically 8 years for adult patients).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">8. Contact Information</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-neutral-50 p-4 rounded-lg mt-4">
              <p><strong>Eskeen Clinic</strong></p>
              <p>115 Lower Richmond Road</p>
              <p>Putney, London SW15 1EX</p>
              <p>Phone: 07846 888649</p>
              <p>Email: privacy@eskeenclinic.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <a href="/" className="text-primary-600 hover:text-primary-700 font-medium">← Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}