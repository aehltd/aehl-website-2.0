import DiversityMatrix from "@/components/ir/DiversityMatrix";

export default function IRDiversityMatrix() {
  return (
    <div className="container">
      <div className="flex w-full justify-center">
        <div className="row">
          <h1 className="text-black font-bold tracking-wider">Diversity Matrix</h1>
        </div>
      </div>
      <div className="row">
        <DiversityMatrix />
      </div>
    </div>
  );
};
