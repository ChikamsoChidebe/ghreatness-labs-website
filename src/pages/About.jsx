
import CEO from "../assets/ceo.png"

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-5">About Us</h1>
      <div className="flex sm:flex-col lg:flex-row md:flex-col py-4 px-2 ">
        <div className="flex sm:flex-col lg:flex-row">
          
        </div>
        <div className="flex w-64 flex-1 flex-wrap mr-5">
          <p className="text-justify py-2 px-4 mb-2 text-neutral-600">
            Ghreatness Labs is a premier digital and IT solutions provider, empowering businesses to thrive in the ever-evolving online landscape. Operating on a Platform-as-a-Service (PaaS) model, we offer a consolidated solution combining multiple essential services under one roof, providing a one-stop hub for all your digital and IT needs. This streamlined approach allows businesses to focus on their core operations while we seamlessly handle their digital transformation.
          </p>
          <p className="text-justify py-2 px-4 mb-2 text-neutral-600">
            At Ghreatness Labs, we do what we do because we're passionate about empowering individuals, businesses, and communities to succeed in the digital age. We believe that everyone deserves access to innovative solutions and expert services that help them thrive.
            Our motivation stems from a desire to: - Foster creativity, innovation, and progress - Make a positive impact on society through digital transformation By pursuing this mission, we aim to create a ripple effect of greatness that resonates throughout the world.
          </p>
        </div>
        <div className="w-32 flex-1">
          <img
            src={CEO}
            alt="CEO Images"
            className="h-96 w-full lg:w-full lg:h-96"
          />
        </div>
      </div>
      {/* Below code is for the Mission */}
      <div className="flex mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Our Mission</h2>
      </div>
      {/* Below code is the Vission */}
      <div className="flex mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Our Vision</h2>
      </div>
    </div>
  )
}

export default About
