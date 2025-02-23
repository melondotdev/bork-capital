import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { Modal } from './Modal';

export function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-bold mb-4">Bork Capital</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Betting on Communities. Join us in building the future of memecoin economies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/borkinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow on X (Twitter)"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bork Research Institute. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Terms of Service Modal */}
      <Modal
        title="Terms of Use"
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      >
        <p className="font-semibold">Last updated: 22 Feb 2025</p>
        <p className="mt-4">
          These Terms of Use (“Terms”) constitute a legally binding agreement between you and Bork Research Institute (“Company”, “we”, “us”, or “our”). They govern your access to and use of our website and subdomains at bork.institute (“Website”), as well as any associated media channels or applications.
        </p>
        <p className="mt-4">
          BY ACCESSING OR USING ANY PORTION OF THE WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, PLEASE DISCONNECT YOUR WALLET, DISABLE ANY LINKED ACCOUNTS, AND CEASE USAGE IMMEDIATELY.
        </p>
        <h3 className="font-bold mt-6">Memecoin Liability and Disclaimers</h3>
        <p className="mt-2">
          <strong>No Financial Advice.</strong> The Website is provided solely for informational purposes regarding the memecoin ecosystem. We do not provide financial advice. Any decisions you make based on content from the Website are your sole responsibility.
        </p>
        <p className="mt-2">
          <strong>Wallet & Account Risks.</strong> You acknowledge that connecting your wallet or linking social media accounts carries risks. Bork Research Institute is not liable for any loss, damage, or compromise arising from wallet compromises, social media account breaches, or unauthorized access.
        </p>
        <p className="mt-2">
          <strong>Third-Party Protocol Risks.</strong> Our operations may involve external platforms and services (e.g., gofundmeme, jupiter exchange, streamflow, phantom, or orca). We do not control these third parties, and any protocol compromise or malfunction on their part is not our responsibility. By using the Website and connecting your wallet, you expressly assume the risks associated with third-party wallet adapters and external protocols.
        </p>
        <h3 className="font-bold mt-6">General Terms and Conditions</h3>
        <p className="mt-2">
          <strong>1.1 Use.</strong> The Website provides information, news, updates, and organizes campaigns related to the Bork ecosystem. We do not control blockchain activities, transaction validations, or data on any blockchain.
        </p>
        <p className="mt-2">
          <strong>1.2 License.</strong> The Website is licensed for your personal, non-commercial use only. Any third-party terms (including fees from your mobile network operator) apply solely to you.
        </p>
        <p className="mt-2">
          <strong>1.3 Privacy.</strong> Your use of the Website is subject to our Privacy Policy, which governs the collection and use of your personal information.
        </p>
        <p className="mt-2">
          <strong>1.4 Campaign Participation.</strong> Participation in any campaign on the Website is subject to additional rules that may be updated from time to time.
        </p>
        <p className="mt-2">
          <strong>1.5 Smart Contract Management.</strong> By using the Website, you grant permission for us to execute on-chain activities through our smart contracts on your behalf. We are not a wallet provider, exchange, or broker.
        </p>
        <p className="mt-2">
          <strong>1.6 Personal Use Only.</strong> The Website is for your personal use. Any commercial use requires our prior written consent.
        </p>
        <p className="mt-2">
          <strong>1.7 Eligibility.</strong> You must be at least 18 years old (or the legal age in your jurisdiction) to use the Website and participate in its offerings.
        </p>
        <p className="mt-2">
          <strong>1.8 Changes.</strong> We reserve the right to modify these Terms at any time. Continued use of the Website constitutes acceptance of the modified Terms.
        </p>
        <p className="mt-2">
          <strong>1.9 Consideration.</strong> Access to the Website is provided free of charge. Any revenue or goodwill generated does not entitle you to any share.
        </p>
        <p className="mt-2">
          <strong>1.10 Jurisdiction.</strong> The Website is operated by Bork Research Institute. Access from outside our jurisdiction is at your own risk.
        </p>
        <p className="mt-2">
          <strong>1.11 Mobile Uses.</strong> Use via mobile devices is subject to carrier restrictions and charges.
        </p>
        <p className="mt-2">
          <strong>1.12 Additional Terms.</strong> Any additional terms announced on the Website are incorporated into these Terms.
        </p>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        title="Privacy Policy"
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      >
        <p className="text-gray-700">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and the measures we take to ensure its security. We use cookies and other tracking technologies to enhance your experience, but you can disable these in your browser settings.
        </p>
        <p className="text-gray-700 mt-4">
          Your data is used solely to improve our services and is not shared with third parties without your consent, except as required by law. By using our platform, you consent to our privacy practices.
        </p>
      </Modal>
    </footer>
  );
}
