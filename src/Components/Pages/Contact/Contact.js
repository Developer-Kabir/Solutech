import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div class="breadcumb-area">
	<div class="container">				
		<div class="row">
			<div class="col-md-12 txtc  text-center ccase">
				<div class="brpt">
					<h2>Contact</h2>
				</div>
				<div class="breadcumb-inner">
					<ul>
						<li><Link to="index.html">Home</Link></li>
						<li><i class="fas fa-angle-right"></i></li>
						<li>Contact</li>
					</ul>						
				</div>
			</div>
		</div>
	</div>
</div>

<div class="solutech_contact5_area">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">
						<h3>Get In Touch</h3>		
						<p>Have you any problem, please contact us via message </p>		
					</div>
				</div>
			</div>
		</div>
		<div class="row contact_top">
			<div class="col-lg-8 col-md-12 col-sm-12">
				<div class="apartment_area">				
					<div class="apartment_text"></div>		
					<div class="witr_apartment_form">
						<form action="mailto:mail@solutech.com" method="post" id="contact-form">
							<div class="form-row">
								<div class="form-group col-md-6">
									<span><input type="text" name="name" placeholder="Name*"/></span>
								</div>
								<div class="form-group col-md-6">
									<span><input type="email" name="email" placeholder="Email*"/></span>
								</div>
							</div>
							<div class="form-group">
								<span><input type="number" name="phone" placeholder="Phone*"/></span>
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<span><input type="text" name="city" placeholder="City"/></span>
								</div>
								<div class="form-group col-md-4">
									<span>
										<select name="select_opt">
											<option>Select Country</option>
											<option>Japan</option>
											<option>USA</option>
											<option>UK</option>
											<option>India</option>
											<option>Russia</option>
											<option>Belgium</option>
											<option>Italy</option>
										</select>
									</span>
								</div>
								<div class="form-group col-md-2">
									<span><input type="text" name="zip" placeholder="Zip"/></span>
								</div>
							</div>
							<div class="form-group">
								<span><textarea name="comment" placeholder="Comments/Message"></textarea></span>
							</div>
							<button type="submit" name="ok" class="btn btn-primary">Submit Now</button>
							<div class="row">
								<div class="col-lg-12 text-center">
									<p class="form-messege"></p>
								</div>
							</div>
						</form>
					</div>					
				</div>									
			</div>
			<div class="col-lg-4 col-md-12 col-sm-12">
				<div class="row em_service_contact_area">
					<div class="col-lg-12 col-md-6 col-sm-12">
						<div class="service-item all_color_service width_height_link_0 text-center  ">
							<div class="service_top_image"></div>
							<div class="text_box all_icon_color">
								<h3>Office Address </h3>
								<p>Main Building, Centrerl Road,<br/> 72/A, New York City, USA </p>		
							</div> 						
						</div>
					</div>
					<div class="col-lg-12 col-md-6 col-sm-12">
						<div class="service-item all_color_service width_height_link_0 text-center  ">
							<div class="service_top_image"></div>
							<div class="text_box all_icon_color">
								<h3>Office Opening time </h3>
								<p>Mon - Sun: 09:00am - 05:00pm<br/> +1 (198) 360 2017 </p>	
							</div> 						
						</div>
					</div>
					<div class="col-lg-12 col-md-6 col-sm-12">
						<div class="service-item all_color_service width_height_link_0 text-center  ">
							<div class="service_top_image"></div>
							<div class="text_box all_icon_color">
								<h3>Message Us</h3>
								<p>mail@solutech.com, <br/>info@solutech.com </p>
							</div> 						
						</div>
					</div>
				</div>
			</div>			
		</div>			
	</div>			
</div>


<div class="security_map_area"> 
	<div class="containers">
		<div class="row">
			<div class="col-lg-12">
				<div class="map_area">
                <iframe title='Gazipur-1704' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1663373772221!5m2!1sen!2sbd" ></iframe>
				</div>	
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Contact;