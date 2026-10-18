import Container from "../ui/Container";
import Phone from "../ui/Phone";
import Reveal from "../ui/Reveal";
import StoreButtons from "../ui/StoreButtons";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section id="download" className={styles.section}>
      <Container>
        <Reveal className={styles.panel}>
          <div className={styles.phones} aria-hidden="true">
            <Phone src="/screens/sell-address.png" alt="" className={styles.phoneLeft} />
            <Phone src="/screens/virtual-card.png" alt="" className={styles.phoneRight} />
          </div>

          <div className={styles.copy}>
            <img src="/pyker-icon.png" alt="" className={styles.icon} />
            <h2 className={`display ${styles.title}`}>
              Get the Pyker <span className="accent">mobile app</span>
            </h2>
            <p className={styles.description}>
              Verify in minutes and turn your next deposit into naira you can spend, save or send.
            </p>
            <StoreButtons />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
