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
export const App = () => {
   return (
    <>
      <Navbar />
      <Space/>
      <div className="container">
        <Patners />
        <Space/>
        <div className="title_group">
            <h1 className="title_main">Wait ! your order in progress.</h1>
            <p className="paragraph_main">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        </div>        
        <Steps />
        <Space/>
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