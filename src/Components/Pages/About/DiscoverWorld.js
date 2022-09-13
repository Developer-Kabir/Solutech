import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverWorld = () => {
    return (
        <div>
            <div class="solutech_about_area">
	<div class="container">	
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">
						<h2>Our Singin 1987.</h2>		
						<h3>DISCOVER THE WORLD OF BEST</h3>		
						<h1>CCTV Safety.</h1>		
					</div>
				</div>
			</div>
		</div>
		<div class="witr_pslide3 all_pslides_color ps1 ps3 service_active">
			<div class="witr_cslide3_idany service_top row">
				
				<div class="item_pos col-lg-6">	
					<div class="witr_single_pslide">	
						<div class="witr_pslide_image">
							<img src="assets/images/service-img-1.jpg" alt=""/>
						</div>			
						<div class="witr_content_pslide_text">
							<div class="witr_number_pslide">
								<h4>01.</h4>
							</div>
							<div class="witr_content_pslide">
								<p>SECURITY PROFESSIONAL </p>		
								<h3><Link to="#">Experts and Staff</Link></h3>
							</div>
							<div class="witr_pslide_custom">	
								<Link to="#"><span class="ti-arrow-right"></span></Link>
							</div>
						</div>	
					</div> 
				</div>
			
				<div class="item_pos col-lg-6">	
					<div class="witr_single_pslide">	
						<div class="witr_pslide_image">
							<img src="assets/images/service-img-2.jpg" alt=""/>
						</div>			
						<div class="witr_content_pslide_text">
							<div class="witr_number_pslide">
								<h4>02.</h4>
							</div>
							<div class="witr_content_pslide">
								<p>SECURITY PROFESSIONAL </p>		
								<h3><Link to="#">Experts and Staff</Link></h3>
							</div>
							<div class="witr_pslide_custom">	
								<Link to="#"><span class="ti-arrow-right"></span></Link>
							</div>
						</div>	
					</div> 
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default DiscoverWorld;