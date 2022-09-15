import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

const FAQ = () => {
    return (
        <div>
            <div class="single_faq_bg_area faq_area">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-10 col-sm-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-left">
						<h2>OUR FAQ</h2>		
						<h3>Frequently Asked Questions?</h3>		
					</div>
				</div>
				<div class="witr_single_progress">
					<div class="witr_title2">
						<span class="witr_label">SKILLED EMPLOYEE </span>	
					</div>		
					<div class="progress witr_progress-style2">
					
					<Line percent={90} strokeWidth={1} strokeColor="blue"/>
					
				
					
					</div>				
				</div>
				<div class="witr_single_progress">
					<div class="witr_title2">
						<span class="witr_label">QUALITY SERVICES </span>	
					</div>		
					<div class="progress witr_progress-style2">
					<Line percent={95} strokeWidth={1} strokeColor="blue"/>
					</div>				
				</div>
				<div class="witr_single_progress">
					<div class="witr_title2">
						<span class="witr_label">SKILLED COMPLATET </span>	
					</div>		
					<div class="progress witr_progress-style2">
					<Line percent={80} strokeWidth={1} strokeColor="blue"/>
					</div>				
				</div>
				<div class="witr_single_progress">
					<div class="witr_title2">
						<span class="witr_label">SUPPORT COMPLATET </span>	
					</div>		
					<div class="progress witr_progress-style2">
					<Line percent={98} strokeWidth={1} strokeColor="blue"/>
					</div>				
				</div>
				<div class="witr_button_area button2">
					<div class="witr_btn_style mr">
						<div class="witr_btn_sinner">	
							<Link to="#" class="witr_btn">DISCOVER MORE</Link>
						</div>						
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-12 col-sm-12">
				<div class="accordion_area">
                    <div class="faq-part">
                        <div id="accordion">
							<div class="card card-2">
								<div class="card-header witr_ac_card">
									<Link to="#" class="card-link witr_ac_style" data-toggle="collapse" data-target="#collapse_242536c" aria-expanded="true">
									 01. Do You Need A Business Service?</Link>
								</div>
								<div id="collapse_242536c" class="collapse" data-parent="#accordion">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div>
							<div class="card card-2">
								<div class="card-header witr_ac_card">
									<Link to="#" class="card-link witr_ac_style" data-toggle="collapse" data-target="#collapse_9315e3d1" aria-expanded="true">
									02. Business Service A Scam?</Link>
								</div>
								<div id="collapse_9315e3d1" class="collapse   " data-parent="#accordion">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div> 
						
							<div class="card card-2  ">
								<div class="card-header witr_ac_card">
									<Link to="#" class="card-link witr_ac_style" data-toggle="collapse" data-target="#collapse_9965145" aria-expanded="true">
									03. Most Out Of Your Business Service?</Link>
								</div>
								<div id="collapse_9965145" class="collapse   " data-parent="#accordion">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div>
					
							<div class="card card-2  ">
								<div class="card-header witr_ac_card">
									<Link to="#" class="card-link witr_ac_style" data-toggle="collapse" data-target="#collapse_4b685b3" aria-expanded="true">
									 04. The Sound Of Business Service?</Link>
								</div>
								<div id="collapse_4b685b3" class="collapse   " data-parent="#accordion">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div>
					
							<div class="card card-2  ">
								<div class="card-header witr_ac_card">
									<Link to="#" class="card-link witr_ac_style" data-toggle="collapse" data-target="#collapse_4b685b4" aria-expanded="true">
									05. The Sound Of Business Service?</Link>
								</div>
								<div id="collapse_4b685b4" class="collapse   " data-parent="#accordion">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.</p>
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

export default FAQ;