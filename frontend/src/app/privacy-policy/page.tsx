import { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for U-Turn4Nature B2B wholesale platform. Learn how we collect, use, and protect your business data.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-info/60">Last updated: July 2026</p>

      <h2>1. Introduction</h2>
      <p>
        U-TURN4NATURE LLP (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of our B2B partners, visitors, and users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our B2B wholesale platform at b2b.u-turn.in.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Business Information</h3>
      <ul>
        <li>Company name, GSTIN, business type, and registration details</li>
        <li>Contact person name, designation, email, and phone number</li>
        <li>Billing and shipping addresses</li>
        <li>Business documents uploaded during registration</li>
      </ul>

      <h3>2.2 Usage Data</h3>
      <ul>
        <li>Pages visited, products viewed, and time spent on the platform</li>
        <li>Device information, browser type, and IP address</li>
        <li>Quote requests, order history, and communication records</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>Process your B2B partner registration and application</li>
        <li>Provide wholesale pricing and manage your orders</li>
        <li>Generate GST invoices and business documentation</li>
        <li>Communicate order updates, quotes, and promotional offers</li>
        <li>Improve our platform and services</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell your business data to third parties. We may share information with:
      </p>
      <ul>
        <li>Payment processors for order payments</li>
        <li>Logistics partners for order delivery</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your business information. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal and business data. Contact us at <a href="mailto:support@u-turn.in">support@u-turn.in</a> for any privacy-related requests.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For privacy concerns or questions, contact us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:support@u-turn.in">support@u-turn.in</a></li>
        <li>Phone: +91 7703944883</li>
        <li>Address: Plot No. 4, Sector Kheda Chauganpur, Ecotech 3, Greater Noida – 201306</li>
      </ul>
    </PolicyLayout>
  );
}
