import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    return (
        <div>
            <div class="breadcumb-area">
	<div class="container">				
		<div class="row">
			<div class="col-md-12 txtc  text-center ccase">	
				<div class="brpt">
					<h2>Service Details</h2>
				</div>
				<div class="breadcumb-inner">
					<ul>
						<li><Link to="index.html">Home</Link></li>
						<li><i class="fas fa-angle-right"></i></li>
						<li>Service Details</li>
					</ul>						
				</div>
			</div>
		</div>
	</div>
</div>


<div class="solutech_service3_area service_3d">
	<div class="container">	
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">
						<h3>Our Best Service &amp; Solution</h3>		
						<h1>See One time</h1>		
					</div>
				</div>
			</div>
		</div>
		<div class="row service_top">
		
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="witr_service_3d witr_service_con_3d witr_service_flip_down">
					<div class="witr_single_service_3d all_color_service text-center ">
				
						<div class="witr_service_front_3d">
							<div class="witr_service_position">
								<div class="witr_service_content_3d ">
									<div class="witr_service_icon_3d all_icon_color">
										<i class="icofont-ui-home"></i>
									</div>
									<h3>Home Servicing </h3>
									<p>Lorem ipsum dolor sit amet, caadipisi cing elit, sed do eiusmod temporgde incididunt utn labore. </p>		
								</div>
							</div>
						</div>
					
						<div class="witr_service_back_3d bekend_bg">
							<div class="witr_service_position ">
								<div class="witr_service_content_3d">
									<div class="witr_service_icon_3d all_icon_color">
										<i class="icofont-ui-home"></i>
									</div>
									<h3><Link to="#">Home Servicing</Link></h3>
									<p>Lorem ipsum dolor sit amet, caadipisi cing elit, sed do eiusmod temporgde incididunt utn labore. </p>		
								</div>
								<div class="witr_service_btn_3d">
									<Link to="#">See More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="witr_service_3d witr_service_con_3d witr_service_flip_right">
					<div class="witr_single_service_3d all_color_service text-center ">
				
						<div class="witr_service_front_3d">
							<div class="witr_service_position">
								<div class="witr_service_content_3d ">
									<div class="witr_service_icon_3d all_icon_color">
										<i class="icofont-ui-settings"></i>
									</div>
									<h3>PRODUCT SERVICING </h3>
									<p>Lorem ipsum dolor sit amet, caadipisi cing elit, sed do eiusmod temporgde incididunt utn labore. </p>		
								</div>
							</div>
						</div>
				
						<div class="witr_service_back_3d bekend_bg2">
							<div class="witr_service_position ">
								<div class="witr_service_content_3d">
									<div class="witr_service_icon_3d all_icon_color">
										<i class="icofont-ui-settings"></i>
									</div>
									<h3><Link to="#">PRODUCT SERVICING</Link></h3>
									<p>Lorem ipsum dolor sit amet, caadipisi cing elit, sed do eiusmod temporgde incididunt utn labore. </p>		
								</div>
								<div class="witr_service_btn_3d">
									<Link to="#">See More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="witr_service_3d witr_service_con_3d witr_service_flip_up">
					<div class="witr_single_service_3d all_color_service text-center ">
				
						<div class="witr_service_front_3d">
							<div class="witr_service_position">
								<div class="witr_service_content_3d ">
									<div class="witr_service_icon_3d all_icon_color">
										<i class="icofont-search-property"></i>
									</div>
									<h3>COULD &amp; SEARCH </h3>
									<p>Lorem ipsum dolor sit amet, caadipisi cing elit, sed do eiusmod temporgde incididunt utn labore. </p>		
								</div>
							</div>
						</div>
						
						<div class="witr_service_back_3d bekend_bg3">
							<div class="witr_service_position ">
								<div class="witr_service_content_3d">
									<div class="witr_service_icon_3d all_icon_color">
										<i class="icofont-search-property"></i>
									</div>
									<h3><Link to="#">COULD &amp; SEARCH</Link></h3>
									<p>Lorem ipsum dolor sit amet, caadipisi cing elit, sed do eiusmod temporgde incididunt utn labore. </p>		
								</div>
								<div class="witr_service_btn_3d">
									<Link to="#">See More</Link>
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
    );
};

export default ServiceDetail;