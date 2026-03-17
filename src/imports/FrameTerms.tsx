"use client";
import React from "react";
import { LegalTemplate } from "@/components/sections/LegalTemplate";

export default function FrameTerms() {
  const sections = [
    {
      title: "1. Acceptance",
      content: (
        <>
          <p>These Terms constitute a legally binding agreement between you and Kevda Bioworks LLC, a Delaware limited liability company. Your use of the Site is also subject to our Privacy Policy, which is incorporated into these Terms by reference.</p>
        </>
      )
    },
    {
      title: "2. Permitted Use",
      content: (
        <>
          <p className="mb-4">You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Use the Site in any way that violates applicable federal, state, local, or international law or regulation</li>
            <li>Transmit unsolicited or unauthorized advertising, promotional material, or spam</li>
            <li>Attempt to gain unauthorized access to any portion of the Site or its related systems or networks</li>
            <li>Use automated tools, scrapers, bots, or similar technology to access or collect data from the Site without our prior written consent</li>
            <li>Interfere with or disrupt the integrity or performance of the Site or the experience of any other user</li>
            <li>Impersonate or attempt to impersonate Kevda, a Kevda employee, or any other person or entity</li>
            <li>Use the Site to transmit any material that is defamatory, obscene, fraudulent, or otherwise objectionable</li>
          </ul>
          <p>Kevda reserves the right to terminate or restrict your access to the Site at any time, without notice, for conduct that violates these Terms or is otherwise harmful to other users, Kevda, or third parties.</p>
        </>
      )
    },
    {
      title: "3. Intellectual Property",
      content: (
        <>
          <p className="mb-4">All content on the Site — including text, graphics, logos, icons, images, service descriptions, and the overall design and layout — is the property of Kevda Bioworks LLC or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.</p>
          <p className="mb-4">You may view and print individual pages from the Site for your own personal, non-commercial informational use only. You may not reproduce, distribute, modify, create derivative works from, publicly display, republish, or commercially exploit any content from the Site without our prior written permission.</p>
          <p>Nothing in these Terms grants you any right or license to use Kevda&apos;s trademarks, service marks, trade names, or logos. Any unauthorized use is strictly prohibited and may give rise to a claim for damages.</p>
        </>
      )
    },
    {
      title: "4. Informational Purpose Only",
      content: (
        <>
          <p className="mb-4">The content on this Site is provided for general informational purposes only. It does not constitute a binding offer, proposal, commitment, or guarantee of services. All service engagements are governed exclusively by a separate written agreement signed by both parties.</p>
          <p>All services described on this Site are for research use only and are not intended for use in clinical trials, GMP manufacturing, or in vivo applications unless separately agreed to in a signed written agreement.</p>
        </>
      )
    },
    {
      title: "5. No Professional or Scientific Advice",
      content: (
        <>
          <p>Nothing on this Site constitutes scientific, medical, regulatory, legal, financial, or professional advice of any kind. You should not rely on any content on this Site as a substitute for professional consultation appropriate to your specific situation. Kevda assumes no liability for any reliance on the content of this Site.</p>
        </>
      )
    },
    {
      title: "6. Disclaimers",
      content: (
        <>
          <p className="mb-4">THE SITE AND ALL CONTENT AND FUNCTIONALITY ON IT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, KEVDA BIOWORKS LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
          <p>Kevda does not warrant that the Site will be available, uninterrupted, error-free, or free of viruses or other harmful components. Kevda does not warrant the accuracy, completeness, or timeliness of any content on the Site. Any reliance you place on such content is strictly at your own risk.</p>
        </>
      )
    },
    {
      title: "7. Limitation of Liability",
      content: (
        <>
          <p className="mb-4">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, KEVDA BIOWORKS LLC AND ITS MEMBERS, OFFICERS, EMPLOYEES, CONTRACTORS, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, REVENUE, DATA, BUSINESS, OR GOODWILL — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE SITE OR ITS CONTENT, EVEN IF KEVDA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p className="mb-4">In no event will Kevda&apos;s total cumulative liability to you for any claim arising out of or related to these Terms or your use of the Site exceed one hundred U.S. dollars ($100.00).</p>
          <p>Some jurisdictions do not allow the exclusion or limitation of certain warranties or damages. If you are located in such a jurisdiction, some of the above limitations may not apply to you, and your statutory rights remain unaffected.</p>
        </>
      )
    },
    {
      title: "8. Third-Party Links",
      content: (
        <>
          <p>The Site may contain links to third-party websites or resources. These links are provided for convenience only. Kevda does not control, endorse, or assume any responsibility for the content, accuracy, privacy practices, or terms of any third-party site. Your use of third-party sites is entirely at your own risk and is subject to those sites&apos; own terms and policies.</p>
        </>
      )
    },
    {
      title: "9. Confidentiality of Contact Form Submissions",
      content: (
        <>
          <p className="mb-4">Any information you voluntarily submit to Kevda through the Site&apos;s contact form — including descriptions of your research programs, scientific goals, timelines, or other business information — will be handled in accordance with our Privacy Policy.</p>
          <p>Submission of information through the contact form does not, by itself, create a confidential relationship or impose confidentiality obligations on Kevda. If you wish to share sensitive, proprietary, or confidential information, you must request a mutual non-disclosure agreement (NDA) before doing so. This option is available directly in our contact form. Until a signed NDA is in place, Kevda is under no obligation to treat submitted information as confidential.</p>
        </>
      )
    },
    {
      title: "10. Privacy and Cookie Use",
      content: (
        <>
          <p>Your use of the Site is also governed by our Privacy Policy, which describes how we collect, use, and protect your information, including our use of Google Analytics and cookies. By using the Site, you consent to our use of cookies as described in the Privacy Policy. You may withdraw consent at any time by adjusting your browser&apos;s cookie settings.</p>
        </>
      )
    },
    {
      title: "11. Compliance with Export Laws",
      content: (
        <>
          <p>You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the U.S. Department of Commerce. You represent that you are not located in, under the control of, or a national or resident of any country to which the United States has embargoed goods or services.</p>
        </>
      )
    },
    {
      title: "12. Modifications to the Site and These Terms",
      content: (
        <>
          <p>Kevda reserves the right to modify, suspend, or discontinue the Site — or any part of it — at any time and without prior notice. Kevda also reserves the right to update these Terms at any time by posting a revised version with an updated effective date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Site.</p>
        </>
      )
    },
    {
      title: "13. Governing Law and Dispute Resolution",
      content: (
        <>
          <p className="mb-4">These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles.</p>
          <p className="mb-4">Any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Site that cannot be resolved informally shall be submitted to binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall be conducted in English, and the arbitral award shall be final and binding. Each party shall bear its own costs and fees unless the arbitrator determines otherwise.</p>
          <p className="mb-4">Notwithstanding the foregoing, either party may seek emergency injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm. Nothing in these Terms prevents Kevda from seeking such relief in any jurisdiction.</p>
          <p>If you are located in the European Economic Area or the United Kingdom, nothing in these Terms limits your right to bring a claim before the courts of your country of residence or your right to seek redress through your local data protection authority for privacy-related matters.</p>
        </>
      )
    },
    {
      title: "14. Class Action Waiver",
      content: (
        <>
          <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT ANY PROCEEDING TO RESOLVE ANY CLAIM OR DISPUTE WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>
        </>
      )
    },
    {
      title: "15. Severability",
      content: (
        <>
          <p>If any provision of these Terms is found by a court of competent jurisdiction to be unenforceable or invalid, that provision will be modified to the minimum extent necessary to make it enforceable, or severed if modification is not possible. The remaining provisions will continue in full force and effect.</p>
        </>
      )
    },
    {
      title: "16. Waiver",
      content: (
        <>
          <p>No failure or delay by Kevda in exercising any right under these Terms will constitute a waiver of that right. A waiver of any right on one occasion will not be deemed a waiver of that right on any future occasion.</p>
        </>
      )
    },
    {
      title: "17. Entire Agreement",
      content: (
        <>
          <p>These Terms, together with the Privacy Policy, constitute the entire agreement between you and Kevda Bioworks LLC with respect to your use of the Site and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, whether written or oral, relating to your use of the Site.</p>
        </>
      )
    },
    {
      title: "18. Contact",
      content: (
        <>
          <p className="mb-4">If you have questions about these Terms, please contact us:</p>
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
      title="Terms of Use" 
      subtitle="Effective date: May 1, 2026. These Terms of Use govern your access to and use of the Kevda Bioworks LLC website located at kevdabioworks.com." 
      sections={sections} 
    />
  );
}
