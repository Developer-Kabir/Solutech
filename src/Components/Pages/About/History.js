import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div>
            <div class="witr_swiper_area swiper2 choose_page">
	<div class="swiper-container witr_active_id6">
		<div class="swiper-wrapper">
			<div class="swiper-slide d1 t1 m1 witr_swiper_height swiper-slide-active" style={{backgroundImage: "url(assets/images/b8.jpg)"}}>
				<div class="witr_sw_text_area text-center">
					<div class="witr_swiper_content ">
						<h2>“Some of the History of Our Company is that we are </h2>
						<h3>Catching up through Video”</h3>
						<p>But there is no way to get worthwhile results without cooperation and trust between a client company.</p>
					
						<div class="slider_btn">
							<div class="witr_btn_style">
								<div class="witr_btn_sinner">
									<Link class="witr_btn" to="/service">MORE SERVICE</Link>
									<Link class="witr_btn active recpwit" to="/contact">CONTACT NOW</Link>
								</div>
							</div>
						</div>
					</div>
					<div class="slider_vd_icon">
						<div class="slider_vd_icon_inner">
							<Link class="tx_svd_icon recpwit video-popup video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" to="https://youtu.be/alHaLPnTgMs"><i class="fas fa-play"></i></Link>
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

export default History;