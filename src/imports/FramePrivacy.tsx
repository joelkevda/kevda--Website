"use client";
import React from "react";
import { LegalTemplate } from "@/components/sections/LegalTemplate";

export default function FramePrivacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p className="mb-4">We collect information in two ways.</p>
          <p className="mb-4"><strong>Information you provide directly.</strong> When you submit our contact form, you may provide your name, job title, company name, email address, service interest, target timeline, and any details you include in your message. If you check the NDA request checkbox, we note that preference as well.</p>
          <p className="mb-4"><strong>Information collected automatically.</strong> When you visit our site, we use Google Analytics, a web analytics service provided by Google LLC. Google Analytics collects information such as your IP address, browser type, operating system, referring URL, pages visited, time spent on pages, and date and time of your visit. This data is transmitted to and stored by Google on servers in the United States. Google may also transfer this information to third parties where required by law, or where such third parties process the information on Google&apos;s behalf. Google will not associate your IP address with any other data held by Google. You can opt out of Google Analytics tracking at any time by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.</p>
          <p>We also use cookies — small text files stored in your browser — to support Google Analytics and basic site functionality. You may disable or delete cookies through your browser settings at any time. Disabling cookies will prevent Google Analytics from collecting data about your visit and may affect certain site functionality. We do not use cookies for advertising or cross-site tracking.</p>
        </>
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Respond to your inquiry and follow up with scope-alignment questions or next steps</li>
            <li>Send you information about Kevda&apos;s services that you have requested</li>
            <li>Understand how our website is being used so we can improve it</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>We do not use your information for advertising purposes. We do not sell, rent, or trade your personal information to third parties. We do not use your information to make automated decisions about you.</p>
        </>
      )
    },
    {
      title: "3. How Your Contact Form Submission Is Handled",
      content: (
        <>
          <p className="mb-4">When you submit our contact form, your submission is delivered directly to Kevda by email. Submissions are not stored in a third-party database or CRM. Your information is accessible only to Kevda personnel who need it to respond to your inquiry.</p>
          <p>We retain email correspondence for as long as necessary to respond to your inquiry and to fulfill any follow-on business or legal obligations. If you request that we delete your information, we will do so promptly, subject to any legal retention requirements that may apply.</p>
        </>
      )
    },
    {
      title: "4. Legal Bases for Processing (EEA, UK, and Switzerland)",
      content: (
        <>
          <p className="mb-4">If you are located in the European Economic Area, the United Kingdom, or Switzerland, we process your personal data under the following legal bases:</p>
          <p className="mb-4"><strong>Legitimate interests.</strong> We process contact form submissions and analytics data to respond to business inquiries and to understand how our website is used. These interests are not overridden by your rights and interests.</p>
          <p className="mb-4"><strong>Consent.</strong> Where required by applicable law, we will obtain your consent before placing cookies or processing your data for analytics purposes. You may withdraw consent at any time by contacting us at info@kevdabioworks.com or by using your browser&apos;s cookie controls.</p>
          <p><strong>Legal obligation.</strong> We may process your data where necessary to comply with a legal obligation.</p>
        </>
      )
    },
    {
      title: "5. How We Share Information",
      content: (
        <>
          <p className="mb-4">We do not sell your personal information. We share information only in the following limited circumstances:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Google Analytics.</strong> We share website usage data with Google LLC as described in Section 1. Google&apos;s privacy policy is available at policies.google.com/privacy.</li>
            <li><strong>Email service providers.</strong> Your contact form submission is delivered to us via our email infrastructure provider. That provider processes your submission solely to deliver it to us and is not permitted to use it for any other purpose.</li>
            <li><strong>Legal requirements.</strong> We may disclose information if required to do so by law, court order, or regulatory authority, or if we reasonably believe disclosure is necessary to protect our legal rights, your safety, or the safety of others.</li>
            <li><strong>Business transfers.</strong> If Kevda is acquired, merged with another company, or undergoes a change of ownership, your information may be transferred as part of that transaction. We will notify you of any such change that materially affects how your information is handled.</li>
          </ul>
        </>
      )
    },
    {
      title: "6. International Data Transfers",
      content: (
        <>
          <p className="mb-4">Kevda Bioworks LLC operates in the United States and India. If you are visiting our website from the European Economic Area, the United Kingdom, Switzerland, or any other jurisdiction outside the United States, please be aware that information you provide may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your home jurisdiction.</p>
          <p>For transfers of personal data from the EEA, UK, or Switzerland to the United States, we rely on appropriate safeguards including the EU Standard Contractual Clauses (SCCs) as adopted by the European Commission, and their UK equivalents where applicable. Where Google Analytics is involved, Google LLC participates in and certifies compliance with applicable data transfer frameworks. By using our website, you acknowledge that your information may be transferred internationally as described in this policy.</p>
        </>
      )
    },
    {
      title: "7. Security",
      content: (
        <>
          <p className="mb-4">We take the security of your information seriously. We use reasonable administrative, technical, and physical measures to protect information submitted to us. However, no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of any information you transmit to us.</p>
          <p>If you wish to share sensitive program details, proprietary sequences, or confidential research information, we strongly recommend requesting an NDA before doing so. This option is available directly in our contact form.</p>
        </>
      )
    },
    {
      title: "8. Your Rights and Choices",
      content: (
        <>
          <p className="mb-4">Depending on where you are located, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>Access</strong> — request a copy of the personal information we hold about you</li>
            <li><strong>Correction</strong> — request that we correct inaccurate or incomplete information</li>
            <li><strong>Deletion</strong> — request that we delete your personal information</li>
            <li><strong>Restriction</strong> — request that we restrict how we use your information</li>
            <li><strong>Portability</strong> — request a machine-readable copy of the information you have provided to us</li>
            <li><strong>Objection</strong> — object to our processing of your information based on legitimate interests</li>
            <li><strong>Withdrawal of consent</strong> — where processing is based on consent, withdraw that consent at any time</li>
            <li><strong>Opt out of analytics</strong> — install the Google Analytics Opt-out Browser Add-on at tools.google.com/dlpage/gaoptout</li>
          </ul>
          <p>To exercise any of these rights, contact us at info@kevdabioworks.com. We will respond within 30 days. We will not charge you for making a request. If you are located in the EEA or UK and are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.</p>
        </>
      )
    },
    {
      title: "9. Data Retention",
      content: (
        <>
          <p>We retain contact form submissions and related email correspondence for as long as necessary to respond to your inquiry and for a reasonable period thereafter, consistent with our legitimate business interests and applicable legal obligations. Google Analytics data is retained for 26 months, after which it is automatically deleted. If you request deletion of your information, we will act on that request promptly.</p>
        </>
      )
    },
    {
      title: "10. Children",
      content: (
        <>
          <p>Our website is intended for business professionals and is not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us and we will delete it promptly.</p>
        </>
      )
    },
    {
      title: "11. Changes to This Policy",
      content: (
        <>
          <p>We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. For material changes, we will take reasonable steps to notify you. Your continued use of the website after changes are posted constitutes your acceptance of the updated policy.</p>
        </>
      )
    },
    {
      title: "12. Contact",
      content: (
        <>
          <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
          <address className="not-italic">
            Kevda Bioworks LLC<br />
            8 The Green, Suite B, Dover, DE 19901<br />
            info@kevdabioworks.com
          </address>
        </>
      )
    }
  ];

  return (
    <LegalTemplate 
      title="Privacy Policy" 
      subtitle="Effective date: May 1, 2026. This Privacy Policy describes how Kevda Bioworks LLC collects, uses, and protects information when you visit our website or submit an inquiry through our contact form." 
      sections={sections} 
    />
  );
}
