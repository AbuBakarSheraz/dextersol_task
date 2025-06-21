import Header from "../components/Header"
import bgimage from '../assets/images/bg.png'
import HeroSection from "../components/HeroSection"
import ServiceCard from "../components/ServiceCard"
function DefaultLayout() {
  return (
    <>
    <div
      // style={{
      //   backgroundImage: `url(${bgimage})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'top',
      //   minHeight: '100vh',
      // }}
    >
      <Header />
      <HeroSection />
      <ServiceCard />
    </div>

    </>
  )
}

export default DefaultLayout