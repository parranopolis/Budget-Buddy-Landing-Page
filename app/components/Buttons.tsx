interface ButtonsProps {
    text:string;
    type: string
    onClick?: () => void;
}

export default function Buttons ({text, onClick, type} : ButtonsProps){
    return type === "CTA" ? 
    <button onClick={onClick} className="
    text-black 
    bg-[var(--secondary)] 
    font-extrabold 
    m-auto  w-[90%] py-2 rounded-md mt-4 mb-2"
    >{text}</button> : 
    
    <button onClick={onClick} className="
    text-white
    border-1
    font-extrabold 
    m-auto py-2 rounded-md w-[90%] mb-4 my-2"
    >{text}</button>

}