export default function Header() {
    return (
        <header className="bg-primary w-full h-[20%] p-4 text-white text-center">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold ">SIE</h1>
                <img 
                    src="/assets/gobierno.svg" 
                    alt="" 
                    className="w-32"
                />
            </div>
        </header>
    )
}