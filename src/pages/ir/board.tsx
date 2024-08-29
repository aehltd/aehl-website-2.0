import BoardRow from "@/components/ir/Board1";

export default function IRBoard() {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-gray-500">
        <div className="row">
          <h1 className="text-white">Board of Directors</h1>
        </div>
      </div>
      <BoardRow />
    </div>
  );
}
