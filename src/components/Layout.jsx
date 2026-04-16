import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "../HomeComponents/Sidebar";

export default function Layout(){
    return(
        <>
          <Sidebar/>
          <div className="ml-24">
            <Navbar/>
            <main className="min-h-screen flex justify-center py-[35px]">
            <section className="container mx-20">
                <Outlet/>
            </section>
          </main> 
          </div>

        </>
    )
}