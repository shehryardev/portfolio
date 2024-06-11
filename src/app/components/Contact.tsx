
"use client"
export default function Contact() {
    const handleOpenEmail = () => {
        window.open('mailto:shehryar7ahmed@gmail.com?subject=Inquiry about []&body=');
      };
      
    return (
        

      <div className="mx-3" id="contact">
        <br />
        <br />
        <br />
        <br />
        <p className="text-white text-3xl">Get in Touch</p>
        
        Let's create something exceptional together.
        <br />
        <br />
        <button  onClick={handleOpenEmail} className="bg-white  text-[#494949] py-2 px-7  rounded-full font-medium">Contact</button>
      </div>
        
  
    
    );
  }
  