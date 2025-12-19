import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import name from "../assets/sign.png";
import { motion } from "framer-motion";

export function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark">("dark"); // Default to dark for better initial vibe

    useEffect(() => {
        // Force dark mode initially for user preference
        const root = window.document.documentElement;
        root.classList.add("dark");
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2"
                >
                    <img src={name} alt="Arvind" className="h-12 w-auto object-contain invert dark:invert-0" />
                </motion.div>

                <nav className="flex items-center gap-8">
                    {["Projects", "Blog", "About"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}

                    <motion.button
                        whileTap={{ scale: 0.9, rotate: 15 }}
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-border/50"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </motion.button>
                </nav>
            </div>
        </motion.header>
    );
}
