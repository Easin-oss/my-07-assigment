export const initialTickets = [
  {
    id: 1001,
    title: "Login Issues - Can't Access Account",
    description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot access their account. Error message shows 'Invalid credentials'.",
    customer: "John Smith",
    priority: "HIGH",
    status: "open",
    createdAt: "1/15/2024",
    category: "Password"
  },
  {
    id: 1002,
    title: "Payment Failed - Card Declined",
    description: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance. Transaction shows 'Card declined' error.",
    customer: "Sarah Johnson",
    priority: "HIGH",
    status: "open",
    createdAt: "1/18/2024",
    category: "Billing"
  },
  {
    id: 1003,
    title: "Unable to Download Invoice",
    description: "Customer cannot download their January invoice from the billing section. The download button is unresponsive and clicking it does nothing.",
    customer: "Michael Brown",
    priority: "MEDIUM",
    status: "open",
    createdAt: "1/17/2024",
    category: "Billing"
  },
  {
    id: 1004,
    title: "Incorrect Billing Address",
    description: "Customer's billing address shows a different city. They updated it but it still displays the old one on invoices and account settings.",
    customer: "Emily Davis",
    priority: "LOW",
    status: "open",
    createdAt: "1/18/2024",
    category: "Billing"
  },
  {
    id: 1005,
    title: "App Crash on Launch",
    description: "Customer reports that the mobile app crashes immediately upon opening on Android 13. This started after the latest system update.",
    customer: "David Wilson",
    priority: "HIGH",
    status: "open",
    createdAt: "1/19/2024",
    category: "Technical"
  },
  {
    id: 1006,
    title: "Refund Not Processed",
    description: "Customer requested a refund two weeks ago but has not received the amount yet. The refund status shows 'Processing' for over 14 days.",
    customer: "Sophia Taylor",
    priority: "MEDIUM",
    status: "open",
    createdAt: "1/20/2024",
    category: "Billing"
  },
  {
    id: 1007,
    title: "Two-Factor Authentication Issue",
    description: "Customer is not receiving 2FA codes on their registered phone number. They've tried resending multiple times but no SMS arrives.",
    customer: "James Anderson",
    priority: "HIGH",
    status: "open",
    createdAt: "1/21/2024",
    category: "Security"
  },
  {
    id: 1008,
    title: "Subscription Auto-Renewal Problem",
    description: "Customer wants to enable auto-renewal for their subscription but the toggle is disabled. They cannot find the option to turn it on.",
    customer: "Liam Thomas",
    priority: "MEDIUM",
    status: "open",
    createdAt: "1/22/2024",
    category: "Billing"
  },
  {
    id: 1009,
    title: "Missing Order Confirmation Email",
    description: "Customer placed an order but didn't receive a confirmation email even though payment succeeded. They checked spam folder as well.",
    customer: "Jane Merrill",
    priority: "MEDIUM",
    status: "open",
    createdAt: "1/23/2024",
    category: "Orders"
  },
  {
    id: 1010,
    title: "Feature Request - Dark Mode",
    description: "Customer would like to request a dark mode option for better nighttime usage. They find the current bright theme straining on eyes.",
    customer: "Isabella Garcia",
    priority: "LOW",
    status: "open",
    createdAt: "1/24/2024",
    category: "Feature"
  }
];