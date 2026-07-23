import Navbar from "@/components/layout/Navbar";
import Collaborations from "@/components/collaborations/Collaborations";

export default function CollaborationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Collaborations />
      </main>
    </>
  );
}