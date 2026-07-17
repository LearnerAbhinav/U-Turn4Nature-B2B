import { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping & logistics policy for U-Turn4Nature B2B wholesale orders.",
};

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout>
      <h1>Shipping &amp; Logistics Policy</h1>
      <p className="text-sm text-info/60">Last updated: July 2026</p>

      <h2>1. Delivery Coverage</h2>
      <p>We deliver wholesale orders across all states and union territories of India. International shipping is available on request for export partners.</p>

      <h2>2. Processing &amp; Dispatch</h2>
      <ul>
        <li><strong>Order Processing:</strong> 1-2 business days after order confirmation</li>
        <li><strong>Dispatch Time:</strong> 3-5 business days from order confirmation</li>
        <li><strong>Delivery Time:</strong> 5-10 business days depending on location</li>
        <li>Custom/bulk orders may require additional processing time (communicated upfront)</li>
      </ul>

      <h2>3. Shipping Charges</h2>
      <ul>
        <li>Shipping charges are calculated based on order weight, volume, and delivery location</li>
        <li>Free shipping may be available for orders above a certain value (communicated during ordering)</li>
        <li>Exact shipping cost is provided at the time of quote/order confirmation</li>
      </ul>

      <h2>4. Packaging</h2>
      <p>All products are carefully packed in food-grade packaging to ensure product integrity during transit. Bulk orders are packed in sturdy cartons and palletized when necessary.</p>

      <h2>5. Order Tracking</h2>
      <p>Once dispatched, you will receive a tracking number via email and SMS. Track your order status through your partner dashboard.</p>

      <h2>6. Delivery Documentation</h2>
      <ul>
        <li>GST Invoice</li>
        <li>Delivery Challan</li>
        <li>Quality Certificate (where applicable)</li>
        <li>E-Way Bill (for interstate orders)</li>
      </ul>

      <h2>7. Damaged/Missing Items</h2>
      <p>If you receive damaged or missing items, please report within 48 hours of delivery with photographic evidence. We will arrange a replacement or credit.</p>

      <h2>8. Contact</h2>
      <p>For shipping queries, contact us at <a href="mailto:wholesale@u-turn.in">wholesale@u-turn.in</a> or call +91 7703944883.</p>
    </PolicyLayout>
  );
}
