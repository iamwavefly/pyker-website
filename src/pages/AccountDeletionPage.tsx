import LegalLayout from "../components/layout/LegalLayout";

export default function AccountDeletionPage() {
  return (
    <LegalLayout title="Delete Your Account" lastUpdated="August 20, 2026">
      <section>
        <h2>How to request account deletion</h2>
        <p>
          To delete your Pyker account, send an email to{" "}
          <a href="mailto:support@usepyker.com">support@usepyker.com</a> from the email
          address registered on your account, with the subject line "Account Deletion
          Request." Please include the phone number associated with your account so we
          can verify your identity before processing the request.
        </p>
      </section>

      <section>
        <h2>What happens to your account</h2>
        <p>
          Once we've verified your request, we'll disable your account and remove your
          profile information, including your name, email, phone number, and any
          identity documents on file, from our active systems.
        </p>
      </section>

      <section>
        <h2>What data we retain, and why</h2>
        <p>
          Some information cannot be deleted immediately. As a financial service, we're
          required to retain certain records, such as transaction history, identity
          verification records, and related communications, for a period after an
          account is closed, to meet legal, regulatory, and anti-fraud obligations. This
          data is kept securely, is no longer accessible through the app, and is not
          used for any purpose other than compliance and legal record-keeping.
        </p>
      </section>

      <section>
        <h2>How long it takes</h2>
        <p>
          We process account deletion requests within 30 days of verifying your
          identity. If you have a pending transaction, virtual card, or outstanding
          balance, we'll reach out to help you resolve it before closing your account.
        </p>
      </section>

      <section>
        <h2>Questions</h2>
        <p>
          If you have questions about this process or what happens to your data, reach
          us at <a href="mailto:support@usepyker.com">support@usepyker.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
