import React from 'react';
import Slider from "react-slick";

const Testiomonal = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
            <div class="solutech_testimonial_bg_area">
	<div class="container">	
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title white">
					<div class="witr_section_title_inner text-center">
						<h2>Our Testimonial</h2>		
						<h3>Compilate Recent Product For</h3>		
						<h1>Our Customer</h1>	
					</div>
				</div>
			</div>						
		</div>
		<div class="carso_idtesti all_color_testimonial dfa testi_top">
        <Slider {...settings}>
        <div class="item guttergs">
				<div class="single_creativeItem post_t6">
					<div class="box-size">
						<div class="testiCreCon">
							<i class="fa fa-quote-right"></i>
				
							<p>Following best practices and pro edures provided by the leading orga izations in the industry, our clea ng and disinfectingIt</p>								
						</div>
						<div class="em_test_thumb">
							<img src="assets/images/testimonial2.png" alt="" />
						</div>
						<div class="testAuthor">
							<h6>Zonson Amplilian</h6>
							<span> Co- Of Officer </span>
						</div>
					</div>
				</div>
			</div>

			<div class="item guttergs">
				<div class="single_creativeItem post_t6">
					<div class="box-size">
						<div class="testiCreCon">
							<i class="fa fa-quote-right"></i>
		
							<p>Following best practices and pro edures provided by the leading orga izations in the industry, our clea ng and disinfectingIt</p>								
						</div>
						<div class="em_test_thumb">
							<img src="assets/images/testimonial1.png" alt="" />
						</div>
						<div class="testAuthor">
							<h6>Rahul Alartson</h6>
							<span> Admin Officer </span> 
						</div>
					</div>
				</div>
			</div>

			<div class="item guttergs">
				<div class="single_creativeItem post_t6">
					<div class="box-size">
						<div class="testiCreCon">
							<i class="fa fa-quote-right"></i>
				
							<p>Following best practices and pro edures provided by the leading orga izations in the industry, our clea ng and disinfectingIt</p>								
						</div>
						<div class="em_test_thumb">
							<img src="assets/images/testimonial3.png" alt="" />
						</div>
						<div class="testAuthor">
							<h6>Robert Amplilian</h6>
							<span> Chief People Officer </span> 
						</div>
					</div>
				</div>
			</div>

			<div class="item guttergs">
				<div class="single_creativeItem post_t6">
					<div class="box-size">
						<div class="testiCreCon">
							<i class="fa fa-quote-right"></i>
					
							<p>Following best practices and pro edures provided by the leading orga izations in the industry, our clea ng and disinfectingIt</p>								
						</div>
						<div class="em_test_thumb">
							<img src="assets/images/testimonial1.png" alt="" />
						</div>
						<div class="testAuthor">
							<h6>Marvin McKinney</h6>
							<span> District Officer </span> 
						</div>
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

export default Testiomonal;