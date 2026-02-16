"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Informations() {
    return (
        <section className="w-full py-10 px-6 md:px-6 bg-neutral-100 border-y border-neutral-200">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Top Label */}
                    <div className="flex items-center gap-2 w-full md:w-[30%]">
                        <span className="bg-[#F9452C] w-1.5 h-6 rounded-sm mt-2" />
                        <p className="text-base font-medium text-[#29292B] whitespace-nowrap pt-2">
                            Bem-vindo à Igreja dos Vales!
                        </p>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-8 max-w-4xl">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-foreground">
                            Participar de uma comunidade é um dos melhores caminhos para
                            encorajar o crescimento espiritual.
                            <br />
                            <br />
                            <span className="text-muted-foreground">
                                Através dos iGrupos, discipulado e
                                ministérios, você terá a oportunidade de se conectar e crescer
                                em seu relacionamento com Cristo.
                            </span>
                            <br />
                            <br />
                            Vem com a gente!
                        </h3>

                        <div className="pt-4">
                            <Link
                                href="/sobre"
                                className="inline-flex items-center gap-3 bg-white text-[#090909] px-6 py-3 rounded-full transition-all border border-transparent group"
                            >
                                <div className="bg-[#F9452C] rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-semibold group-hover:text-[#F9452C] transition-colors">
                                    Conheça mais
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
