import { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Payment Policy",
  description: "Payment terms, methods, and policies for U-Turn4Nature B2B wholesale orders.",
};

export default function PaymentPolicyPage() {
  return (
    <PolicyLayout>
      <h1>Payment Policy</h1>
      <p className="text-sm text-info/60">Last updated: July 2026</p>

      <h2>1. Accepted Payment Methods</h2>
      <ul>
        <li><strong>Bank Transfer (NEFT/RTGS/IMPS):</strong> Direct transfer to our business bank account</li>
        <li><strong>UPI:</strong> Available for smaller orders and quick payments</li>
        <li><strong>Cheque / Demand Draft:</strong> For institutional and government buyers</li>
        <li><strong>Online Payment Gateway:</strong> Credit/Debit card payments via secure gateway</li>
      </ul>

      <h2>2. Payment Terms</h2>
      <h3>New Partners</h3>
      <ul>
        <li>100% advance payment for the first 3 orders</li>
        <li>Payment must be received before order dispatch</li>
      </ul>
      <h3>Established Partners</h3>
      <ul>
        <li><strong>50% Advance + 50% on Delivery:</strong> Available after 3 successful orders</li>
        <li><strong>Net 30 Credit:</strong> Available for partners with 6+ months and consistent order history</li>
        <li><strong>Net 60 Credit:</strong> Available for high-volume partners upon credit assessment</li>
      </ul>

      <h2>3. Credit Limit</h2>
      <p>Credit limits are assessed based on order history, business size, and creditworthiness. Your dedicated account manager will inform you of your approved credit limit.</p>

      <h2>4. GST &amp; Invoicing</h2>
      <ul>
        <li>All prices are exclusive of GST unless mentioned otherwise</li>
        <li>Applicable GST will be charged as per government rates</li>
        <li>Proper GST Tax Invoice will be provided with every order</li>
        <li>Input Tax Credit (ITC) can be claimed on our invoices</li>
      </ul>

      <h2>5. Late Payment</h2>
      <ul>
        <li>Late payments beyond the agreed credit period may attract interest at 2% per month</li>
        <li>Persistent late payments may result in suspension of credit terms</li>
        <li>Orders may be held until outstanding payments are cleared</li>
      </ul>

      <h2>6. Currency</h2>
      <p>All transactions are processed in Indian Rupees (INR). International partners will receive quotes in INR; forex conversion charges, if any, are borne by the buyer.</p>

      <h2>7. Contact</h2>
      <p>For payment queries, contact our finance team at <a href="mailto:wholesale@u-turn.in">wholesale@u-turn.in</a> or call +91 7703944883.</p>
    </PolicyLayout>
  );
}
