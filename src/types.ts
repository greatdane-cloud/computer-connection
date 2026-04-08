import React from "react";

/* ---------------------------------- */
/* Base Animation Props               */
/* ---------------------------------- */

export interface AnimatedItemProps {
  delay: number;
}

/* ---------------------------------- */
/* Shared Icon + Title + Description  */
/* ---------------------------------- */

export interface IconTitleDescription extends AnimatedItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* ---------------------------------- */
/* Feature Card                       */
/* ---------------------------------- */

export interface FeatureCardProps extends IconTitleDescription {
  href?: string;
}

/* ---------------------------------- */
/* Tech Category                      */
/* ---------------------------------- */

export interface TechCategoryProps extends AnimatedItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

/* ---------------------------------- */
/* Package Card                       */
/* ---------------------------------- */

export interface PackageCardProps extends AnimatedItemProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

/* ---------------------------------- */
/* Contact Info Item                  */
/* ---------------------------------- */

export interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

/* ---------------------------------- */
/* FAQ Item                           */
/* ---------------------------------- */

export interface FAQItemProps {
  question: string;
  answer: string;
}

/* ---------------------------------- */
/* Process Step                       */
/* ---------------------------------- */

export interface ProcessStepProps extends IconTitleDescription {
  number: string;
}

/* ---------------------------------- */
/* Footer Link                        */
/* ---------------------------------- */

export interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

