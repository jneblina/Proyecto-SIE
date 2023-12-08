import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <main className="bg-[#F5F0EA] h-screen flex flex-col  justify-between items-center">
        <Header />
        <LoginForm />
        <Footer />
      </main>
    </>
  );
}
