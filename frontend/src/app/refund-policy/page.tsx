import { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Return and refund policy for U-Turn4Nature B2B wholesale bulk orders.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout>
      <h1>Return &amp; Refund Policy</h1>
      <p className="text-sm text-info/60">Last updated: July 2026</p>

      <h2>1. Quality Guarantee</h2>
      <p>We stand behind the quality of every product we sell. If any product does not meet the agreed quality standards, we will work with you to resolve the issue promptly.</p>

      <h2>2. Eligible Returns</h2>
      <ul>
        <li><strong>Quality Issues:</strong> Products that are damaged, spoiled, or do not match the agreed specifications</li>
        <li><strong>Wrong Product:</strong> If you receive a product different from what was ordered</li>
        <li><strong>Short Delivery:</strong> If the delivered quantity is less than invoiced</li>
      </ul>

      <h2>3. Return Process</h2>
      <ol>
        <li>Report the issue within <strong>48 hours</strong> of delivery</li>
        <li>Provide photographs and a written description of the issue</li>
        <li>Our quality team will review and respond within 24 hours</li>
        <li>Approved returns will be picked up at our expense</li>
      </ol>

      <h2>4. Non-Returnable Items</h2>
      <ul>
        <li>Products that have been opened, used, or tampered with (unless quality issue is visible on opening)</li>
        <li>Products beyond the return window (48 hours from delivery)</li>
        <li>Custom orders or private-label products</li>
        <li>Natural variations in color, texture, or minor cosmetic differences — these are inherent to handmade products</li>
      </ul>

      <h2>5. Refund Methods</h2>
      <ul>
        <li><strong>Replacement:</strong> We prefer to send a replacement shipment for approved returns</li>
        <li><strong>Credit Note:</strong> A credit note for the value can be applied to your next order</li>
        <li><strong>Refund:</strong> Bank transfer refund processed within 7-10 business days of approval</li>
      </ul>

      <h2>6. Contact</h2>
      <p>For return or refund requests, email <a href="mailto:wholesale@u-turn.in">wholesale@u-turn.in</a> with your order number, photos, and description of the issue.</p>
    </PolicyLayout>
  );
}
