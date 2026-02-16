"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col gap-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-8 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-12 bg-[#F9452C] rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
                                Vamos ficar mais próximos!
                            </h2>
                        </div>
                        <div className="text-muted-foreground font-medium text-lg">
                            (IC SJC)
                        </div>
                        <div className="text-muted-foreground text-sm font-medium">
                            ©{new Date().getFullYear()}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-8">

                        {/* Left Column */}
                        <div className="flex flex-col gap-6">
                            <div className="p-8 rounded-2xl bg-[#F9452C]/10 border border-[#F9452C]/20 backdrop-blur-sm">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-background/50 text-[#F9452C] font-semibold text-sm mb-6 border border-[#F9452C]/10">
                                    Entre em Contato
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                                    Fique por dentro de tudo aqui da IC!
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Deixe seu contato e vamos te enviar materiais exclusivos!
                                </p>
                            </div>

                            <div className="h-px w-full bg-border" />

                            <Link
                                href="/contact"
                                className="group flex items-center justify-between p-2 pl-6 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all duration-300 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-[#F9452C]" />
                                    <span className="font-semibold text-lg">Conecte-se</span>
                                </div>
                                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <ArrowRight className="w-5 h-5 text-foreground" />
                                </div>
                            </Link>
                        </div>

                        {/* Right Column - Form */}
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F9452C]/20 to-transparent rounded-full blur-2xl -z-10" />

                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="sr-only">Nome</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Nome*"
                                        required
                                        className="flex h-14 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9452C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="whatsapp" className="sr-only">WhatsApp</label>
                                    <input
                                        id="whatsapp"
                                        type="tel"
                                        placeholder="WhatsApp*"
                                        required
                                        className="flex h-14 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9452C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="sr-only">Mensagem</label>
                                    <textarea
                                        id="message"
                                        placeholder="Mensagem*"
                                        required
                                        className="flex min-h-[140px] w-full rounded-xl border border-input bg-background px-4 py-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9452C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-14 w-full rounded-xl bg-foreground text-background font-medium text-lg hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md decoration-[#F9452C]"
                                >
                                    Envie aqui
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
