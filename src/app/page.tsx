import { Board } from "@/features/board";
import { Header } from "@/features/header";
import { Hero } from "@/features/hero";

export default function Home() {
  return (
    <div className="bg-[url('/img/bg.png')] bg-cover items-center justify-items-center min-h-screen p-4 md:p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <Hero />
      <Board />
    </div>
  );
}
