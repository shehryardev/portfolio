import Image from 'next/image';


export default function WorkedWith() {
    return (<>
    <h1 id='worked-with' className='text-4xl text-center text-[#ffffff]'>Worked with</h1>
    <br />
    <br />
    <br />
<br />
    <div className="flex flex-wrap justify-center sm:space-x-16 space-y-6 sm:space-y-0 w-full ">
  <img
    src="/images/961.jpeg"
    alt="961"
    className="object-contain lg:h-40 h-24"
  />
  <img
    src="/images/alpha.png"
    alt="Alpha"
    className="object-contain lg:h-40 h-24"
  />
  <img
    src="/images/ethizo.png"
    alt="Ethizo"
    className="object-contain lg:h-40 h-24"
  />
  <img
    src="/images/fortex.jpeg"
    alt="Fortex"
    className="object-contain lg:h-40 h-24"
  />
  <img
    src="/images/showz.png"
    alt="Showz"
    className="object-contain lg:h-40 h-24"
  />
</div>


      </>
  
    
    );
  }
  