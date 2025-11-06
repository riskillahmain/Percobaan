'use client';
import Header from "@/components/Header";
import OrderBook from "@/components/OrderBook";
import ControlPanel from "@/components/ControlPanel";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      <div className="mx-auto max-w-md">
        <Header />
        <OrderBook />
        <ControlPanel />
        <Footer />
      </div>
    </div>
  );
}
