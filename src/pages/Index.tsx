import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Photography from "@/components/Photography";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <About />
        <Photography />
        <Contact />
      </main>
    </div>
  );
};

export default Index;