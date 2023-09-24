"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/sie");
  };

  return (
    <section className="flex flex-col space-y-4 bg-white shadow-md w-[90%] h-fit p-8 md:p-12 rounded-lg max-w-2xl">
      <h2 className="font-bold text-2xl sm:text-4xl text-center my-2">
        Iniciar sesión
      </h2>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex flex-col items-start space-y-2 w-full"
      >
        <div className="space-y-2 block relative w-full">
          <label
            htmlFor="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Número de control
          </label>
          <input type="text" id="email" className="form-input"></input>
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Clave de acceso
          </label>
          <input type="password" id="password" className="form-input"></input>
        </div>
        <button
          type="submit"
          className="bg-[#8D0D30] w-full mx-auto px-6 py-2 rounded text-white text-sm font-semibold"
        >
          Ingresar
        </button>
      </form>
      <Link
        href=""
        className="text-sm text-left text-[#12322B] font-medium hover:text-blue-600"
      >
        Recuperar clave de acceso
      </Link>
    </section>
  );
}
