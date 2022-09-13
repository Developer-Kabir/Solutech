import React from 'react';
import { Link } from 'react-router-dom';
import Blogs from './Blogs';

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


<Blogs></Blogs>
 
        </div>
    );
};

export default Blog;