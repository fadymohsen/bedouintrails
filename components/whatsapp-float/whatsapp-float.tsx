"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./whatsapp-float.module.scss";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.link/qtrpve/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
