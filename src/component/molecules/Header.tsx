import React from 'react'
import './Header.css'
import HeaderNavbar from './HeaderNavbar'
function Header() {
  return (
    
    <div className="row header-row">
        <div className="col-lg-3 ">
        <h1 className='montserrat-head'>JAVA HOTEL</h1>
        </div>
        <div className="col-lg-9">
            <div className="row bg-color">
                <div className="col-lg-7 align-content-center">
                    <div className="row">
                        <div className="col">
                        <div className='d-inline-flex align-items-center p-2 me-4'>
                    <i className="fa-solid fa-envelope me-2 mb-1" style={{color:' #FEA116'}}></i>
                    <label className='form-label'>info@example.com</label>
                    </div>
                    <div className='d-inline-flex align-items-center p-2 me-4'>
                    <i className="fa-solid fa-phone me-2 mb-1" style={{color:' #FEA116'}}></i>
                    <label className='form-label'>+90 012 345 67 89</label>
                    </div>
                        </div>
                    
                        </div>
                   
                </div>
                <div className="col-lg-5 text-end align-content-center">
                    <div className="row ">
                        <div className="col-12">
                        <i className="fa-brands fa-facebook  me-2 mb-1" style={{color:' #FEA116'}}></i>
                     <i className="fa-brands fa-x-twitter me-2 mb-1" style={{color:' #FEA116'}}></i>
                      <i className="fa-brands fa-instagram me-2 mb-1" style={{color:' #FEA116'}}></i>
                        </div>
                
                    </div>
                
                </div>
            </div>
            <div className="row">
                <HeaderNavbar/>
            </div>
        </div>
    </div>

  )
}

export default Header