import Image from "next/image";
import Buttons from "./Buttons";
export default function Hero (){
    return(
   <article className="flex flex-col items-center text-center overflow-hidden relative bg-gradient-to-b from-[var(--primary)] to-[var(--dark-background)] pt-22 text-white px-5
   sm:px-7 sm:flex-row sm:gap-5 sm:justify-around sm:bg-gradient-to-r sm:from-[var(--dark-background)] sm:to-[var(--primary)] sm:pb-22
   lg:px-20 lg:h-screen">
    
    <div className="absolute overflow-auto top-[-5rem] left-[120px] w-[550px] h-[550px]  bg-white opacity-15 shadow-2xl rounded-full pointer-events-none 
    sm:top-[-12rem] sm:left-[18rem] sm:w-[1050px] sm:h-[1050px] sm:bg-white
    xl:top-[-70rem] xl:left-[18rem] xl:w-[3050px] xl:h-[3050px] xl:bg-white
    "/>
    
    <div className="absolute overflow-hidden top-[-4rem] left-[170px] w-[440px] h-[440px] bg-white opacity-10 rounded-full shadow-2xl pointer-events-none  */}
    sm:top-[-46rem] sm:left-[40rem] sm:w-[2090px] sm:h-[2090px] " />
    
    <div className="absolute overflow-hidden top-[-5rem] left-[200px] w-[380px] h-[380px] bg-white opacity-15 rounded-full shadow-2xl pointer-events-none 
     sm:top-[-18rem] sm:left-[61rem] sm:w-[1200px] sm:h-[1200px] " />
    
    <div className="absolute top-[-5.5rem] left-[270px] w-[270px] h-[270px] bg-white opacity-15 rounded-full shadow-2xl pointer-events-none sm:hidden" />
      
      <section className="flex flex-col gap-5 sm:w-full sm:items-center relative z-20">
        <h1 className="text-4xl font-bold relative z-20 mt-15 sm:text-2xl 
        lg:text-4xl
        xl:text-6xl">
          <span className="">Your Money deserves Clarity,</span>
          <span className="text-[var(--main-text)]">Not Chaos</span>
        </h1>
        <h3 className="text-2xl font-light text-black xl:text-3xl" >Start at your own pace, whanever you&apos;re ready</h3>
        <div className="flex flex-col justify-center mt-7 w-full md:flex-row md:items-baseline md:justify-between lg:w-4/5">
          <a className="md:w-1/2" href="https://budget-buddy-7fca0.web.app"><Buttons text='Start for Free' type="CTA"/></a>
          <a className="md:w-1/2" href="#pricing"><Buttons text='See Prices' type=""/></a>
        </div>
      </section>
      
      <div className="sm:flex relative z-20">
        <Image
          src="/images/phoneTest.png"
          alt="Phone mockup"
          className="sm:hidden relative z-20"
          width={700}
          height={100}
        />
        <Image
          src="/images/sm-image.png"
          alt="Phone mockup"
          className="hidden sm:block"
          width={700}
          height={100}
        />
      </div>
   
   </article>
  );
}