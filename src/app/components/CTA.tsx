
export default function CTA () {
    return(<>
        <section className="bg-gradient-to-b from-[var(--dark-background)] to-[var(--primary)] h-80 text-center p-12 overflow-hidden">
            <div className="flex flex-col justify-around h-60">
                <h2 className="relative z-20 font-extrabold text-white text-3xl">Get Your Finances in Order Now</h2>
                <button className="relative z-20 shadow-xl/50 text-white bg-[var(--dark-background)] font-extrabold m-auto py-2 rounded-md w-[90%] mb-4 my-2">Start for Free</button>
            </div>
            <div className="relative bottom-[10rem]">
                <div className="relative top-[-7rem] left-[-40px] w-[500px] h-[500px]  bg-white opacity-15 shadow-xl/25 rounded-full pointer-events-none" />
                <div className="relative top-[-35rem] left-[-30px] w-[440px] h-[440px] bg-white opacity-15 rounded-full shadow-xl/20 pointer-events-none" />
                <div className="relative top-[-57rem] left-[-20px] w-[320px] h-[320px] bg-white opacity-15 rounded-full shadow-xl/25 pointer-events-none" />
            </div>
        </section>
    </>)
}