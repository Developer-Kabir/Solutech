import React from 'react';
import { Link } from 'react-router-dom';

const OurProvidedService = () => {
    return (
        <div>
<div class="solutech_make_service_area">
	<div class="container">	
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title white">
					<div class="witr_section_title_inner text-center">
						<h2>WE MAKE SERVICE</h2>		
						<h3>Our Company facility Service</h3>		
					</div>
				</div>
				<div class="witr_classic_button_area">
				
					<div class="witr_btn_style mr tx_op">
						<div class="witr_btn_sinner">	
							<Link to="/service" class="witr_bbtn bbtn1">Try Free Service			
								<span class="btn_w a_active">
									<i class="icofont-refrigerator"></i>
								</span>
							</Link>
							<Link to="/pricing" class="witr_btn">Our Pricing</Link>
						</div>						
					</div>
				
					<div class="witr_btn_style mr  btn_none tx_cl">
						<div class="witr_btn_sinner">	
							<Link to="#" class="witr_bbtn bbtn1">Phone Premium	
								<span class="btn_c">
									<i class="icofont-ui-touch-phone"></i>
								</span>									
							</Link>
							<Link to="#" class="witr_btn">Metal Premium</Link>
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

export default OurProvidedService;