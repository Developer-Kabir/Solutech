import React from 'react';
import { Link } from 'react-router-dom';

const Useport = ({ p }) => {

    return (
        <div className='col-lg-3 col-md-6 col-xs-12 col-sm-12'>
            <div class="single_protfolio">
                <div class="prot_thumb">
                    <img src={p.picture} alt="" />
                    <div class="prot_content">
                        <div class="prot_content_inner">
                            <div class="picon">
                                <Link class="portfolio-icon venobox vbox-item" data-gall="myportfolio" to="/portfolio"><i class="fas fa-arrows-alt"></i></Link>
                            </div>
                            <h3><Link to="/portfolio">{p.projectNo}</Link></h3>
                            <p><span class="category-item-p">{p.Category}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Useport;