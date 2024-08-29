import SubscribeForm from "@/components/forms/SubscribeForm";
import UnsubscribeForm from "@/components/forms/UnsubscribeForm";

export default function IRContact() {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-gray-500">
        <div className="row">
          <h1 className="text-white">Contact</h1>
        </div>
      </div>
      <div className="row space-y-4">
          <h2 className="underline decoration-2 decoration-sky underline-offset-4">
            Investor inquiries should be directed towards our investor relations
            representative:
          </h2>
          <div>
            <h1 className="font-bold tracking-wide">David Rutnick</h1>
            <p>Precept Investor Relations LLC</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (646) 694 - 8538</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>david.rutnick@preceptir.com</p>
          </div>
      </div>

      <div className="row space-y-4">
        <h1 className="font-bold tracking-wide">Subscribe to our Investor Email Alerts</h1>
        <p className="mb-4">
          If you are interested in working with AEHL and joining us in our
          exciting future, please fill in the information below.
        </p>
        <SubscribeForm />
        <UnsubscribeForm />
      </div>
    </div>
  );
}
