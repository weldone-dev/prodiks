import type {ReactNode} from "react";
import {NavBar} from "@/widget/NavBar";
import {Footer} from "@/widget/Footer";


export default function MainLayout(
    {children,}: Readonly<{ children: ReactNode; }>
) {
  return (
    <>
        <NavBar className="bg-[#efedee]"/>
        <div className={"pt-[60px]"}>
            {children}
        </div>
        <Footer/>
    </>
  );
}
