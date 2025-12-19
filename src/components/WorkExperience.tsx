import dolt from "../assets/dolt.jpeg";
import logo from "../assets/logo.jpeg";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Softknack",
        role: "Full Stack Developer",
        type: "Full-Time",
        date: "Dec 2025 -  Present",
        logo: logo,
    },
    {
        company: "Dolt Labs",
        role: "Java Full Stack Developer",
        type: "Internship",
        date: "Jan 2025 - Jun 2025",
        logo: dolt,
    },
];

export function WorkExperience() {
    return (
        <section className="py-20 relative">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Work Experience</h2>
            <div className="max-w-3xl mx-auto space-y-6 px-4">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-border/50 shrink-0 p-1 bg-background/50">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <h3 className="font-bold text-lg text-foreground group-hover:text-purple-400 transition-colors">
                                            {exp.company}
                                        </h3>
                                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold border border-border/50">
                                            {exp.type}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground font-medium">{exp.role}</p>
                                </div>
                            </div>
                            <span className="hidden sm:block text-sm font-medium text-muted-foreground tabular-nums bg-secondary/50 px-3 py-1 rounded-full">
                                {exp.date}
                            </span>
                        </div>
                        <div className="mt-4 sm:hidden">
                            <span className="text-sm font-medium text-muted-foreground tabular-nums bg-secondary/50 px-3 py-1 rounded-full">
                                {exp.date}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
