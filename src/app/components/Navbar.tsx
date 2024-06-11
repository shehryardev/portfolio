

"use client"
function scrollToElement(id:any):any {
  var element = document.getElementById(id);
  element?.scrollIntoView();
}
export default function Navbar() {
  return (
    <nav className="flex justify-end space-x-4">
  <p className="hover:underline cursor-pointer"  onClick={() => scrollToElement('worked-with')}>Worked with</p>
  <p className="hover:underline cursor-pointer" onClick={() => scrollToElement('services')} >Services</p>
  <p className="hover:underline cursor-pointer " onClick={() => scrollToElement('contact')}>Consultancy</p>
  <p className="hover:underline cursor-pointer" onClick={() => scrollToElement('contact')}  >Hire</p>

</nav>

  
  );
}
