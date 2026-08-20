import LegalLayout from "../components/layout/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 20, 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how Pyker Digital Services Ltd. ("Pyker", "we",
          "us", or "our") collects, uses, shares, and protects your information when you
          use the Pyker app and related services (the "Service"). By using Pyker, you
          agree to the collection and use of information as described here.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account information:</strong> your name, email address, phone
            number, and password.
          </li>
          <li>
            <strong>Identity verification data:</strong> your Bank Verification Number
            (BVN), government-issued identity documents, date of birth, address, and
            liveness/biometric data captured during identity checks.
          </li>
          <li>
            <strong>Transaction data:</strong> details of crypto sells, bill payments,
            virtual card activity, wallet addresses, and linked bank account details.
          </li>
          <li>
            <strong>Device and usage data:</strong> device identifiers, IP address, app
            version, operating system, and how you interact with the app.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How we use your information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Create and manage your account, and verify your identity.</li>
          <li>Process transactions, including trades, payouts, and bill payments.</li>
          <li>Detect and prevent fraud, money laundering, and other prohibited activity.</li>
          <li>Provide customer support and respond to your requests.</li>
          <li>Improve and maintain the Service, and communicate important updates.</li>
          <li>Comply with applicable legal and regulatory obligations.</li>
        </ul>
      </section>

      <section>
        <h2>4. Who we share your information with</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>
            Identity verification and liveness-check providers, used to confirm who you
            are before you can transact.
          </li>
          <li>
            Payment, banking, and card-issuing partners, used to process payouts, bill
            payments, and virtual card funding.
          </li>
          <li>
            Regulators, law enforcement, or other authorities, where required by law or
            to investigate suspected fraud or illegal activity.
          </li>
          <li>
            Service providers who support our infrastructure (such as cloud hosting),
            bound by confidentiality obligations.
          </li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </section>

      <section>
        <h2>5. Data security</h2>
        <p>
          We use encryption and access controls to protect your data in transit and at
          rest, and require a PIN or biometric confirmation for sensitive actions within
          the app. No method of transmission or storage is completely secure, so while
          we work to protect your information, we can't guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>6. Data retention</h2>
        <p>
          We retain your information for as long as your account is active and for a
          reasonable period afterward to meet our legal, regulatory, tax, and
          record-keeping obligations, or to resolve disputes.
        </p>
      </section>

      <section>
        <h2>7. Your rights</h2>
        <p>
          Depending on applicable law, you may have the right to access, correct, or
          request deletion of your personal information, or to object to certain
          processing. You can update most account information directly in the app, or
          contact us to make a request.
        </p>
      </section>

      <section>
        <h2>8. Cookies and similar technologies</h2>
        <p>
          Our website and app may use cookies or similar technologies to keep you
          signed in, remember your preferences, and understand how the Service is used.
          You can control cookies through your browser or device settings.
        </p>
      </section>

      <section>
        <h2>9. Children's privacy</h2>
        <p>
          Pyker is not intended for anyone under the age of 18, and we do not knowingly
          collect information from minors. If you believe a minor has provided us with
          personal information, please contact us so we can remove it.
        </p>
      </section>

      <section>
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make material
          changes, we'll notify you through the app or by email before the changes take
          effect.
        </p>
      </section>

      <section>
        <h2>11. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or how your information is
          handled, reach us at{" "}
          <a href="mailto:support@usepyker.com">support@usepyker.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
