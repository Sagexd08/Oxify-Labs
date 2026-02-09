"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export const ContactPortal = () => {
    return (
        <section id="contact" className="py-32 px-6 relative flex flex-col items-center justify-center min-h-[60vh] border-t border-white/5">
            <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="font-sentient text-5xl md:text-7xl leading-tight tracking-tight text-white/90">
                        Ready to build?
                    </h2>

                    <p className="font-sans text-zinc-400 text-lg max-w-xl mx-auto">
                        Let's discuss your infrastructure needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:sohomchatterjee07@gmail.com?subject=Project%20Inquiry%20-%20Oxify%20Labs&body=Hi%20Oxify%20Labs%2C%0A%0AI'm%20interested%20in%20discussing%20a%20project.%0A%0A"
                            className="inline-flex items-center bg-white text-black hover:bg-zinc-200 rounded-full h-14 px-8 text-base font-medium transition-all gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            Start a Project
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/oxify-labs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white/10 text-white hover:bg-white/20 rounded-full h-14 px-8 text-base font-medium transition-all gap-2 border border-white/10"
                        >
                            <Linkedin className="w-4 h-4" />
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
