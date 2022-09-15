import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Useport from './Useport';

const Portfolio = () => {
	const [portfolio, setportfolio] = useState([])
	useEffect(() => {
		fetch("portfolio.json")
			.then(res => res.json())
			.then(data => setportfolio(data))
	}, [])


	return (




		<div>
			<div class="breadcumb-area">
				<div class="container">
					<div class="row">
						<div class="col-md-12 txtc  text-center ccase">
							<div class="brpt">
								<h2>Portfolio</h2>
							</div>
							<div class="breadcumb-inner">
								<ul>
									<li><Link to="index.html">Home</Link></li>
									<li><i class="fas fa-angle-right"></i></li>
									<li>Portfolio</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div class="wirr_project_area project4">
				<div class="containers">
					<div class="row">
						<div class="col-md-12">
							<div class="witr_section_title">
								<div class="witr_section_title_inner text-center">
									<h3>Our Best Project</h3>
									<h1>Image</h1>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="clearfix kicuakta">
								<div class="portfolio_nav  wittr_pfilter_menu">
									<ul id="filter" class="filter_menu ">

										<Tabs>
											<TabList>
												<Tab><li data-filter="*">All Work</li></Tab>
												<Tab><li data-filter=".security">Security</li></Tab>
												<Tab><li data-filter=".business">Business</li></Tab>
												<Tab><li data-filter=".home-safe">Home Safety</li></Tab>
												<Tab><li data-filter=".night-vision">Night vision</li></Tab>
											</TabList>

											<TabPanel>
												<div className="row container2">


													{
														portfolio.map(p =>
															<Useport
																key={p._id}
																p={p}
															></Useport>)
													}
												</div>


											</TabPanel>
											<TabPanel>
												<div className="row container2">
													{
														portfolio.slice(0, 2).map(p =>
															<Useport
																key={p._id}
																p={p}
															></Useport>)
													}
												</div>
											</TabPanel>
											<TabPanel>
												<div className="row container2">
													{
														portfolio.slice(2, 4).map(p =>
															<Useport
																key={p._id}
																p={p}
															></Useport>)
													}
												</div>
											</TabPanel>
											<TabPanel>
												<div className="row container2">
													{
														portfolio.slice(4, 6).map(p =>
															<Useport
																key={p._id}
																p={p}
															></Useport>)
													}
												</div>
											</TabPanel>
											<TabPanel>
												<div className="row container2">
													{
														portfolio.slice(6, 8).map(p =>
															<Useport
																key={p._id}
																p={p}
															></Useport>)
													}
												</div>
											</TabPanel>
										</Tabs>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;