'use client';
import React from 'react';
import styles from "./components.module.css";
import { IoLogoWhatsapp } from 'react-icons/io';

export default function WhatsAppIcont() {
  const handleClick = () => {
    window.open('https://wa.me/5511971421566', '_blank');
  };

  return (
    <div className={styles.whatsappIcon} onClick={handleClick}>
      <IoLogoWhatsapp size={50} color="#25D366" />
    </div>
  );
};

