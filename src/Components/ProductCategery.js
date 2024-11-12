import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SelectProductById from './SelectProductById'

const ProductCategery = () => {

    const[category,setcategory]=useState([])
    const [filterdata,setfilterdata]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>console.log(json))

    },[])

    const fetchdata=async()=>{
        let response=await fetch('https://fakestoreapi.com/products/categories')
        let data=await response.json()
        console.log(data)
        setcategory(data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])


    const handleSelectCategery = async (data) => {
        let response = await fetch(`https://fakestoreapi.com/products/category/${data}`);
        let data1 = await response.json();
        setfilterdata(data1); 
        console.log(data1);
    }
    


  return (

    <div className='ProductCategery-Container'>


       <div style={{display:'flex',flexDirection:'row',gap:50,marginTop:'20px'}} >

            {
                category.map((data,index)=>{
                    console.log(data)
                    return(
                        <div key={index}>
                            <button onClick={()=>handleSelectCategery(data)} className='btn btn-primary'>{data}</button>
                        </div>
                    )
                })
            }
       </div>

       

       <div className="filterdata-Container">
        {
            filterdata.map((item) => {
        return (
            <Link to='/selectProduct' state={{id:item.id}}>
                    <div key={item.id}>
                <h4>{item.category}</h4>
                <img src={item.image} style={{width: '300px', height: '300px'}} />
                <p style={{fontWeight: 'bold', color: 'blue', fontSize: 30}}>
                    Price <span>{item.price}</span>
                </p>
                <div style={{display: 'flex', gap: 80}}>
                    <p style={{fontWeight: 'bold', color: 'red'}}>Rating {item.rating.rate}</p>
                    <p>Count {item.rating.count}</p>
                </div>
                <p style={{width: "300px"}}>{item.description}</p>
            </div>
            </Link>
            
        );
    })

    }
</div>



    </div>
  )
}

export default ProductCategery