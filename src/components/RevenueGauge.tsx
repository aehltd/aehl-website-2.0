export default function RevenueGauge({ value }: { value: number }) {
  return (
    <div className="flex flex-col w-56">
      <div className="flex justify-center mb-2 space-x-2">
        <span className="material-symbols-outlined align-middle text-yellow-400 drop-shadow-sm">
          account_balance
        </span>
        <span>Expected Revenue</span>
      </div>
      <div className="flex bg-white h-16 items-center rounded-sm space-x-2 border">
        <div className="flex bg-slate-500 h-16 items-center rounded-sm">
          <span className="material-symbols-outlined align-middle text-5xl text-white drop-shadow-sm">
            attach_money
          </span>
        </div>
        <div className="text-3xl">{value}</div>
      </div>
    </div>
  );
}
