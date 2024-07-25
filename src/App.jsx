import "./App.css"
import Header from "./componets/common/header/Header"
import { Routes, Route } from "react-router-dom"
import About from "./componets/about/About"
import CourseHome from "./componets/allcources/CourseHome"
import Team from "./componets/team/Team"
import Pricing from "./componets/pricing/Pricing"
import Blog from "./componets/blog/Blog"
import Contact from "./componets/contact/contact"
import Footer from "./componets/common/footer/Footer"
import Home from "./componets/home/Home"

function App() {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App