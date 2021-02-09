import React,{useState} from 'react'
import {menu} from './data.js'
import './Banner.css'
import Development from './Development.js'
function Banner() {
    const [show,setShow]=useState(false)
    console.log(menu)
    const set = ()=>{
            setShow(!show)
    }
    
    return (
        <section className='section'>
        <div className='banner'>
            <div className='container'>
            <div className='banner-home'>
                    <img src='https://www.zendev.se/images/home-page/img1.jpg' alt='home' className='banner-pic'/>
                </div>
                <div className='banner-first'>
                    <h1 className='banner-title'>World-class Web, Mobile and E-Commerce solutions.</h1>
                    <p className='banner-paragraph'>Our team of experienced and innovative developers utilize the latest development technologies to deliver ingenious solutions tailored to your specific requirements.</p>
                    <h4 className='banner-h4'>Have a project in mind?</h4>
                    <div className='button-container'>
                        <button className={`${show ? 'btn' : 'btn-show'}`} onMouseOver={set}>E Commerce Solutions</button>
                        <button className={`${show ? 'btn-show' : 'btn' }`} onMouseOver={set}>Web and mobile solutions</button>
                    </div>
                </div>
               
            </div>
            
          </div>
         
          </section>
    )
}

export default Banner
