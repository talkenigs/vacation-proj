import React from 'react'
import Style from './footer.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
    return (
        <>

<footer className="footer-distributed">

			<div className="footer-left">

				<h3>VACA<span>TIONS</span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Vacations © 1994</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+972.544.696.638</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@vacations.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>Its all about you</span>
					Book flights, hotels and vacations packages
				</p>

				<div className="footer-icons">

					<a href="#">< BsFacebook /></a>
					<a href="#">< BsLinkedin /></a>
					<a href="#">< BsTwitter /></a>
					<a href="#">< BsGithub /></a>

				</div>

			</div>

		</footer> 
        </>
    )
}

export default Footer
