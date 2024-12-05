import Altpanel from "@/components/altpanel";
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screenrelative flex flex-col h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <Altpanel /> 
    </section>
  );
}
