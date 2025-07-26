// import Image from "next/image";
import Head from 'next/head'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Image from 'next/image';
import CTA from './components/CTA';

export default function Home() {
    return (
        <>
        <Head>
            <title>Budget Buddy - Your Money Deserves Clarity</title>
            <meta name="description" content="Smarter money management with receipt scanning, bank sync and AI insights." />
            <meta name="keywords" content="budgeting, finance app, expense tracker, personal money, AI budgeting" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Budget Buddy" />
            <meta property="og:description" content="Your AI-powered financial sidekick." />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:url" content="https://budgetbuddy.app/" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="absolute z-10 shadow-emerald-950 bg-transparent w-full">
            <nav className="h-15 mx-10 flex justify-between items-center shadow-emerald-950">
                <span className="logo">
                    <Image src="/images/Logo.png"  alt='Logo' width={50} height={50}/>
                </span>
                <Image src="/images/menu.png" alt='menu' width={25} height={25} />
            </nav>
        </header>
        <main className="">
            <Hero/>
            <Features/>
            <Pricing/>
            <CTA/>
        </main>
        <Footer/>
    </>

    )
}

    {/* <script>
        // Simple scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all feature sections
        document.querySelectorAll('.feature-section, .pricing').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script> */}

