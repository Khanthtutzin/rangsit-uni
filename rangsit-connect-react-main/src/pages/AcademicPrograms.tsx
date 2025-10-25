import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AcademicPrograms = () => {
  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center">Academic Programs</h1>
          <p className="mt-4 text-center text-muted-foreground">Information about academic programs will be available here.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AcademicPrograms;
