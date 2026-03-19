import Navbar from "../components/Navbar.jsx"
import Header from "../components/Header.jsx"
import SectionCategories from "../components/SectionCategories.jsx"
import Sliding from "../components/Sliding.jsx"
import LatestJobs from "../components/LatesJobs.jsx"
import Banner from "../components/Banner.jsx"
import Footer from "../components/Footer.jsx"
import Testimonial from "../components/Testiominal.jsx"

const Home = () => {
  return (
    <div>
        <Navbar/>
      <Header/>
      <SectionCategories/>
      <Sliding/>
      <LatestJobs/>
      <Banner/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
export default Home