import Features from "../components/home/features.tsx";
import Footer from "../components/home/footer.tsx";
import Header from "../components/home/header.tsx";
import Hero from "../components/home/hero.tsx";
import React from "react";

export default function Home() {
    return (
        <div className="Home">
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}
