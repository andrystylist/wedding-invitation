import EnvelopeButton from "@/components/EnvelopeButton";
import Invitation from "@/components/Invitation";

export default function Page() {
  return (
    <section className="overflow-hidden relative z-20 mx-auto h-full min-h-screen w-full max-w-md overflow-x-clip sm:shadow-xl">
      <EnvelopeButton />
      <Invitation />
    </section>
  );
}
