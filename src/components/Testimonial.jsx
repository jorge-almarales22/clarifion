export const Testimonial = () => {
   return (
      <div className="testimonial">
            <div className="testimonial_header">
                <div className="photo_testimonial">
                    <img src="images/photo.svg" alt="" />
                </div>
                <div className="name_testimonial">
                    <div className="star_testimonial">
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                    </div>
                    <div className="group_person">
                        <span className="name_person">Ken T.</span>
                        <img src="icons/verify.svg" alt="" />
                        <span className="verified_customer">Verified Customer</span>
                    </div>
                </div>
            </div>
            <div className="testimonial_body">
                <p className="testimonial_pargraph">
                    “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                </p>
            </div>
      </div>
   )
}