import React from 'react';
import CountUp from 'react-countup';

const Counter2 = () => {
    return (
        <div>
            <div class="solutech_counter_bg_area">
	<div class="container">	
		<div class="row ">

			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_single_counter all_counter_color white">
					<div class="witr_custom_icon">
						<i class="icofont-group-students"></i>
					</div>	
					<div class="witr_counter_text">
						<h4>Happy Clients </h4>		
						<CountUp end={700} />				
						<span>+</span>
					</div>					
				</div>
			</div>

			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_single_counter all_counter_color white">
					<div class="witr_custom_icon">
						<i class="icofont-page"></i>
					</div>	
					<div class="witr_counter_text">
						<h4>Current Service</h4>		
						<CountUp end={960} />			
						<span>+</span>
					</div>					
				</div>
			</div>

			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_single_counter all_counter_color white">
					<div class="witr_custom_icon">
						<i class="icofont-ui-folder"></i>
					</div>	
					<div class="witr_counter_text">
						<h4>Case Studies</h4>		
						<CountUp end={730} />			
						<span>+</span>
					</div>					
				</div>
			</div>

			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_single_counter all_counter_color white">
					<div class="witr_custom_icon">
						<i class="icofont-award"></i>
					</div>	
					<div class="witr_counter_text">
						<h4>Award</h4>		
						<CountUp end={97} />			
						<span>+</span>
					</div>					
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Counter2;