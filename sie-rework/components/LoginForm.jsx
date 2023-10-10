"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Usuario de prueba
  //email: pruebatest@gmail.com
  //contraseña: secretito0
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/sie",
    });
  };

  const handleGitHubSignIn = () => {
    // Usar signIn con GitHub
    signIn("github", { callbackUrl: "/sie" });
  };

  const handleGoogleSignIn = () => {
    // Usar signIn con Google
    signIn("google", { callbackUrl: "/sie" });
  };

  const handleDiscordSignIn = () => {
    // Usar signIn con Discord
    signIn("discord", { callbackUrl: "/sie"});
  }

  const handleRedditSignIn = () => {
    // Usar signIn con Reddit
    signIn("reddit", { callbackUrl: "/sie"});
  }

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
          <input
            required
            type="text"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Clave de acceso
          </label>
          <input
            required
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="bg-[#8D0D30] w-full mx-auto px-6 py-2 rounded text-white text-sm font-semibold"
        >
          Ingresar
        </button>
      </form>
      <button
        onClick={handleGitHubSignIn}
        className="bg-gray-800 text-white w-full mx-auto px-6 py-2 rounded text-sm font-semibold"
      >
        Iniciar sesión con GitHub
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="bg-gray-500 text-white w-full mx-auto px-6 py-2 rounded text-sm font-semibold"
      >
        Iniciar sesión con Google
      </button>
      <button
        onClick={handleDiscordSignIn}
        className="bg-blue-700 text-white w-full mx-auto px-6 py-2 rounded text-sm font-semibold"
      >
        Iniciar sesión con Discord
      </button>
      <button
        onClick={handleRedditSignIn}
        className="bg-orange-700 text-white w-full mx-auto px-6 py-2 rounded text-sm font-semibold"
      >
        Iniciar sesión con Reddit
      </button>
      <Link
        href=""
        className="text-sm text-left text-[#12322B] font-medium hover:text-blue-600"
      >
        Recuperar clave de acceso
      </Link>
    </section>
  );
}
