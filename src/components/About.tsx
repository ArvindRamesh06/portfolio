import { motion } from "framer-motion";
import { Code, Terminal, Zap } from "lucide-react";

export function About() {
    const skills = [
        { name: "Languages", icon: Zap, text: "Java, HTML, CSS, JavaScript, TypeScript, SQL" },
        { name: "Frameworks", icon: Terminal, text: "SpringBoot, React, React Native, Node.js, Express.js" },
        { name: "Tools", icon: Code, text: "Git, Postman, Docker" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        I am a <span className="text-foreground font-semibold">passionate Full Stack Developer</span> with a knack for building robust and scalable applications.
                        My journey bridges the gap between clean code and creative design, ensuring every project I touch is not just functional, but exceptional.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/30 transition-colors group text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <skill.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                            <p className="text-muted-foreground">{skill.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
