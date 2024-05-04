import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"
const Contact = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    return (
        <> <div style={{marginTop:160}}></div>
            <section className='contactPage'>
                <p className='mainheading'>Prestige Industries</p>
                <div className='divabloutredirect'><Link style={{ textDecoration: "none", color: "#333" }}>Home</Link> > Infrastructure</div>
                <div className='formmaindiv'>
                    <div className='cotactdivchild'>
                        <div><i className="ri-user-fill iconsizecontact"></i><span className='contactusspan'><strong>Mr. Mohit Kalra :</strong> +91-9999196748</span></div>
                        <div><i className="ri-user-fill iconsizecontact"></i><span className='contactusspan'><strong>Mr. S. S. Kalra :</strong> +91-9999196748</span></div>
                        <div><i className="ri-user-fill iconsizecontact"></i><span className='contactusspan'><strong>Mr. Rohit Kalra :</strong> +91-9999196748</span></div>
                        <div><i className="ri-map-pin-line iconsizecontact"></i><span className='contactusspan'>O-173, Sector-3, DSIIDC Industrial Park, Bawana, Bawana, Delhi, India</span></div>
                        <div><i className="ri-mail-line iconsizecontact"></i><span className='contactusspan'>prestige.industries@rediffmail.com</span> </div>
                    </div>
                    <div className='contactformdiv'>
                        <h5>Send us a <span style={{ color: "#00abed" }}>Message</span></h5>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="inputEmail4" placeholder='Your name' />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" id="inputtext4" placeholder='your email' />
                            </div>
                            <div className="col-md-6">
                                <select id="inputState" className="form-select">
                                    <option selected>India </option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="inputZip" placeholder='Phone number' />
                            </div>
                            <div className="col-md-12">
                                <textarea name="" id="" cols="30" rows="3" className='form-control' placeholder='leave a message '></textarea>
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