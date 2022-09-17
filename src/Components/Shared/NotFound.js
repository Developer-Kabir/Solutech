import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='row container2'>
            <img className='col' src="https://weeblytutorials.com/wp-content/uploads/2017/05/Weebly-404-Page-Not-Found-Error1.png" alt=""/>
            <h2 className='col mt-5 pt-5'>There are no page like to that please go back to <Link to="/">Home</Link></h2>
        </div>
    );
};

export default NotFound;