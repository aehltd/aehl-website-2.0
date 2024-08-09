import { Quantico } from "next/font/google";

const quantico = Quantico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quantico",
});

export default function EnergyGauge({ value, children }: { value: number, children: React.ReactNode }) {
  let num = value.toString();
  //Display has 6 digits
  //Add 0s to start of number if less
  if (num.length < 6) {
    num = num.padStart(6, "0");
  } else if (num.length > 6) {
    num = num.slice(0, 6);
  }

  return (
    <div className="flex flex-col">
      {children}
      <div className="flex items-center space-x-2">
        <div className="bg-black flex justify-evenly p-1 space-x-1 rounded-sm w-56 h-16">
          {num.split("").map((digit) => {
            return numberDigit({ num: parseInt(digit) });
          })}
        </div>
        <div className="text-2xl">kWh</div>
      </div>
      <div className="flex justify-evenly w-56">
        <p className="minitext text-black">220W</p>
        <p className="minitext text-black">30(100)A</p>
        <p className="minitext text-black">50Hz</p>
        <p className="minitext text-black">1600i mp/kWh</p>
      </div>
    </div>
  );
}

function numberDigit({ num }: { num: number }) {
  return (
    <div
      className={`bg-gray-700 text-4xl px-1 text-white rounded-sm ${quantico.className}`}
    >
      {num}
    </div>
  );
}
