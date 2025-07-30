import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">SplitDine</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Privacy</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Terms and Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              SplitDine (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our bill-splitting application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Bill details and item information you enter</li>
              <li>Group member names or identifiers</li>
              <li>Contact information (if you choose to share bills via email or text)</li>
              <li>Account information (if you create an account)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Device information and identifiers</li>
              <li>Usage data and app interactions</li>
              <li>Crash reports and performance data</li>
              <li>IP address and general location data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>To provide and improve our bill-splitting services</li>
              <li>To calculate and distribute bill amounts accurately</li>
              <li>To enable sharing of bill summaries with group members</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To analyze app usage and improve user experience</li>
              <li>To detect and prevent fraud or misuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>With group members when you share a bill summary</li>
              <li>With service providers who help us operate our app (under strict confidentiality)</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer (merger, acquisition, etc.)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal data only as long as necessary to provide our services and fulfill the purposes outlined in this policy. Bill data is typically stored for a limited time to allow you to access your history, after which it is automatically deleted.
            </p>
            <p className="text-gray-700 mb-4">
              Guest users who have not accessed the system for 3 months will be automatically deleted from our system to protect your privacy and free up our server space.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> splitdine@noodev8.com<br />
                <strong>Address:</strong> 1 Cumberland Place, Welshpool. SY21 7SB
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-purple-300 transition-colors">SplitDine</h3>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Making group dining simple with intuitive bill splitting. Type while you wait, split what you share.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>splitdine@noodev8.com</li>
                <li>1 Cumberland Place<br />Welshpool. SY21 7SB</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Terms & Privacy</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SplitDine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}