export default function LoginForm(){
    return(
        <section className="flex flex-col border w-[80%] h-fit p-2 rounded-md items-center justify-center">
            <h2>Login</h2>
            <form action="submit" className="flex flex-col items-center space-y-2">
                <div className="space-y-2 block relative">
                <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                <input type="text" id="email" className='form-input'></input>
                <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Contraseña</label>
                <input type="text" id="password" className='form-input'></input>
                </div>
                <button type="submit" className="bg-[#7747ff] w-max mx-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
            </form>
        </section>
    )
}