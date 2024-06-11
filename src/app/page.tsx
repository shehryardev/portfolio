import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WorkedWith from "./components/WorkedWith";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  
  return (
  <>
  <div className="md:m-20 m-10">

  <Navbar />
  <br />
   <Header/>
   <div className="h-96"></div>
   <WorkedWith/>
   <div className="h-72"></div>
   <Services/>
   <Contact/>
  </div>
  </>
  
  );
}
