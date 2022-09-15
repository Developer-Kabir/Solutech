import React, { useEffect, useState } from 'react';


const AboutService = () => {


	const [about, setAbout] = useState([])
	useEffect(()=>{
		fetch("AboutService.json")
		.then(res=> res.json())
		.then(data => setAbout(data))
	},[])

    return (
        <div>
            <div class="solutech_serivce_area serivce_bg">
	<div class="container">	
		<div class="row">
			<div class="col-lg-12">
				<div class="witr_section_title">
					<div class="witr_section_title_inner text-center">
						<h2>Our Service</h2>		
						<h3>Industries What We Serve With You.</h3>		
					</div>
				</div>
			</div>							
		</div>
		<div class="row service_top">
	
			{
				about.map(a=>
					<div key={a._id} class="col-lg-4 col-md-6 col-sm-12">
				<div class="all_feature_color single_feature2 text-center">            
					<div class="witr_feature2">					
						<div class="witr_fea2_icon_top">
							<i class={a.i}></i>					
						</div>
						<h3>{a.name}</h3>
						<p>{a.text}</p>		

						<div class="witr_feature2_icon">						
							<i class={a.i}></i>	
						</div>					
					</div> 	   
				</div>
			</div>)
			}
	
			
		</div>
	</div>
</div>
        </div>
    );
};

export default AboutService;