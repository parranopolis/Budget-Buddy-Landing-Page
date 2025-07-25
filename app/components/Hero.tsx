import Image from "next/image";
import Buttons from "./Buttons";
export default function Hero (){
    return(
   <article className="flex flex-col items-center  text-center overflow-hidden relative bg-gradient-to-b from-[var(--primary)] to-[var(--dark-background)] pt-22 text-white px-5">
    <div className="absolute overflow-auto top-[-5rem] left-[120px] w-[550px] h-[550px]  bg-white opacity-15 shadow-2xl rounded-full pointer-events-none" />
    <div className="absolute overflow-hidden top-[-4rem] left-[170px] w-[440px] h-[440px] bg-white opacity-15 rounded-full shadow-2xl pointer-events-none" />
    <div className="absolute overflow-hidden top-[-5rem] left-[200px] w-[380px] h-[380px] bg-white opacity-15 rounded-full shadow-2xl pointer-events-none" />
    <div className="absolute top-[-5.5rem] left-[270px] w-[270px] h-[270px] bg-white opacity-15 rounded-full shadow-2xl pointer-events-none" />
      <section className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold relative z-20 mt-15">
          <span className="">Your Money deserves Clarity,</span>
          <span className="text-[var(--main-text)]">Not Chaos</span>
        </h1>
        <h3 className="text-2xl" >Start at your own pace, whanever you&apos;re ready</h3>
      </section>
      <div className="flex flex-col justify-center mt-7 sm:w-4/5 w-full">
        <a href="https://budget-buddy-7fca0.web.app"><Buttons text='Start for Free' type="CTA"/></a>
        <a href="#pricing"><Buttons text='See Prices' type=""/></a>
        </div>
      <div className="">
        <Image
          src="/images/phoneTest.png"
          alt="Phone mockup"
          className="border-3 relative z-20"
          width={700}
          height={100}
        />
      </div>
   </article>
  );
}