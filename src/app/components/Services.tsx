

export default function Services() {
    return (<>
    <h1 id="services" className='text-4xl text-center text-[#ffffff]'>Services</h1>
    <br />
    <br />
    <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className=" p-4 rounded-xl shadow-md border  border-[#6c6c6cc5]">
          <img src="/images/ui-ux.svg" alt="" className="-ml-4"/>
          <p className="text-xl mt-3 text-white">UI & UX</p>
          <p className="text-sm">Elevate your digital experience with our UI/UX design service. We craft sleek, user-friendly interfaces that captivate and engage. Our designs are intuitive and visually striking, ensuring your product stands out and delights users. Enhance usability and drive success with design that makes a difference.</p>
        </div>
        <div className=" p-4 rounded-xl shadow-md border  border-[#6c6c6cc5]">
          <img src="/images/mobile-dev.svg" alt="" className="-ml-4"/>
          <p className="text-xl mt-3 text-white">AI & LLMs</p>
          <p className="text-sm">Unlock the future with our AI and LLM solutions. We harness the power of artificial intelligence and large language models to create smart, adaptive systems that transform your business. Our cutting-edge technology enhances efficiency, drives innovation, and delivers insightful analytics. Experience the next level of automation and intelligence with solutions that set you apart.</p>
        </div>
        <div className=" p-4 rounded-xl shadow-md border  border-[#6c6c6cc5]">
          <img src="/images/cloud.svg" alt=""/>
          <p className="text-xl mt-3 text-white">Robust Backends & Architectures</p>
          <p className="text-sm">Strengthen your foundation with our robust backend and architecture solutions. We design scalable, secure, and efficient systems tailored to your needs. Our expertise ensures seamless integration, high performance, and reliability, empowering your business to handle any challenge. Elevate your infrastructure with solutions that support growth and innovation.</p>
        </div>
        <div className=" p-4 rounded-xl shadow-md border  border-[#6c6c6cc5]">
          <img src="/images/web-dev.png" alt=""/>
          <p className="text-xl mt-3 text-white">Seamless Front-end</p>
          <p className="text-sm">Enhance your user experience with our seamless front-end development services. We create responsive, high-performance interfaces that engage users and bring your vision to life. Our solutions ensure smooth navigation, fast load times, and a visually stunning presentation. Elevate your digital presence with a front-end that delights and delivers.</p>
        </div>
        <div className=" p-4 rounded-xl shadow-md border  border-[#6c6c6cc5]">
          <img src="/images/cloud.svg" alt=""/>
          <p className="text-xl mt-3 text-white">Cloud Architectures & Deployments</p>
          <p className="text-sm">Transform your operations with our cloud architectures and deployments. We design scalable, secure, and efficient cloud solutions tailored to your business needs. Our expertise ensures seamless integration, optimized performance, and reliable uptime. Elevate your infrastructure with cloud solutions that drive agility and innovation.</p>
        </div>
      </div>
      </>
  
    
    );
  }
  