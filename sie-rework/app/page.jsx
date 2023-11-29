"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F0EA] flex-grow flex h-screen items-start py-12 justify-center">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
