import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
           <div class="breadcumb-area">
	<div class="container">				
		<div class="row">
			<div class="col-md-12 txtc  text-center ccase">
				<div class="brpt">
					<h2>Blog</h2>
				</div>
				<div class="breadcumb-inner">
					<ul>
						<li><Link to="index.html">Home</Link></li>
						<li><i class="fas fa-angle-right"></i></li>
						<li>Blog</li>
					</ul>						
				</div>
			</div>
		</div>
	</div>
</div>



<div class="solutech_blog2_area blog_page">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">
						<h2>NEWS</h2>		
						<h3>All the benefits you get in our</h3>
						<h1>latest news & blog</h1>		
					</div>
				</div>
			</div>
		</div>
		 <div class="bgimgload">	
			<div class="row blog-messonary blog_top">
		
				<div class="witr_nth_child col-lg-4  col-md-6 col-sm-8 grid-item   witr_all_mb_30">
					<div class="blog-part all_blog_color">
						<div class="blog_part_inner">
							<div class="witr_blog_imags">
								<div class="blog-img">
									<Link to="#"><img src="assets/images/blog-thumb-01.jpg" alt=""/> </Link>
								</div>
							</div>
							<div class="wblog-content blog-content-2 all_blog_color">
								<span><Link to="#"><i class="fas fa-user"></i> Solutech </Link></span>
								<span><i class="icofont-tags"></i><Link to="#">Antivirus app</Link></span>
								<h5><Link to="single-blog.html">Questions every business owner able to answer</Link></h5>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this 2021</p>
								<Link class="btn2" to="#">Read More</Link>
							</div>
						</div>
					</div>
				</div>
	
				<div class="witr_nth_child col-lg-4  col-md-6 col-sm-8 grid-item   witr_all_mb_30">
					<div class="blog-part all_blog_color">
						<div class="blog_part_inner">
							<div class="witr_blog_imags">
								<div class="blog-img">
									<Link to="#"><img src="assets/images/blog-thumb-02.jpg" alt=""/> </Link>
								</div>
							</div>
							<div class="wblog-content blog-content-2 all_blog_color">
								<span><Link to="#"><i class="fas fa-user"></i> Solutech </Link></span>
								<span><i class="icofont-tags"></i><Link to="#">Business</Link></span>
								<h5><Link to="single-blog.html">Boost Leads Optimize Market of New Year</Link></h5>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this 2021</p>
								<Link class="btn2" to="#">Read More</Link>
							</div>
						</div>
					</div>
				</div>
		
				<div class="witr_nth_child col-lg-4  col-md-6 col-sm-8 grid-item   witr_all_mb_30">
					<div class="blog-part all_blog_color">
						<div class="blog_part_inner">
							<div class="witr_blog_imags">
								<div class="blog-img">
									<Link to="#"><img src="assets/images/blog-thumb-03.jpg" alt=""/> </Link>
								</div>
							</div>
							<div class="wblog-content blog-content-2 all_blog_color">
								<span><Link to="#"><i class="fas fa-user"></i> Solutech </Link></span>
								<span><i class="icofont-tags"></i><Link to="#">Antivirus app</Link></span>
								<h5><Link to="single-blog.html">We make a Revolution in Word Class Building.</Link></h5>
								<p>Lorem Ipsum has been the industry's standarddummy text ever since this 2021</p>
								<Link class="btn2" to="#">Read More</Link>
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

export default Blog;