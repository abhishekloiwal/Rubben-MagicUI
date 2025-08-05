export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tighter">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="w-full px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-12 text-muted-foreground">
              
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Introduction</h2>
                <p className="leading-relaxed">
                  Rubben AI, Inc. ("Rubben," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered investor intelligence platform and related services (collectively, the "Services").
                </p>
                <p className="leading-relaxed">
                  By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Information We Collect</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Account information (name, email address, company name, job title)</li>
                    <li>Payment information (processed securely through our payment providers)</li>
                    <li>Communications with our team (emails, support tickets, feedback)</li>
                    <li>User-generated content (notes, tags, custom fields within the platform)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">Information from Your Systems</h3>
                  <p className="leading-relaxed">
                    When you connect your systems to Rubben, we may access and process:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email communications (for relationship mapping and intelligence)</li>
                    <li>Calendar data (meeting information and attendees)</li>
                    <li>CRM data (investor contacts and interaction history)</li>
                    <li>Document content (pitch decks, investor materials)</li>
                    <li>Financial data (fund performance metrics, if provided)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Usage data (features used, frequency, interaction patterns)</li>
                    <li>Device information (browser type, operating system)</li>
                    <li>Log data (IP address, access times, pages viewed)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing and improving our AI-powered investor intelligence services</li>
                  <li>Creating knowledge graphs and relationship maps</li>
                  <li>Generating personalized insights and recommendations</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Communicating with you about updates, features, and support</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Ensuring platform security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              {/* Data Processing and AI */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Data Processing and AI</h2>
                <p className="leading-relaxed">
                  Our platform uses advanced AI and machine learning technologies to process your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Natural Language Processing to understand communications and documents</li>
                  <li>Knowledge graphs to map relationships and connections</li>
                  <li>Pattern recognition to identify opportunities and insights</li>
                  <li>Predictive analytics for investor engagement recommendations</li>
                </ul>
                <p className="leading-relaxed">
                  All AI processing is designed with privacy in mind. We do not use your data to train models that would benefit other customers. Your data remains isolated and is used solely to provide services to you.
                </p>
              </section>

              {/* Data Sharing and Disclosure */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Data Sharing and Disclosure</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="font-semibold text-foreground">Service Providers:</strong> With trusted third parties who assist in operating our platform (e.g., cloud hosting, payment processing)</li>
                  <li><strong className="font-semibold text-foreground">Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
                  <li><strong className="font-semibold text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong className="font-semibold text-foreground">Consent:</strong> With your explicit consent for specific purposes</li>
                  <li><strong className="font-semibold text-foreground">Aggregated Data:</strong> We may share anonymized, aggregated data that cannot identify you</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Data Security</h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="leading-relaxed">
                  While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your information for as long as necessary to provide our Services and fulfill the purposes outlined in this policy. Specifically:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account data: Retained while your account is active</li>
                  <li>Communication data: Retained to maintain relationship intelligence</li>
                  <li>Usage data: Retained for analytics and improvement purposes</li>
                  <li>Legal records: Retained as required by applicable laws</li>
                </ul>
                <p className="leading-relaxed">
                  Upon account termination, we will delete or anonymize your data within 90 days, unless retention is required for legal purposes.
                </p>
              </section>

              {/* Your Rights and Choices */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Your Rights and Choices</h2>
                <p className="leading-relaxed">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="font-semibold text-foreground">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="font-semibold text-foreground">Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong className="font-semibold text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong className="font-semibold text-foreground">Portability:</strong> Receive your data in a structured format</li>
                  <li><strong className="font-semibold text-foreground">Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong className="font-semibold text-foreground">Restriction:</strong> Limit how we process your data</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, please contact us at privacy@rubben.ai. We will respond to your request within 30 days.
                </p>
              </section>

              {/* International Data Transfers */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">International Data Transfers</h2>
                <p className="leading-relaxed">
                  Our Services are operated from the United States. If you are located outside the United States, please be aware that your information will be transferred to, stored, and processed in the United States. By using our Services, you consent to this transfer.
                </p>
                <p className="leading-relaxed">
                  We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and compliance with applicable data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete such information.
                </p>
              </section>

              {/* California Privacy Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">California Privacy Rights</h2>
                <p className="leading-relaxed">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know whether personal information is sold or disclosed</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
                <p className="leading-relaxed">
                  We do not sell personal information. To exercise your rights under CCPA, contact us at privacy@rubben.ai.
                </p>
              </section>

              {/* Updates to This Policy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last updated" date at the top of this policy</li>
                  <li>Sending an email notification for significant changes</li>
                </ul>
                <p className="leading-relaxed">
                  We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              {/* Contact Us */}
              <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 ml-4">
                  <p><strong className="font-semibold text-foreground">Email:</strong> privacy@rubben.ai</p>
                  <p><strong className="font-semibold text-foreground">Address:</strong> Rubben AI, Inc.<br />San Francisco, CA</p>
                  <p><strong className="font-semibold text-foreground">Data Protection Officer:</strong> dpo@rubben.ai</p>
                </div>
              </section>

              {/* Compliance Badges */}
              <section className="space-y-4 pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-6">
                  <p className="text-sm text-muted-foreground">We are committed to:</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium px-3 py-1 bg-secondary/10 rounded-full">SOC 2 Compliant</span>
                    <span className="text-xs font-medium px-3 py-1 bg-secondary/10 rounded-full">GDPR Ready</span>
                    <span className="text-xs font-medium px-3 py-1 bg-secondary/10 rounded-full">CCPA Compliant</span>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
    </main>
  );
}