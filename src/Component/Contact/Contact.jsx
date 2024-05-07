import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"
import axios from 'axios'
import toast from 'react-hot-toast'
const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    })

    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const postdata = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("https://api.prestigeindustries.co.in/api/contact", data)
            if (res.status === 200) {
                toast.success("Your Contact us save successfully !!!!")
              window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <> <div style={{ marginTop: 160 }}></div>
            <section className='contactPage'>
                <p className='mainheading'>Prestige Industries</p>
                <div className='divabloutredirect'><Link style={{ textDecoration: "none", color: "#333" }}>Home</Link> > Contact Us</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.9220102379063!2d77.05659207375982!3d28.781585777299522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07845afdbf7b%3A0x4420695f2d8099fe!2sPrestige%20Industries!5e0!3m2!1sen!2sin!4v1714995421985!5m2!1sen!2sin" width="100%" height="450" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formmaindiv'>
                    <div className='cotactdivchild'>
                        <div><i className="ri-user-fill iconsizecontact"></i><span className='contactusspan'><strong>Mr. Mohit Kalra :</strong> +91-9999196748</span></div>
                        <div><i className="ri-user-fill iconsizecontact"></i><span className='contactusspan'><strong>Mr. S. S. Kalra :</strong> +91-9313357330</span></div>
                        <div><i className="ri-user-fill iconsizecontact"></i><span className='contactusspan'><strong>Mr. Rohit Kalra :</strong> +91-9999196749</span></div>
                        <div><i className="ri-map-pin-line iconsizecontact"></i><span className='contactusspan'>O-173, Sector-3, DSIIDC Industrial Park, Bawana, Bawana, Delhi, India</span></div>
                        <div><i className="ri-mail-line iconsizecontact"></i><span className='contactusspan'>Info@prestigeindustries.co.in</span> </div>
                        <div><i className="ri-mail-line iconsizecontact"></i><span className='contactusspan'>prestige.industries@rediffmail.com</span> </div>
                    </div>
                    <div className='contactformdiv'>
                        <h5>Send us a <span style={{ color: "#00abed" }}>Message</span></h5>
                        <form className="row g-3" onSubmit={postdata}>
                            <div className="col-md-6">
                                <input type="text" className="form-control" name='name' id="inputEmail4" placeholder='Your name' onChange={getInputData} />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" name='email' id="inputtext4" placeholder='your email' onChange={getInputData} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" name='phone' id="inputZip" placeholder='Phone number' onChange={getInputData} />
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" name='address' id="inputtext4" placeholder='Enter your full address' onChange={getInputData} />
                            </div>
                            <div className="col-md-12">
                                <textarea name="" id="" cols="30" rows="3" name="message" className='form-control' onChange={getInputData} placeholder='leave a message '></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact