import React from 'react'
import './Development.css'
import data from './Content'
function Development() {
    return (
        <section className='dev-section'>
        <div className='development'>
            <h1 >Development and consulting services</h1>
            <div className='development-content'>
            {data.map((item)=>{
                return(
                    <div className='content' key={item.id}>
                        <h2><img src={item.icon}/>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                )    
            })}
            </div>
        </div>
      
        </section>
    )
}

export default Development
