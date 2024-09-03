import EventPresentationTable from "@/components/ir/EventPresentationTable";

export default function IREventsPresentationsPage() {
  return (
    <div className="container" id="container">
      <div className="flex w-full justify-center">
        <div className="row">
          <h1 className="font-bold tracking-wider">Events and Presentations</h1>
        </div>
      </div>
      <div className="row">
        <h1 className="mb-4 font-medium">Upcoming Events</h1>
        <p>No events scheduled.</p>
      </div>
      <div
        className="bg-local flex w-full justify-center"
      >
        <div id="presentation" className="row">
          <h1 className="mb-4">Past Events</h1>
          <EventPresentationTable />
        </div>
      </div>
    </div>
  );
};
 