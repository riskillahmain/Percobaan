'use client';
export default function OrderBook() {
  return (
    <div className="flex">
      <div className="w-32 bg-gray-950 border-r border-gray-800">
        <div className="flex border-b border-gray-800">
          <div className="text-center py-2 text-xs text-gray-400 flex-1">Price</div>
          <div className="text-center py-2 text-xs text-gray-400 flex-1">Size</div>
        </div>
        <div className="text-xs">
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.085</span>
            <span className="text-gray-400">100K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.083</span>
            <span className="text-gray-400">175K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.068</span>
            <span className="text-gray-400">175K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.059</span>
            <span className="text-gray-400">50.0K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.056</span>
            <span className="text-gray-400">19.9K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.055</span>
            <span className="text-gray-400">9.99K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.054</span>
            <span className="text-gray-400">204K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-red-900/20">
            <span className="text-red-400">161.048</span>
            <span className="text-gray-400">82.1</span>
          </div>
          <div className="justify-between px-2 py-1.5 flex">
            <span className="text-green-400 text-base font-bold">161.03</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">161.007</span>
            <span className="text-gray-400">4.99K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">161.006</span>
            <span className="text-gray-400">9.99K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">161.005</span>
            <span className="text-gray-400">19.9K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">161.002</span>
            <span className="text-gray-400">49.9K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">160.993</span>
            <span className="text-gray-400">160K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">160.980</span>
            <span className="text-gray-400">160K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">160.971</span>
            <span className="text-gray-400">4.99K</span>
          </div>
          <div className="justify-between px-2 py-1 bg-gradient-to-r flex from-transparent to-green-900/20">
            <span className="text-green-400">160.967</span>
            <span className="text-gray-400">160K</span>
          </div>
        </div>
        <div className="px-2 py-2 text-xs text-gray-500">Spread: 0.025%</div>
      </div>
      <div className="bg-gray-900 flex-1 p-4">
        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            type="submit"
            className="rounded py-3 bg-green-600 text-white font-medium"
          >
            Long
          </button>
          <button
            type="submit"
            className="rounded py-3 bg-gray-800 text-gray-400 font-medium"
          >
            Short
          </button>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          Available:
          <span className="text-white">$0.00</span>
        </div>
        <div className="items-center justify-between mb-4 flex">
          <span className="text-sm text-gray-400">Order Type</span>
          <button type="submit" className="flex gap-1 text-white items-center">
            Market
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_YLAhCaqYb"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
        <div className="mb-4">
          <div className="items-center justify-between mb-2 flex">
            <span className="text-sm text-gray-400">Size</span>
            <div className="items-center flex gap-1">
              <span className="text-white">0.00</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_GzDeSOD4M"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_MGt82b9fa"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </div>
          </div>
          <div className="relative">
            <input
              min="0"
              max="100"
              value="0"
              type="range"
              className="appearance-none cursor-pointer w-full h-2 bg-gray-800 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-4 space-y-3">
          <label className="items-center flex gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-600 w-4 h-4 bg-gray-800"
            />
            <span className="text-sm text-gray-400">Reduce Only</span>
          </label>
          <label className="items-center flex gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-600 w-4 h-4 bg-gray-800"
            />
            <span className="text-sm text-gray-400">TP/SL</span>
          </label>
        </div>
        <button
          type="submit"
          className="from-pink-300 to-blue-300 w-full py-3 bg-gradient-to-r text-gray-900 rounded-lg font-medium mb-4"
        >
          Connect Wallet
        </button>
        <div className="text-sm space-y-3">
          <div className="items-center justify-between flex">
            <span className="text-gray-400">Slippage (Dynamic)</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_K8MUwxnaJ"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div className="items-center justify-between flex">
            <span className="text-gray-400">Margin Required</span>
            <span className="text-white">$0.00</span>
          </div>
          <div className="items-center justify-between flex">
            <span className="text-gray-400">Liquidation Price</span>
            <span className="text-white">None</span>
          </div>
          <div className="items-center justify-between flex">
            <span className="text-gray-400">Fees</span>
            <span className="text-white">-</span>
          </div>
        </div>
        <div className="mt-4 bg-gray-800 rounded-lg p-3">
          <div className="items-center justify-between flex">
            <div>
              <div className="text-sm">
                <span className="text-white">USDC</span>
                <span className="text-green-400">5.08% APY</span>
              </div>
              <div className="text-xs text-gray-400">Earn with or without trading.</div>
            </div>
            <img
              alt="Icon"
              src="https://placehold.co/40x40/1e40af/ffffff"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
