import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const PartnerBrand = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
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
            <div class="witr_brand_area brand2">
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-8 col-sm-12 pdlf">	
				<div class="imagess_area wittr_car_top_left brand_bg">
					<div class="witr_car_overlay brand_imagess_active">
                    <Slider {...settings}>

                    <div class="slide_items">
							<img src="assets/images/brand1.png" alt=""/>
						</div>
						<div class="slide_items">
							<img src="assets/images/brand2.png" alt=""/>
						</div>
						<div class="slide_items">
							<img src="assets/images/brand3.png" alt=""/>
						</div>
						<div class="slide_items">
							<img src="assets/images/brand4.png" alt=""/>
						</div>
						<div class="slide_items">
							<img src="assets/images/brand2.png" alt=""/>
						</div>
						<div class="slide_items">
							<img src="assets/images/brand3.png" alt=""/>
						</div>
                        </Slider>
					</div>
				</div> 
			</div>
			<div class="col-lg-3 col-md-4 col-sm-12 pdlf">
				<div class="witr_button_bg">
					<div class="witr_button_area">
						<div class="witr_btn_style mr">
							<div class="witr_btn_sinner">	
								<Link to="#" class="witr_bbtn">More Portfolio</Link>
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

export default PartnerBrand;