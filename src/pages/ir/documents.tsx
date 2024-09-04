import DocumentsTable from "@/components/ir/DocumentsTable";

export default function IRDocumentsPage() {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center">
        <div className="row">
          <h1 className="text-black font-bold tracking-wider">Documents</h1>
        </div>
      </div>
      <div className="row">
        <DocumentsTable />
      </div>
    </div>
  );
}
