import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
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
										<span><i class="fas fa-home "></i>Ground Floor New World.</span>
										<Link className='link-style' to="#"><i class="fas fa-phone-alt"></i>+1 985 5677834</Link>
										<Link to="#"><i class="fas fa-envelope"></i>mail@solutech.com</Link>
									</p>
								</div>
							</div>

							<div class="col-xs-12 col-lg-3 col-xl-3 col-md-3 col-sm-12 ">
								<div class="top-right-menu">
									<ul class="social-icons text-right text_m_center">
										<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com"><i class="fa fa-facebook-f"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.tumblr.com/"><i class="fab fa-tumblr"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>



				<Navbar className='container' sticky="top" collapseOnSelect expand="lg">
					<Navbar.Brand as={Link} to="/"><img src="assets/images/logo.png" alt="solutech" /></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link as={Link} to="/" className='kabir'>Home</Nav.Link>
							<Nav.Link as={Link} to="/about" className='kabir'>About</Nav.Link>
							<Nav.Link as={Link} to="/service" className='kabir'>Service</Nav.Link>
							<Nav.Link as={Link} to="/pricing" className='kabir'>Pricing</Nav.Link>
							<Nav.Link as={Link} to="/portfolio" className='kabir'>Portfolio</Nav.Link>
							<Nav.Link as={Link} to="/blog" className='kabir'>Blog</Nav.Link>
							<div class="donate-btn-header">
								<Link class="dtbtn" to="/contact">Contact Now</Link>
							</div>
						</Nav>

					</Navbar.Collapse>
				</Navbar>


			</div>
		</div>
	);
};

export default Header;