import React from 'react';
import { Link } from 'react-router-dom';

const Homebanner = () => {
    return (
        <div>
            	<div class="swiper-slide witr_swiper_height" style={{backgroundImage: "url(assets/images/slider-3.png)"}}>
				<div class="witr_sw_text_area text-left">
					<div class="witr_swiper_content">
						<h2>Create Your<span> Business</span></h2>
						<h3> Security By CCTV</h3>
					
						<div class="slider_btn">
							<div class="witr_btn_style">
								<div class="witr_btn_sinner">
									<Link class="witr_btn" to="/service">DISCOVER MORE</Link>
									<Link class="witr_btn active recpwit" to="/contact">CONTACT US</Link>
								</div>
							</div>
						</div>
					</div>
			
				</div>
			</div>
        </div>
    );
};

export default Homebanner;