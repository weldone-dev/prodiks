import type {ReactNode} from "react";
import {NavBar} from "@/widget/NavBar";
import {Footer} from "@/widget/Footer";

export default function PagesLayout(
    {children,}: Readonly<{ children: ReactNode; }>
) {
  return (
      <>
          <NavBar className={"bg-white"}/>
          <div className={"flex-grow"}>
              {children}
          </div>
          <Footer/>
      </>
  );
}
