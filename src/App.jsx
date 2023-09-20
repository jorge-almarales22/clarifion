import "../src/styles/style.css"
import { Patners } from "./components/Patners"
import { Navbar } from "./components/Navbar"
import { Space } from "./components/Space"
import { Step } from "./components/Step"
import { Steps } from "./components/Steps"
import { Content } from "./components/Content"
import { Testimonial } from "./components/Testimonial"
import { Warranty } from "./components/Warranty"
import { Footer } from "./components/Footer"
import { StepsMin } from "./components/StepsMin"
import { NavbarMin } from "./components/NavbarMin"
export const App = () => {
   return (
    <>
      <Navbar />
      <NavbarMin />
      <Space/>
      <div className="container">
        <Patners />
        <Space/>
        <div className="title_group">
            <h1 className="title_main">Wait ! your order in progress.</h1>
            <p className="paragraph_main">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        </div>        
        <Steps />
        <StepsMin />
        <div className="content-container vmobile">
          <p className="p_image text_main_mobile"><span className="p-blue-image">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="p-blue-image">$14 each</span> ($84.00 total!)</p>
        </div>
        <Content />
        <div className="group_testimonials">
          <Testimonial />
          <Warranty />
        </div>
      </div>
      <Footer />
    </>
   )
}