import React from 'react'
import Logo from '../../assets/logo.png'
import Moment from 'moment';
import './footer.css'

const currentYear = Moment().format('YYYY')

const Footer = () =>  (
  
    <div className='rent2go__footer section__padding' >
        <div className='rent2go__footer-heading'>
            <h1 className='gradient__text'></h1>
        </div>
        
        <div className='rent2go__footer-links'>
           <div className='rent2go__footer-links_logo'>
            <img src={Logo} alt="rent2go_logo" />
           
           </div>
           <div className='rent2go__footer-links_div'>
             <h4>Links</h4>
             <p>Overons</p>
             <p>Social Media</p>
             <p>Counters</p>
             <p>Contact</p>
           </div>
           <div className='rent2go__footer-links_div'>
             <h4>Company</h4>
             <p>Terms & Conditions</p>
             <p>Privacy Policy</p>
             <p>Contact</p>
           </div>
           <div className='rent2go__footer-links_div'>
             <h4>Get in touch</h4>
             <p>Crechterwoord K12 182 DK Alknjkcb</p>
             <p>085-132567</p>
             <p>info@payme.net</p>
           </div>
        </div>
        <div className='rent2go__footer-copyright'>
             <p>© {currentYear} Rent2Go. All rights reserved.</p> 
           </div>
    </div>
  )


export default Footer