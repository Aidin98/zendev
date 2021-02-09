import React from 'react'
import data from './ArticlesData'
import './Banner.css'
function Articles() {
    console.log(data)
    return (
        <div className='articles'>
            <h1>Top-notch service focused on your ambitions</h1>
            <div className='art'>
            {data.map((item)=>{
                    if(item.id%2===0){
                        return(
                            <div className='article-content' key={item.id}>
                                <div className='words'>
                                    <img src={item.icon} alt='pic' />
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                </div>
                                <img src={item.img} alt='pic' className='art-pic'/>
                            </div>
                        )
                    }else if(item.id%2!==0){
                        return (
                            
                            <div className='article-content' key={item.id}>
                                <img src={item.img} alt='pic' className='art-pic'/>
                                <div className='words'>
                                    <img src={item.icon} alt='pic' />
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
                <div className='join'>
                    <img src='https://www.zendev.se/images/img18.png' alt='join' />
                    <h2>Join zendev
                        <h5>The coolest place to learn and excel, join the ZenDev team</h5>
                    </h2>
                    <button className='btn2'>Apply now!</button>
                </div>
            </div>
        </div>
    )
}

export default Articles
