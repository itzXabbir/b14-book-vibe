import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center rounded-3xl bg-slate-100 p-8 md:p-16">
                {/* Text content */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <span className="inline-flex w-fit mx-auto md:mx-0 items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
                        📚 New arrivals every week
                    </span>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                        Books to freshen up{" "}
                        <span className="text-emerald-600">your bookshelf</span>
                    </h2>

                    <p className="text-slate-500 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                        Discover handpicked titles across every genre, curated
                        to spark your next great read.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                        <button className="btn btn-success btn-lg rounded-xl">
                            View the List
                        </button>
                        <button className="btn btn-ghost btn-lg rounded-xl text-slate-700">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden">
                    <Image
                        src={BannerImg}
                        alt="hero_img"
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
