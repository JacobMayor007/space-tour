import Image from "next/image";
import { Home } from "./home-mobile/page";
import { HomeDesktop } from "./home-desktop/page";
export default function Page() {
  return (
    <main className="">
      <Home />
      <HomeDesktop />
    </main>
  );
}
