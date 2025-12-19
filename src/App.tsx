import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WorkExperience } from "./components/WorkExperience";

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 space-y-20 pb-20">
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <div id="experience">
                    <WorkExperience />
                </div>
            </main>
        </div>
    );
}

export default App;
