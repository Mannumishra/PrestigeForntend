import React, { useEffect } from 'react'
import './Career.css'

const Career = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <div className="container" style={{ marginTop: 150 }}>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="careerheading">
                            Career Opportunities at Prestige Industries
                        </div>
                        <div className="careerpara">
                            Welcome to Prestige Industries, a distinguished provider of automotive wiring harness solutions. At Prestige Industries, we pride ourselves on our commitment to excellence, innovation, and customer satisfaction. As we continue to lead the way in the automotive industry, we are always on the lookout for talented individuals to join our team and contribute to our ongoing success.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="../image/career1.jpg" alt="" className='careerimg' />
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src="../image/career2.avif" alt="" className='careerimg' />
                    </div>
                    <div className="col-md-6">
                        <div className="careerheading">
                            Why Choose Prestige Industries?
                        </div>
                        <div className="careerpara">
                            <strong>Culture of Excellence</strong>: At Prestige Industries, we foster a culture of excellence where creativity, innovation, and teamwork are celebrated. We are dedicated to pushing the boundaries of automotive technology, and your contributions will play a vital role in shaping the future of the industry.
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="careerheading">
                            Industry Leadership
                        </div>
                        <div className="careerpara">
                            Joining Prestige Industries means becoming part of a team that is recognized as a leader in the automotive wiring harness industry. You'll have the chance to work with state-of-the-art technology and collaborate on projects that are at the forefront of automotive innovation.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="../image/career3.jpg" alt="" className='careerimgg' />
                    </div>

                </div>
              
                <div className="row mt-4">
                <div className="col-md-6">
                        <img src="../image/career5.jpg" alt="" className='careerimg' />
                    </div>
               
                    <div className="col-md-6">
                        <div className="careerheading">
                            Collaborative Environmen
                        </div>
                        <div className="careerpara">
                            Collaboration is key to our success at Prestige Industries. You'll have the opportunity to work alongside talented individuals from diverse backgrounds who share a passion for excellence and a commitment to delivering exceptional results for our customers.
                        </div>
                    </div>
                    </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-12">
                        <div className="careerheading text-center">
                            How to Apply
                        </div>
                        <div className="careerpara">
                            If you're ready to take the next step in your career and join a company that values excellence, innovation, and teamwork, we invite you to explore career opportunities with us. To learn more about working at Prestige Industries and to submit your application, please visit our careers page at [URL]. Join us at Prestige Industries and be a part of shaping the future of automotive technology!
                        </div>
                        <div className='sendcv'>
                            <div className='cvtext'> <strong>send Your CV </strong><span><a href="mailto: careers@prestigeindustries.co.in " className='cvbutton'>Send Resume</a></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career