

"use client"
function scrollToElement(id:any):any {
    var element = document.getElementById(id);
    element?.scrollIntoView();
  }
export default function Header() {
    return (
        

      <div className=" mt-20 md:mt-[8%]  md:w-[400px] xl:w-[30%] md:ml-[20%]">
    <h1 className="text-xl text-[#fefefe]">Hi, I'm Shehryar.</h1>
    <br />
    <p>Crafting seamless user experiences with clean code, elegant front-end designs, robust back-end architectures, and scalable cloud infrastructure.</p>
<br />
    <h1 className="text-md text-[#fefefe]">Top Skills</h1>
    
        <p className="mt-3">Typescript • React.js • UI/UX • AWS • API Development • CMS • SAAS • BAAS • Serverless Computing • Performance Optimization</p>
        <br />
        <br />
        <button className="bg-white  text-[#494949] py-2 px-8  rounded-full font-medium" onClick={()=>{scrollToElement('worked-with')}}>Learn More ↓</button>
  </div>
        
  
    
    );
  }
  