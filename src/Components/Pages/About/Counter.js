import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div>
            <div class="solutech_counter_area">
	<div class="container counter_bg">	
		<div class="row">
		
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_counter_single all_counter_color">
					<div class="witr_custom_icon">
						<i class="icofont-man-in-glasses"></i>
					</div>
					<div class="witr_counter_number_inn">
						<h3 class="counter"><CountUp end={130} /></h3>				
						<span>+</span>
						<h4>Happy Customers </h4>		
					</div> 
				</div>
			</div>
		
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_counter_single all_counter_color">
					<div class="witr_custom_icon">
						<i class="icofont-automation"></i>
					</div>	
					<div class="witr_counter_number_inn">
						<h3 class="counter"><CountUp end={60} /></h3>				
						<span>+</span>
						<h4>Employer Solutions</h4>		
					</div> 	
				</div>
			</div>
		
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_counter_single all_counter_color">
					<div class="witr_custom_icon">
						<i class="icofont-money"></i>
					</div>	
					<div class="witr_counter_number_inn">
						<h3 class="counter"><CountUp end={30} /></h3>				
						<span>+</span>
						<h4>Client Coffee</h4>		
					</div> 	
				</div>
			</div>
		
			<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="witr_counter_single all_counter_color">
					<div class="witr_custom_icon">
						<i class="icofont-checked"></i>
					</div>	
					<div class="witr_counter_number_inn">
						<h3 class="counter"><CountUp end={33} /></h3>				
						<span>+</span>
						<h4>Project Completed</h4>		
					</div> 	
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Counter;