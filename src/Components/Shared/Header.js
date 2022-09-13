import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div class="em40_header_area_main">

	<div class="solutech-header-top">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
					<div class="top-address text-left">
						<p>
							<span><i class="fas fa-home"></i>Ground Floor New World.</span>
							<Link to="#"><i class="fas fa-phone-alt"></i>+998556778345</Link>
							<Link to="#"><i class="fas fa-envelope"></i>demo@example.com</Link>
						</p>
					</div>
				</div>
			
				<div class="col-xs-12 col-lg-3 col-xl-3 col-md-3 col-sm-12 ">
					<div class="top-right-menu">
						<ul class="social-icons text-right text_m_center">
							<li><Link to="#"><i class="fa fa-facebook-f"></i></Link></li>
							<li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
							<li><Link to="#"><i class="fab fa-instagram"></i></Link></li>
							<li><Link to="#"><i class="fab fa-tumblr"></i></Link></li>
							<li><Link to="#"><i class="fab fa-pinterest-p"></i></Link></li>								
						</ul>
					</div>
				</div>	
			</div>		
		</div>
	</div>

	<div class="tx_top2_relative">
		<div class="">
			<div class="tx_relative_m">
				<div class="">  
					<div class="mainmenu_width_tx  ">
						<div class="solutech-main-menu one_page hidden-xs hidden-sm witr_h_h10">
							<div class="solutech_nav_area scroll_fixed postfix">
								<div class="container">
									<div class="row logo-left">				
									
										<div class="col-md-3 col-sm-3 col-xs-4">
											<div class="logo">
												<Link class="main_sticky_main_l" to="index.html" title="solutech">
													<img src="assets/images/logo.png" alt="solutech"/>
												</Link>
												<Link class="main_sticky_l" to="index.html" title="solutech">
													<img src="assets/images/logo2.png" alt="solutech"/>
												</Link>
											</div>	  
										</div>
										<div class="col-md-9 col-sm-9 col-xs-8">
											<nav class="solutech_menu main-search-menu">					
												<ul class="sub-menu">
													<li>
														<Link to="/">Home</Link>
													</li>
													<li><Link to="/about">About</Link></li>
													<li>
														<Link to="/service">Service</Link>
													</li>
													<li>
														<Link to="/pricing">Pricing</Link>
													</li>
													<li>
														<Link to="/portfolio">Portfolio</Link>
													</li>
													<li>
														<Link to="/blog">Blog</Link>
													</li>
													<li><Link to="/contact">Contact Us</Link></li>
												</ul>
												<div class="donate-btn-header">
													<Link class="dtbtn" to="/contact">Contact Now</Link>	
												</div>
											</nav>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 			
			</div>
		</div> 
	</div> 
</div> 






<div class="mobile_logo_area hidden-md hidden-lg">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="mobile_menu_logo text-center">
					<Link to="index.html" title="solutech">
						<img src="assets/images/logo.png" alt="solutech"/>
					</Link>		
				</div>
			</div>
		</div>
	</div>
</div>


<div class="home-2 mbm hidden-md hidden-lg  header_area main-menu-area">
	<div class="menu_area mobile-menu">
		<nav class="solutech_menu">						
			<ul class="sub-menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li><Link to="/about">About</Link></li>
				<li class="menu-item-has-children">
					<Link to="#">Service</Link>
					<ul class="sub-menu">
						<li><Link to="home-security.html">Home Security</Link></li>
						<li><Link to="software-development.html">Software Development</Link></li>
						<li><Link to="installation.html">Installation CCTV</Link></li>
						<li><Link to="service-details.html">Service Details</Link></li>
					</ul>
				</li>
				<li class="menu-item-has-children">
					<Link to="#">Pages</Link>
					<ul class="sub-menu">
						<li><Link to="pricing-plan.html">Pricing Plan</Link></li>
						<li><Link to="why-choose-us.html">Why Choose Us</Link></li>	
						<li><Link to="faq.html">FAQ’S</Link></li>
						<li class="menu-item-has-children">
							<Link to="#">Portfolio</Link>
							<ul class="sub-menu">
								<li><Link to="portfolio-2column.html">Portfolio 2Column</Link></li>
								<li><Link to="portfolio-3column.html">Portfolio 3Column</Link></li>
								<li><Link to="portfolio-4column.html">Portfolio 4Column</Link></li>
							</ul>
						</li>
						<li><Link to="team.html">Team</Link></li>
						<li><Link to="testimonial.html">Testimonial</Link></li>
					</ul>
				</li>
				<li class="menu-item-has-children">
					<Link to="#">News</Link>
					<ul class="sub-menu">
						<li><Link to="blog.html">Blog Grid</Link></li>
						<li><Link to="blog-left-sidebar.html">Blog Left Sidebar</Link></li>
						<li><Link to="blog-right-sidebar.html">Blog Right Sidebar</Link></li>
					</ul>
				</li>
				<li><Link to="/contact">Contact Us</Link></li>
			</ul>
		</nav>	
	</div>					
</div>
        </div>
    );
};

export default Header;