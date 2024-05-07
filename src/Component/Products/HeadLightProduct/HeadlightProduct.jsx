import React,{ useEffect, useState } from 'react'
import './HeadLight.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const HeadlightProduct = () => {
  const { _id } = useParams()
  const [data, setData] = useState({})
  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.prestigeindustries.co.in/api/product/"+_id)
      console.log(res);
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
      <section className='headlightsection'>
        <p className='headlightheanding'>{data.categoryname}</p>
        <div className='divabloutredirect'><Link style={{ textDecoration: "none", color: "#333" }}>Home</Link> / Product / Head Light Holders</div>
        <div className='firstdiv'>
          <div className='firstdivfirstchild'>
            <div>
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={data.image} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={data.image2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={data.image3}  class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={data.image1}  class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={data.image}  class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='mt-1 d-flex gap-1'>
              {/* <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/custom-wiring-harness-1218733.jpg" height={100} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" alt="" />
              <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/wiring-assemblies-1218730.jpg" height={100} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" alt="" /> */}
              {/* <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/tail-light-holder-1218728.jpg" height={100} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" alt="" /> */}
              {/* <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/head-light-holders-1218724.jpg" height={100} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" alt="" />
              <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/custom-wiring-harness-1218733.jpg" height={100} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" alt="" /> */}
            </div>
          </div>
          <div className='firstdivsecchild'>
            <p className='seconddivheading'>{data.subcategoryname}</p>
            {/* <button className='btnfirst'>Get Best Price</button> */}
            <div className="divfirstclass">
              <div className='headtext'>Business Type</div>
              <div className='headtextnext'>{data.businesstype}</div>
            </div>
            <div className="divfirstclass" >
              <div className='headtext'> Type</div>
              <div className='headtextnext'></div>
            </div>
            <div className="divfirstclass">
              <div className='headtext'>mterial</div>
              <div className='headtextnext'>{data.material}</div>
            </div>
            <div className="divfirstclass">
              <div className='headtext'>application</div>
              <div className='headtextnext'> {data.application}</div>
            </div>
            {/* <Link className='LinkHover'>Click to view More</Link> */}
            <p className='headingpreferrd'>Preferred Buyer From</p>
            <div className="divfirstclass">
              <div className='headtext'>Location</div>
              <div className='headtextnext'> worldwide</div>
            </div>
            <div className='butttnhead'>
              <button className='btnbtnheadfirst'>Request to call</button>
              <button className='btnbtnheadsecond'>send enquiry</button>
            </div>
          </div>
        </div>
        <div className='seconddivmain'>
          <p className='headingproductdetails'>Product Details</p>
          <div className='seconddiv'>
            <div className='seconddivwidth'>
              <div className="divfirstclass">
                <div className='headtext'>style</div>
                <div className='headtextnext'>antique</div>
              </div>
              <div className="divfirstclass" >
                <div className='headtext'> Color</div>
                <div className='headtextnext'>Available in many color</div>
              </div>
            </div>
            <div className='seconddivwidth'>
              <div className="divfirstclass">
                <div className='headtext'>Application</div>
                <div className='headtextnext'>Lamp holder</div>
              </div>
              <div className="divfirstclass" >
                <div className='headtext'>Feature</div>
                <div className='headtextnext'>Corrosion Proof</div>
              </div>
            </div>
          </div>
          <p className='productdetailspara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut quod architecto distinctio quo placeat nesciunt vitae ipsa fuga doloribus enim aliquid, aut qui velit veritatis veniam dolor sunt necessitatibus repellendus. Recusandae a soluta, tempora quae quasi natus sunt laudantium molestiae aut vitae omnis id architecto ullam repellat? Porro natus exercitationem dolores fuga totam consequatur cumque reprehenderit aliquam, nesciunt labore sed accusamus..</p>
          <button className='btnbtnheadthird'>Yes! i am intersted</button>
        </div>
        {/* <div className='seconddivmain'>
          <p className='headingproductdetails text-center'>Looking for "Tail right holders"</p>
          <div className='seconddiv'>
            <div className='seconddivwidth'>
              <div className="divfirstclass">
                <div className='headtext'>Name</div>
                <div className='headtextnext'><input type="text" name="" id="" placeholder='name' /></div>
              </div>
              <div className="divfirstclass" >
                <div className='headtext'>Mobile No.</div>
                <div className='headtextnext'><input type="text" name="" id="" placeholder='Mobile no' /></div>
              </div>
              <div className="divfirstclass" >
                <div className='headtext'>purpose of requirement</div>
                <div className='headtextnext'><input type="radio" value="1" name="gen" id="" />Reselling</div>
                <div className='headtextnext'><input type="radio" name="gen" value="2" id="" />End use</div>
              </div>
            </div>
            <div className='seconddivwidth'>
              <div className="divfirstclass">
                <div className='headtext'>Email</div>
                <div className='headtextnext'><input type="text" name="" id="" placeholder='email' /></div>
              </div>
              <div className="divfirstclass" >
                <div className='headtext'>quantity</div>
                <div className='headtextnext'><input type="text" name="" id="" placeholder='quatity' /></div>
                <div className='headtextnext'><input type="text" name="" id="" placeholder='unit type' /></div>
              </div>
            </div>
          </div>
          <div className="divfirstclass" >
            <div className='headtext'>Requirement Details</div>
            <textarea name="" id="" cols="50" rows="2"></textarea>
          </div>
          <button className='btnbtnheadthird'>Send enquiry</button>
        </div> */}
       {/* <div className='seconddivmain'>
          <p className='headingproductdetails text-center'>Explore More Product</p>
          <div>
            <div>
              <div>
                <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/custom-wiring-harness-1218733.jpg" alt="" />
              </div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
      </div> */}
      </section>
    </>
  )
}

export default HeadlightProduct