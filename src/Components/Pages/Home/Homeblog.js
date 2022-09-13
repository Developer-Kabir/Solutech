import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Homeblog = () => {

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
            <div class="solutech_blog_bg_area">
	<div class="container">	

		<div class="row">

       
      



			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center mb-5">
						<h2>Our News & Media</h2>		
						<h3>Latest news are on top</h3>		
					</div>
				</div>
			</div>						
		</div>
		<div class="witr_blog_area11 witr_blog_area16">

	
            <Slider {...settings}>
            <div class="witr_all_mb_30">
					<div class="busi_singleBlog">
						<div class="witr_sb_thumb">
							<Link to="#"><img src="assets/images/blog-thumb-01.jpg" alt="" /></Link>
						</div>	
						<div class="all_blog_color">	
							<div class="witr_blog_con ">									
								<h2 className='adce'><Link to="#">Boost Leads Optimize Market New Year</Link></h2>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this</p>
								<div class="em-blog-content-area_adn ">
									<div class="learn_more_adn">
										<Link class="learn_btn adnbtn2" to="#">Read More </Link>
									</div>
								</div>	
								<div class="witr_blog_border"></div>
								<span><i class="icofont-tags"></i> <Link to="#">	Business</Link></span>
								<span><Link to="#"><i class="icofont-ui-clock"></i></Link> 07 July, 2021</span>
							</div>
						</div>
					</div>
				</div>
			
				<div class="witr_all_mb_30">
					<div class="busi_singleBlog">
						<div class="witr_sb_thumb">
							<Link to="#"><img src="assets/images/blog-thumb-02.jpg" alt=""/ ></Link>
						</div>	
						<div class="all_blog_color">	
							<div class="witr_blog_con bs5">									
								<h2 className='adce'><Link to="#">We make a Revolution in Word Class Building.</Link></h2>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this</p>
								<div class="em-blog-content-area_adn ">
									<div class="learn_more_adn">
										<Link class="learn_btn adnbtn2" to="#">Read More </Link>
									</div>
								</div>	
								<div class="witr_blog_border"></div>
								<span><i class="icofont-tags"></i> <Link to="#">	Business</Link></span>
								<span><Link to="#"><i class="icofont-ui-clock"></i></Link> 07 July, 2021</span>
							</div>
						</div>
					</div>
				</div>
			
				<div class="witr_all_mb_30">
					<div class="busi_singleBlog">
						<div class="witr_sb_thumb">
							<Link to="#"><img src="assets/images/blog-thumb-03.jpg" alt="" /></Link>
						</div>	
						<div class="all_blog_color">	
							<div class="witr_blog_con bs5">									
								<h2 className='adce'><Link to="#">Which Architecture sheet tool is to choose?</Link></h2>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this</p>
								<div class="em-blog-content-area_adn ">
									<div class="learn_more_adn">
										<Link class="learn_btn adnbtn2" to="#">Read More </Link>
									</div>
								</div>	
								<div class="witr_blog_border"></div>
								<span><i class="icofont-tags"></i> <Link to="#">Home Safe</Link></span>
								<span><Link to="#"><i class="icofont-ui-clock"></i></Link> 07 July, 2021</span>
							</div>
						</div>
					</div>
				</div>
				
				<div class="witr_all_mb_30">
					<div class="busi_singleBlog">
						<div class="witr_sb_thumb">
							<Link to="#"><img src="assets/images/blog-thumb-04.jpg" alt=""/ ></Link>
						</div>	
						<div class="all_blog_color">	
							<div class="witr_blog_con bs5">									
								<h2 className='adce'><Link to="#">Questions every business owner able to answer</Link></h2>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this</p>
								<div class="em-blog-content-area_adn ">
									<div class="learn_more_adn">
										<Link class="learn_btn adnbtn2" to="#">Read More </Link>
									</div>
								</div>	
								<div class="witr_blog_border"></div>
								<span><i class="icofont-tags"></i> <Link to="#">	Antivirus app</Link></span>
								<span><Link to="#"><i class="icofont-ui-clock"></i></Link> 07 July, 2021</span>
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

export default Homeblog;