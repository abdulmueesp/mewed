import RubiksCube from "@/components/CubeScene";
import CubeScene from "@/components/CubeScene";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
    <RubiksCube />
    </div>
  );
}
