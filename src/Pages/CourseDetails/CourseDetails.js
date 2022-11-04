import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {title, rating, total_student, price, consultant, image_url, details, _id} = course;
    return (
        <div>
           <h2>Details</h2> 
        </div>
    );
};

export default CourseDetails;