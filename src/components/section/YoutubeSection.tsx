"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function YoutubeSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "IVbe2pQ6LrY"; // User provided Video ID

    // Background pattern from snippet: https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg?width=126\u0026height=126
    const patternUrl =
        "https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg?width=126&height=126";

    return (
        <section className="relative w-full py-16 px-4 md:px-6 bg-neutral-100 overflow-hidden">
            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* Top Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-2">
                        <span className="bg-[#F9452C] w-1.5 h-6 rounded-sm" />
                        <h2 className="text-xl font-bold text-neutral-900">Youtube</h2>
                    </div>
                    <div className="text-neutral-500 font-medium text-sm md:text-base">
                        (IC SJC)
                    </div>
                    <div className="text-neutral-400 text-sm hidden md:block">
                        ©{new Date().getFullYear()}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Video Container */}
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                        {!isPlaying ? (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="group relative w-full h-full block cursor-pointer"
                                aria-label="Play Video"
                            >
                                <Image
                                    src={`https://i.ytimg.com/vi_webp/${videoId}/sddefault.webp`}
                                    alt="Youtube Video Thumbnail"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                                {/* Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="bg-white/90 w-16 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#212121] border-b-[8px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </button>
                        ) : (
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="Youtube Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full border-0"
                            />
                        )}
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h3 className="text-lg font-semibold text-neutral-500 uppercase tracking-wide">
                            Escute nossa última mensagem no Youtube!
                        </h3>

                        <div className="space-y-4">
                            <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                                #04 SERVINDO COMO JESUS || Pr. Max Souza || SÉRIE : SER COMO JESUS || 25/01/26 || ICTV
                            </h4>
                            <p className="text-neutral-600 text-lg leading-relaxed">
                                Começamos o ano com a série Ser Como Jesus. Não perca aos domingos de Janeiro!
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="https://www.youtube.com/@ictv.online"
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-white text-neutral-900 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-neutral-200 group"
                            >
                                <div className="bg-[#F9452C] rounded-full w-8 h-8 flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-semibold group-hover:text-[#F9452C] transition-colors">
                                    Veja nosso canal
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Plus Sign */}
                <div className="absolute bottom-0 right-0 hidden md:block">
                    <div className="relative w-8 h-8">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-300 -translate-y-1/2"></div>
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-neutral-300 -translate-x-1/2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
