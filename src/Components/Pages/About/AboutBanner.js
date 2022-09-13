import React from 'react';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
    return (
        <div>
            <div class="breadcumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 txtc  text-center ccase">
                            <div class="brpt">
                                <h2>About</h2>
                            </div>
                            <div class="breadcumb-inner">
                                <ul>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><i class="fas fa-angle-right"></i></li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutBanner;