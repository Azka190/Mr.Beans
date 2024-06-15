import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import Aboutme from "@/components/Aboutme";
import Services from "@/components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <Main />
    <Aboutme />
    <Services />
    </div>
  );
}
