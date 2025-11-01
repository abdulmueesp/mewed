import RubiksCube from "@/components/CubeScene";
import CubeScene from "@/components/CubeScene";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="w-full h-[500px] flex flex-col md:flex-row ">
       <div className="w-[50%] h-full"></div>
       <div className="w-[50%] h-full pt-4">
       <RubiksCube />
       </div>
      </div>
  
    </div>
  );
}
