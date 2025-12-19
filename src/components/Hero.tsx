import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import arvind from "../assets/arvind.png";

export function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 lg:py-32 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-aurora animate-pulse opacity-50 pointer-events-none" />

            {/* Decorative Floating Blobs */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -70, 0], y: [0, 80, 0], rotate: [0, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                                Hi, I'm <span className="text-gradient">Arvind</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl font-medium">
                                I build software <span className="text-foreground font-semibold">so machines</span> can make mistakes faster than humans.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="inline-flex items-center justify-center h-12 px-8 text-base font-medium transition-all rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:contact@example.com"
                                className="inline-flex items-center justify-center h-12 px-8 text-base font-medium transition-colors border-2 border-purple-500/20 rounded-full hover:bg-purple-500/10 hover:border-purple-500/40"
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center gap-6 pt-4"
                        >
                            {[
                                { icon: Github, href: "https://github.com/ArvindRamesh06" },
                                { icon: Linkedin, href: "https://linkedin.com/in/arvindr06" },
                                { icon: Mail, href: "mailto:arvindramesh.work@gmail.com" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ y: -5, color: "#a855f7" }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground transition-colors p-2"
                                >
                                    <social.icon className="h-8 w-8" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex justify-center items-center order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                        >
                            {/* Glowing rings behind */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 blur-2xl opacity-30"
                            />

                            {/* Main Image Container */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-purple-500/20"
                            >
                                <img
                                    src={arvind}
                                    alt="Arvind"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl"
                            >
                                <span className="text-2xl">👋</span>
                                <span className="ml-2 font-bold text-foreground">Hello!</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
