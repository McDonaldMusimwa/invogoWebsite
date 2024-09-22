import bookkeeping from "../public/images/bookkeeping.png";
import customers from "../public/images/customers.png";
import invoice from "../public/images/invoice.png";
import send from "../public/images/send.png";
const bannar = [
  {
    image: "📱",
    key: 1,
    message: "exceptionally crafted mobile solution",
  },
  {
    image: "🏅",
    key: 2,
    message: "Leading The Tech Industry",
  },
  {
    image: "🤝",
    key: 3,
    message: "Trusted by clients recommended by Experts",
  },
];

export const services = [
  {
    key:1,
    title:"CustomerDatabase",
    image: customers,
    message:
      "We know the challenges of running a small business, from managing daily operations to keeping up with countless other demands. That’s why we offer a cutting-edge customer database, designed to streamline your workflow and help you focus on what matters most.",
  },
  {
    key:2,
    title:"Invoices",
    image: invoice,
    message:
      "InvoGo simplifies invoice creation and management. A standout feature is its built-in tracking system that keeps tabs on both paid and unpaid invoices. Easily filter your invoices by month or payment status, ensuring you stay organized and in control.",
  },
  {
    key:3,
    title:"Easy share",
    image: send,
    message:
      "A key feature of InvoGo is the ability to easily share invoices with clients through the Share button. You can quickly send invoices via email, WhatsApp, or even share them on social media, making communication and payment processing more convenient than ever.",
  },
  {
    key:4,
    title:"book keeping",
    image: bookkeeping,
    message:
      "InvoGo makes bookkeeping and tracking your profitability effortless, eliminating the need to hire an accountant. With our intuitive platform, you can manage your finances seamlessly and ensure your business stays on the right track. Our system allows you to easily monitor income and expenses, giving you clear insights into your financial health. Say goodbye to the complexities of accounting and let InvoGo handle the heavy lifting, so you can focus on growing your business. With InvoGo, staying profitable has never been simpler or more accessible.",
  },
];
export default bannar;
