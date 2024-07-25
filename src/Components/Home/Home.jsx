import React from "react"
import AboutCard from "../About/AboutCard"
import HBlog from "./HBlog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "../Home/HPrice"
import Testimonial from "./testimonial/Testimonial"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <Hprice />
    </>
  )
}

export default Home