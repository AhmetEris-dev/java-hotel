import React from 'react'
import TopCarousel from '../component/molecules/TopCarousel'
import Header from '../component/molecules/Header'

function Homepage() {
  return (
    <div className="container">
       
        <Header/>
        
    
        <div className="row">
            <TopCarousel/>
        </div>
        
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
       
        <div className="row">
            <div className="row"></div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
        <div className="row">
            <div className="row"></div>
            <div className="row"></div>
        </div>
        <div className="row">
            {/** owl carousel gelecek*/}
        </div>
        <div className="row">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
        </div>
    </div>
  )
}

export default Homepage