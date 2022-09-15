import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
<div class="witrfm_area">
	<div class="footer-middle">  
		<div class="container">
			<div class="row">
				<div class=" col-lg-3 col-md-6 col-sm-12">
					<div class="widget widget_solutech_description_widget">				
						<div class="solutech-description-area">
							<Link to="#"><img src="assets/images/logo2.png" alt=""/></Link>
							<p>Solutech Software provides premier management, technical and professional services in the fields of Information Technology and Security Systems to help clients ...</p>
							<div class="social-icons">
								<Link target="_blank" to="/https://www.facebook.com"><i class="fa fa-facebook-f"></i></Link>
								<Link target="_blank" to="/https://www.google.com/"><i class="fab fa-google-plus-g"></i></Link>
								<Link target="_blank" to="/https://twitter.com/"><i class="fab fa-twitter"></i></Link>
								<Link target="_blank" to="/https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<div class=" col-lg-3 col-md-6 col-sm-12">
					<div class="widget widget_nav_menu">
						<h2 class="widget-title">Support 24/7</h2>
						<ul class="menu">
							<li><Link to="/terms">Term & Conditions</Link></li>
							<li><Link to="/contact">Contact</Link></li>
							<li><Link to="/faq">FAQ’s</Link></li>
							<li><Link to="/history">History & Experience</Link></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="widget about_us">
						<h2 class="widget-title">Local Address</h2>
						<div class="about-footer">
							<div class="footer-widget address">
								<div class="footer-logo">
									<p>To confront or deal with our Custome</p>
								</div>
								<div class="footer-address">
									<div class="footer_s_inner"> 
										<div class="footer-sociala-icon">
											<i class="fa fa-map-marker"></i>
										</div>									
										<div class="footer-sociala-info">				
											<p>Address : New York. US</p>
										</div> 
									</div> 
									<div class="footer_s_inner"> 
										<div class="footer-sociala-icon">
											<i class="fa fa-phone"></i>
										</div> 									
										<div class="footer-sociala-info">   
												<p>Phone : +1 (568) 989 565</p>
										</div>
									</div>
									<div class="footer_s_inner"> 
										<div class="footer-sociala-icon"> 
											<i class="fa fa-globe"></i>
										</div> 
										<div class="footer-sociala-info">  
											<p>Email : mail@solutech.com</p>									
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<div class="col-sm-12 col-md-6  col-lg-3 last">
					<div class="widget_text widget widget_custom_html">
						<h2 class="widget-title">Working Hours</h2>
						<div class="textwidget custom-html-widget">
							<div class="witr_table">
								<div class="witr_sub_table">
									<span>Tuesday - Friday</span>
									<span>08:00 - 20:00</span>
								</div>
								<div class="witr_sub_table">	
									<span>Saturday</span>
									<span>09:00 - 18:00</span>
								</div>		
								<div class="witr_sub_table">		
									<span>Sunday</span>
									<span>09:00 - 18:00</span>
								</div>
								<div class="witr_sub_table">		
									<span>Monday</span>
									<span>09:00 - 18:00</span>
								</div>
								<div class="witr_sub_table">		
									<span>Emergency:</span>
									<span> +1 (020) 768 69</span>
								</div>
							</div>
						</div>
					</div>				
				</div>
			</div>	
		</div>	
	</div>	
	<div class="footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6  col-sm-12">
					<div class="copy-right-text">
						<p>Copyright &copy; Solutech all rights reserved. Design and Developed by Developer Kabir</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6  col-sm-12">				
					<div class="footer-menu">
						<ul class="text-right">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul> 				
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Footer;