import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaTripadvisor } from "react-icons/fa";
import styles from "./footer.module.scss";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.mountainDivider} />
      <div className={styles.wrap}>
        <Link href="/" className={styles.footerLogoRowCentered}>
          <Image src="/img/logo.png" alt="Bedouin Trails Logo" width={160} height={160} />
        </Link>
        <div className={styles.columns}>
          <div className={styles.col}>
            <h5 className={styles.colTitle}>{t("navigation")}</h5>
            <nav className={styles.footerMenu}>
              <Link href="/">{t("home")}</Link>
              <Link href="/about">{t("about")}</Link>
              <Link href="/contact">{t("contact")}</Link>
            </nav>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>{t("explore")}</h5>
            <nav className={styles.footerMenu}>
              <Link href="/journeys">{t("safari_trips")}</Link>
              <Link href="/blogs">{t("articles")}</Link>
              <Link href="/faq">{t("faq")}</Link>
            </nav>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>{t("travel_guides")}</h5>
            <nav className={styles.footerMenu}>
              <Link href="/white-desert-tour-from-cairo">{t("guide_whitetour_breadcrumb")}</Link>
              <Link href="/egypt-safari-tours">{t("guide_safaritours_breadcrumb")}</Link>
              <Link href="/bahariya-oasis">{t("guide_bahariya_breadcrumb")}</Link>
              <Link href="/black-desert-egypt">{t("guide_black_breadcrumb")}</Link>
              <Link href="/desert-yoga-retreat">{t("guide_yoga_breadcrumb")}</Link>
              <Link href="/multi-day-desert-trek">{t("guide_trek_breadcrumb")}</Link>
              <Link href="/white-desert-safari">{t("guide_wdsafari_breadcrumb")}</Link>
              <Link href="/siwa-oasis-tour">{t("guide_siwa_breadcrumb")}</Link>
            </nav>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>{t("contact_us")}</h5>
            <div className={styles.contactLinks}>
              <a href="https://wa.link/qtrpve/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> +20 10 02717380
              </a>
              <a href="mailto:info@bedouintrails.com">
                <FaEnvelope /> info@bedouintrails.com
              </a>
              <a
                href="https://www.google.com/maps?q=28.3458203,28.8724705&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt /> Egypt - Giza
              </a>
            </div>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a
            className={styles.socialButton}
            href="https://wa.link/qtrpve/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            className={styles.socialButton}
            href="https://www.instagram.com/the.white.and.black.desert?igsh=aHdjbzB6ajJ5dTBk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className={styles.socialButton}
            href="https://www.facebook.com/profile.php?id=61587717913002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className={styles.socialButton}
            href="https://ar.tripadvisor.com/Attraction_Review-g294202-d34391404-Reviews-Bedouin_Trails-Giza_Giza_Governorate.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
          >
            <FaTripadvisor />
          </a>
        </div>

        <div className={styles.copyrights}>
          <p>{t("terms_privacy")}</p>
        </div>
      </div>
    </footer>
  );
}
