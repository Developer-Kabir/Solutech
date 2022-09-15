import React from 'react';
import Slider from "react-slick";

const OurHappyCustomer = () => {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
      responsive: [
        {
          breakpoint: 1007,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
        <div>
            

<div class="solutech_testimonial2_area testi_bg">			
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">	
						<h3>Our Happy Client </h3>		
						<p>We are grateful for the wonderful testimonials from our happy and beloved clients.</p>		
					</div>
				</div>
			</div>	
		</div>	
		<div class="carso_id1 tshover testi2_top">


        <Slider {...settings}>


        <div class="witr_testi_itemt testi-width all_color_testimonial">	
				<div class="em_single_testimonial witr_testi_s_9">
					<div class="test-part mt-50 ">
						<ul>
							<li>
								<div class="execllent_toggol">
									<div class="em_crating">
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
									</div>
									<div class="execllent_star">
										<h3>Execllent!!</h3>
									</div>
								</div>
							</li>
						</ul>
					</div> 						
					<div class="em_testi_content">
						<div class="em_testi_text">
							<p>If you are an existing Blink customer, the mini will save video to the cloud just like your other. There is no subscription required.</p>	
						</div>
					</div>								
					<div class="em_test_thumb">
						<img src="assets/images/testimonial1.png"  alt=""/>			
					</div>
					<div class="em_testi_title">
						<h2>Rahul Alartson <span>Admin Officer, Amazon.</span></h2>											
					</div>
				</div>										
			</div>
	
			<div class="witr_testi_itemt testi-width all_color_testimonial">	
				<div class="em_single_testimonial witr_testi_s_9">
					<div class="test-part mt-50 ">
						<ul>
							<li>
								<div class="execllent_toggol">
									<div class="em_crating">
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
									</div>
									<div class="execllent_star">
										<h3>Execllent!!</h3>
									</div>
								</div>
							</li>
						</ul>
					</div> 						
					<div class="em_testi_content">
						<div class="em_testi_text">
							<p> If you are not an existing customer then you get the trial subscription and have to pay later.</p>	
						</div>
					</div>								
					<div class="em_test_thumb">
						<img src="assets/images/testimonial2.png"  alt=""/>			
					</div>
					<div class="em_testi_title">
						<h2>Rahul Alartson <span>Admin Officer, Walmart.</span></h2>											
					</div>
				</div>										
			</div>
		
			<div class="witr_testi_itemt testi-width all_color_testimonial">	
				<div class="em_single_testimonial witr_testi_s_9">
					<div class="test-part mt-50 ">
						<ul>
							<li>
								<div class="execllent_toggol">
									<div class="em_crating">
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
										<i class="fas fa-star active"></i>
									</div>
									<div class="execllent_star">
										<h3>Execllent!!</h3>
									</div>
								</div>
							</li>
						</ul>
					</div> 						
					<div class="em_testi_content">
						<div class="em_testi_text">
							<p>If you only have blink minis in your home without the module, and have the app downloaded then there is no subscription .......</p>	
						</div>
					</div>								
					<div class="em_test_thumb">
						<img src="assets/images/testimonial3.png"  alt=""/>			
					</div>
					<div class="em_testi_title">
						<h2>Zonson Amplilian <span>CEO, XoomShaper.</span></h2>										
					</div>
				</div>										
			</div>


            </Slider>


		</div>
	</div>
</div>
        </div>
    );
};

export default OurHappyCustomer;