'use client';
export default function ControlPanel() {
  return (
    <>
      <div className="py-12 text-center bg-gray-950">
        <p className="text-gray-400 text-sm">Connect to start trading</p>
      </div>
      <div className="bg-gray-950 grid grid-cols-2 gap-4 p-4">
        <button
          type="submit"
          className="py-3 bg-gray-800 text-white rounded-lg font-medium"
        >
          Trade
        </button>
        <button
          type="submit"
          className="py-3 bg-gray-800 text-white rounded-lg font-medium"
        >
          Chart
        </button>
      </div>
    </>
  );
}
