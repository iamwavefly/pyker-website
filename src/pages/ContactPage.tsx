import PageIntro from "../components/ui/PageIntro";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import IconTile from "../components/ui/IconTile";
import Button from "../components/ui/Button";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MegaphoneIcon,
  XLogoIcon,
} from "../components/icons";
import styles from "./ContactPage.module.css";

const SOCIALS = [
  { Icon: XLogoIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramLogoIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinLogoIcon, label: "LinkedIn", href: "#" },
];

const SUPPORT_EMAIL = "support@usepyker.com";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="We're here to help"
        description="Have a question about your account, a transaction, or Pyker in general? Reach out and we'll get back to you."
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            <Card className={styles.card}>
              <IconTile tone="primary">
                <EnvelopeIcon width={20} height={20} />
              </IconTile>
              <h3 className={styles.cardTitle}>Email support</h3>
              <p className={styles.cardText}>
                For account issues, transaction questions, or anything else — this is the
                fastest way to reach the team.
              </p>
              <Button
                variant="ghost"
                size="md"
                href={`mailto:${SUPPORT_EMAIL}`}
                icon={<ArrowRightIcon width={16} height={16} />}
              >
                {SUPPORT_EMAIL}
              </Button>
            </Card>

            <Card className={styles.card}>
              <IconTile tone="green">
                <MegaphoneIcon width={20} height={20} />
              </IconTile>
              <h3 className={styles.cardTitle}>Follow along</h3>
              <p className={styles.cardText}>
                Product updates, announcements and the occasional market take — find us
                on social.
              </p>
              <div className={styles.socials}>
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a href={href} key={label} aria-label={label} className={styles.socialLink}>
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
