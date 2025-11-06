'use client';
export default function Footer() {
  return (
    <div className="bg-gray-950 flex border-t border-gray-800">
      <button type="submit" className="flex-1 py-3 text-sm text-gray-400">
        Account
        <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_VoYoyaYpK"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      <button type="submit" className="flex-1 border-b-2 border-blue-500 py-3 text-sm text-blue-500">
        Positions
      </button>
      <button type="submit" className="flex-1 py-3 text-sm text-gray-400">Orders</button>
      <button type="submit" className="flex-1 py-3 text-sm text-gray-400">Balances</button>
      <button type="submit" className="flex-1 py-3 text-sm text-gray-400">
        Order History
      </button>
    </div>
  );
}
