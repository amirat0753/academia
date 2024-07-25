import React from "react"
import AboutCard from "../about/AboutCard"
import HBlog from "./HBlog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./HPrice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <HBlog />
      <Hprice />
    </>
  )
}

export default Home