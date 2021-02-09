import React from 'react'
import './Banner.css'
import data from './ClientData.js'
import {  FaArrowRight } from 'react-icons/fa'
export default function Client() {
    console.log(data)
    return (
        <section className='client'>
            <h1>Meet Out Clients</h1>
            <div className='items'>
               {data.map((item)=>{
                   const {id,h1,title,text,img}=item
                   return(
                       <div className='client-content' key={id}>
                           <img src={img} alt='pic' />
                           <h1>{title}</h1>
                           <h3>{h1}</h3>
                           <p>{text}</p>
                       </div>
                   )
               })}
               <h2>Read more case studies   <FaArrowRight /></h2>
               </div>
        </section>
    )
}
