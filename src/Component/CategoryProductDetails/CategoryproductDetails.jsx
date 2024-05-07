import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Category.css'

const CategoryproductDetails = () => {
    const { _id } = useParams()
    const [data, setData] = useState({})
    const [product, setProduct] = useState([])

    const getApidata = async () => {
        try {
            let res = await axios.get("https://api.prestigeindustries.co.in/api/category/" + _id)
            setData(res.data.data)
            // console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    const getApiProduct = async () => {
        try {
            let res = await axios.get("https://api.prestigeindustries.co.in/api/product")
            console.log(res);
            setProduct(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const categoryProduct = product.filter((x) => x.categoryname === data.categoryname)
    console.log(categoryProduct)
    useEffect(() => {
        getApidata()
        getApiProduct()
    }, [_id])
    return (
        <>
    <div style={{marginTop:160}}></div>
            {/* <div className='categorydivmain'>
                <div>
                <div className='cateimginside'>
                        <div><img src={data.image2} alt="" style={{ height: 300, borderRadius: 10 }} /></div>
                        <div><img src={data.image3} alt="" style={{ height: 300, borderRadius: 10 }} /></div>
                    </div>
                    <p className='Headingcategory'>What is the <span style={{ color: "blue" }}>{data.categoryname}</span>?</p>
                    <p className='questionanswer'>{data.description}</p>
                   
                </div>
                <div className='cateimg'>
                    <div><img src={data.image} alt="" style={{ height: 300, borderRadius: 10 }} /></div>
                    <div><img src={data.image1} alt="" style={{ height: 300, borderRadius: 10 }} /></div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    {/* <p className='Headingcategory'>What is the <span style={{ color: "blue" }}>{data.categoryname}</span>?</p> */}
                    <p className='questionanswer'>{data.description}</p>
                    </div>
                    <div className="col-md-6">
                    <img src={data.image3} alt="" style={{ height: 300, borderRadius: 10 ,width:"100%" }} />
                    {/* <img src={data.image1} alt="" style={{ height: 300, borderRadius: 10 }} />
                    <img src={data.image} alt="" style={{ height: 300, borderRadius: 10 }} /> */}
                    </div>
                 
                </div>
            </div>
            {/* <div className='mb-4'>
                <p className='Headingcategory'>Related Product <span style={{ color: "blue" }}>{data.categoryname}</span></p>
                <div className='cateproductstyle' style={{}}>
                {
                    categoryProduct.map((item, index) =>
                    <Link to={`/productDetails/${item._id}`} style={{textDecoration:"none"}}>
                     <div className='categoryproduct'>
                            <div className='catproimg'>
                                <img src={item.image} alt="" style={{ height: 200, width: "100%" }} />
                            </div>
                            <div className='catproimg'>
                                <h5>{item.subcategoryname}</h5>

                            </div>
                        </div>
                    </Link>   
                    )
                }
                 </div>
            </div> */}
        </>
    )
}

export default CategoryproductDetails