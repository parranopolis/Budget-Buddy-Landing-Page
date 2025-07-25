'use client';
import Buttons from "./Buttons"
export default function Footer(){
    const test =()=>{
        alert('testing')
    }
    return (
        <footer className="bg-black text-white text-center p-12 flex flex-col gap-4">
            <h2 className="text-3xl ">Interested in building something?</h2>
            <div>
                <div onClick={()=> test()}>

                <Buttons text="Get a Free Consultation" type="CTA"/>
                </div>
                <a href="http://www.parranopolisStudio.com"><Buttons text="See our Work" type=""/></a>
            </div>
                <p>&copy; 2025 Budget Buddy. Made with care for your financial wellbeing.</p>
        </footer>
    )
}