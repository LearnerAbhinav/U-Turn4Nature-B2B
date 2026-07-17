import { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for U-Turn4Nature B2B wholesale platform.",
};

export default function TermsPage() {
  return (
    <PolicyLayout>
      <h1>Terms &amp; Conditions</h1>
      <p className="text-sm text-info/60">Last updated: July 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using the U-Turn4Nature B2B wholesale platform (b2b.u-turn.in), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our platform.
      </p>

      <h2>2. B2B Partner Eligibility</h2>
      <ul>
        <li>Our platform is exclusively for business buyers — retailers, distributors, HoReCa, corporate buyers, and institutional buyers</li>
        <li>You must be a registered business entity in India</li>
        <li>Registration is subject to approval by U-Turn4Nature</li>
        <li>We reserve the right to reject or revoke any partnership</li>
      </ul>

      <h2>3. Products &amp; Pricing</h2>
      <ul>
        <li>All prices are wholesale prices exclusive of applicable GST unless stated otherwise</li>
        <li>Prices are subject to change based on market conditions and supply availability</li>
        <li>Minimum Order Quantities (MOQ) apply to all products</li>
        <li>Custom quotes are valid for the duration specified in the quote</li>
      </ul>

      <h2>4. Orders &amp; Payment</h2>
      <ul>
        <li>Orders are confirmed only after payment receipt or credit approval</li>
        <li>Payment terms are as agreed during partner onboarding</li>
        <li>Late payments may attract interest charges as per applicable laws</li>
        <li>All payments must be made in Indian Rupees (INR)</li>
      </ul>

      <h2>5. Quality Assurance</h2>
      <p>
        All products are manufactured by SHG women using traditional methods and are FSSAI licensed. We maintain strict quality control. However, natural products may have minor variations in color, texture, and taste — this is a mark of authenticity, not a defect.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The U-Turn4Nature brand, logo, and all content on this platform are the property of U-TURN4NATURE LLP. Use of our brand materials requires prior written permission.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        U-Turn4Nature shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or platform. Our total liability is limited to the value of the specific order in question.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Greater Noida, Uttar Pradesh.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions about these terms, contact us at <a href="mailto:support@u-turn.in">support@u-turn.in</a> or call +91 7703944883.
      </p>
    </PolicyLayout>
  );
}
