import React from 'react';
import { Link } from 'react-router-dom';

const Ourmember = () => {
    return (
        <div>
            <div class="solutech_team2_area">
	<div class="container">	
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">
						<h2>OUR MANAGEMENT TEAM</h2>			
					</div>
				</div>
			</div>
		</div>
		<div class="row team_top">

			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="em-team all_color_team ">
					<div class="em-team-one">	
						<div class="em-team-content-image-inner">	
							<div class="em-team-content-image">
								<img src="assets/images/team-01.jpg" alt=""/>
							</div>	
						</div>
						<div class="em-team-content-waraper all_content_bg_color">
							<div class="em-team-content-title-inner">
								<div class="em-content-title">
									<h5><Link to="#">EDWARD SMITH </Link></h5>
								</div>
							</div>
							<div class="em-team-content-subtitle-inner">
								<div class="em-content-subtitle">
									<span>DIRECTOR</span>
								</div>
							</div>
							<div class="em-team-content-socials-inner">
								<div class="em-team-content-socials all_team_s_color">			
									<Link to="#"><i class="fa fa-facebook-f"></i></Link>		
									<Link to="#"><i class="fab fa-twitter"></i></Link>		
									<Link to="#"><i class="fab fa-tumblr"></i></Link>		
									<Link to="#"><i class="fab fa-vimeo-v"></i></Link>		
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>
		
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="em-team all_color_team ">
					<div class="em-team-one">	
						<div class="em-team-content-image-inner">	
							<div class="em-team-content-image">
								<img src="assets/images/team-02.jpg" alt=""/>
							</div>	
						</div>
						<div class="em-team-content-waraper all_content_bg_color">
							<div class="em-team-content-title-inner">
								<div class="em-content-title">
									<h5><Link to="#">RUBEL SMITH</Link></h5>
								</div>
							</div>
							<div class="em-team-content-subtitle-inner">
								<div class="em-content-subtitle">
									<span>MANAGER</span>
								</div>
							</div>
							<div class="em-team-content-socials-inner">
								<div class="em-team-content-socials all_team_s_color">			
									<Link to="#"><i class="fa fa-facebook-f"></i></Link>		
									<Link to="#"><i class="fab fa-twitter"></i></Link>		
									<Link to="#"><i class="fab fa-tumblr"></i></Link>		
									<Link to="#"><i class="fab fa-vimeo-v"></i></Link>		
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>
		
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="em-team all_color_team ">
					<div class="em-team-one">	
						<div class="em-team-content-image-inner">	
							<div class="em-team-content-image">
								<img src="assets/images/team-03.jpg" alt=""/>
							</div>	
						</div>
						<div class="em-team-content-waraper all_content_bg_color">
							<div class="em-team-content-title-inner">
								<div class="em-content-title">
									<h5><Link to="#">ANDORSON</Link></h5>
								</div>
							</div>
							<div class="em-team-content-subtitle-inner">
								<div class="em-content-subtitle">
									<span>MARKETING</span>
								</div>
							</div>
							<div class="em-team-content-socials-inner">
								<div class="em-team-content-socials all_team_s_color">			
									<Link to="#"><i class="fa fa-facebook-f"></i></Link>		
									<Link to="#"><i class="fab fa-twitter"></i></Link>		
									<Link to="#"><i class="fab fa-tumblr"></i></Link>		
									<Link to="#"><i class="fab fa-vimeo-v"></i></Link>		
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

export default Ourmember;