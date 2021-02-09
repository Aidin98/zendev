import React,{useState} from 'react'
import './Banner.css'
import data from './SliderData'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
function Slider() {
    const [index,setIndex]=useState(0)
    const [currentSlide,setCurrentSlide]=useState(data[index])
    
    const moveLeft = ()=>{
        console.log(index)
        if(index===0){
            setIndex(data.length-1)
            setCurrentSlide(data[index])
        }else {
            setIndex(index-1)
            setCurrentSlide(data[index])
        }
    }
    const moveRight = ()=>{
        console.log(index)
        if(index===data.length-1){
            setIndex(0)
            setCurrentSlide(data[index])
        }else {
            setIndex(index+1)
            setCurrentSlide(data[index])
        }
    }
    
    return (
        <div className='slider'>
            <h1>News Center</h1>
            <div className='sid'>
                <button className='arrows' onClick={moveLeft}><FaArrowLeft /></button>
                <div className='slider-content'>
                    <img src={currentSlide.img} alt='picture' className='slider-pic'/>
                    <div className='text'>
                        <h4>{currentSlide.date}</h4>
                        <p>{currentSlide.text}</p>
                        <button className='reading'>Continue Reading</button>
                    </div>
                </div>
                <button className='arrows' onClick={moveRight}><FaArrowRight/></button>

                </div>
        </div>
    )
}

export default Slider
