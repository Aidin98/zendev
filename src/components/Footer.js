import React from 'react'
import './Banner.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='contact'>
                
                <h1>Contact us</h1>
                <div className='nas'>
                <h2 className='part1'>Call</h2>
                <h2 className='part2'>+4673-063 19 74</h2></div>
                <div className='nas'>
                <h2 className='part1'>Visit</h2>
                <h2 className='part2'>Visit Kungsportsavenyn 21,
411 36 Göteborg</h2></div>
<div className='nas'>
<h2 className='part1'>Email</h2>
                <h2 className='part2'>info@zendev.se</h2></div>
            </div>
            <div className='second'>
                <img src='https://www.zendev.se/images/all-pages/img19.jpg' alt='footer'/>
            </div>
        </div>
    )
}

export default Footer
