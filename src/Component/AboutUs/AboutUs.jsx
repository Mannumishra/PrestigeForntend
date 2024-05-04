import React, { useEffect, useState } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AboutUs = () => {
    const [data,setData] = useState([])
    const getApiData = async()=>{
        try {
            let res = await axios.get("http://localhost:8000/api/category")
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
getApiData()
    },[])
    return (
        <>
        <div style={{marginTop:160}}></div>
            <section>
                <div className="mainaboutdiv">
                    <div className="childabout1">
                        <p className='mainheading'>About us</p>
                        <div className='divabloutredirect'><Link style={{ textDecoration: "none", color: "#333" }}>Home</Link> > about</div>
                        <p className='aboutpara'>We <strong>Prestige Industries</strong> An <strong>ISO 9001:2015 certified company</strong>. we are manufacturer of wiring harness for OEMs.We are capable to manufacture any type of automotive wiring harness Which includes :</p>
                        <p className='aboutpara'>Body wiring harness (Power Window Wiring harness, Door Lock harness, Dashboard harness, Interior Electrical Components harness and Others), Chassis wiring harness (Front Wiring Harness ,Rear wiring Harness, Main wiring Harness and others), Engine Wiring harness  (Cruise Control Systems harness, Anti-Lock Braking Systems Wiring harness, Speed Sensor wiring harness, Fuel Injection Systems wiring harness, Others), Horn wiring harness, stereo wiring harness, Sensors wiring harness.</p>
                        <p className='aboutpara'>And competent to make any other wiring harness available as per the given drawings and specifications: Moreover we cater to the demand for bulk orders too with swiftness and faultlessness'.</p>
                        <p className='aboutpara'>Our company Prestige Industries forayed into Manufacturing and Supplying of Auto Electrical Parts in the year 1995. We are a creation of Mr. Shyam Sunder Kalra, who is also the managing director of the company. Mr. Kalra is M.Com. graduate, and has a rich experience in the Automobile Sector. Under his guidance, the company has been progressing steadfastly towards a bright future.</p>
                        <p className='aboutheading'>Manufacturing Unit</p>
                        <p className='aboutpara'>We are backed by a well-equipped manufacturing unit that sprawls over an area of 100 square meters, thereby, covering as big a space as 4,000 square feet. All the Latest Technologies and Machineries such as crimping machines, pvc welding machines, power presses, pneumatic tools, hand presses, etc. are installed in our manufacturing unit.</p>
                        <p className='aboutheading' >Our USP's</p>
                        <ul>
                            <li className='aboutpara'>We strive for quality and timely conclusion of the orders.</li>
                            <li className='aboutpara'>The leaders of the company are supported by a vast experience in the automobile sector, which is helping the company to reach new heights and break its own records year after year.</li>
                            <li className='aboutpara'>Our manufacturing techniques are well researched and advanced.</li>
                            <li className='aboutpara'>Our staff is well trained and is driven to perform in a full proof way.</li>
                            <li className='aboutpara'>Our quality control department is backing innovation and invention.</li>
                            <li className='aboutpara'>Our logistics team is quite responsive and works in coordination to make timely deliveries of the products at the desired destination.</li>
                            <li className='aboutpara'>Our client-centric approach is helping us to surpass the expectations.</li>
                        </ul>
                        <p className='aboutheading'>Customized Solutions</p>
                        <p className='aboutpara'>We bring afore customized solutions for our valuable clients, so as to appease the variegated demands. We are competent to make the Auto Electrical Parts available as per the given drawings and specifications. Moreover, we cater to the demand for bulk orders too with swiftness and faultlessness.</p>

                        <div>
                            <div></div>
                        </div>
                    </div>

                    <div className="childabout2">
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item headingtextside">Products</li>
                                {
                                    data.map((item,index)=>
                                        <li class="list-group-item aboutsidetext"><Link to={`/categoryproductdetails/${item._id}`} style={{textDecoration:"none",color:"black"}}>{item.categoryname}</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <ul class="list-group">
                                <li class="list-group-item headingtextside">Contact</li>
                                <li class="list-group-item aboutsidetext">Mobile : +91-9999196748</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs