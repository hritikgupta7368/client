import Contact from "./components/contact"
import Main from "./components/main"
import Header from "./components/header"
import About from "./components/about"
const page = () => {
  return (
    <main className="relative">
     <About />
     <Main />
     <Contact />
    </main>
  )
}

export default page
