import Image from "next/image"
export default function Features (){

    return(
        <>
        <article className="bg-black text-white flex flex-col gap-20 m-auto px-7 pt-140 sm:pt-28 pb-25 relative mt-[-35rem] mask-t-from-80%
        sm:mt-[0] sm:mask-t-from-100% 
        ">
            <h2 className="text-center text-3xl">Everything You Need to Budget Smart</h2>
                <Card style="" image={'receipt'} title='Receipt Scanning' text='Scan receipts with your camera and let AI extract the details automatically.'/>
                <Card style="flex-row-reverse" image={'charts'} title='Visual Analytics' text='Beautifull chart and graphs to visualize your spending patterns and budget progress.'/>
                <Card style="" image={'coaching'} title='Personal Coaching' text='Get personalized recommendations to save and improve your financial habits.'/>
                <Card style="flex-row-reverse" image={'secure'} title='Secure & Private' text='Your financial data is encrypted and stored securely with bank-level security.'/>
        </article>
        </>
    )
}

interface CardProps{
    image : string;
    title: string;
    text: string
    style: string
}


function Card ({image, title, text, style}: CardProps){
    return(
        <section className={`flex justify-between ${style} border-red-100 gap-7 text-center max-w-[400px] min-w-[200px] w-full m-auto`}>
            <div className=" bg-white rounded-[100%] w-85 h-40 p-6 flex items-center justify-center content-center">
                <Image src={`/images/${image}.png`} width={100} height={100} alt={image}/>
            </div>
            <div className="">
                <h4 className="text-[22px] font-extralight">{title}</h4>
                <p className="text-[15px]">{text}</p>
            </div>
        </section>
    )
}