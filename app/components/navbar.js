import Image from "next/image"


const Card = () => {
  return (
    <div className="card">
      <p className="text-3xl font-semibold mb-2 md:mb-0">Original and Quality</p>
      <p className="text-5xl font-bold mb-5 md:mb-0">Industrial and Electrical goods</p>
      <p className='text-lg md:text-2xl font-medium mb-6 md:mb-5'>Deals in Pipes, Boiler Fittings ,Bearings, Industrial Oils and electrical components   </p>
      <a className = "shop_button" href = "#products" >Products</a>
    </div>
  )
}
const Navbar = () => {
  return (
    <container id = "home" className = "h-screen flex flex-col">

    <nav className="nav">
      <div className="inline-block pt-5 md:pt-0">
        <Image src="/logo.jpg" height={100} width={100} alt="logo" className="inline-block mr-4"/>
        <span className="logoHeading">Megha Enterprises</span>
      </div>
     
      <div className="inline-block px-4">
        <span className="links"><a href="#home">Home</a></span>
        <span className="links"><a href="#about">About</a></span>
        <span className="links"><a href="#products">Products</a></span>
        <span className="links"><a href="#contact">Contact us</a></span>
      </div>
    </nav>

    <div className="banner"><img src = "banner.jpeg" /></div>
    <Card />
    </container>
  )
}

export default Navbar

