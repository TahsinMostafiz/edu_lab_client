import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='pt-10'>
            <div className="px-4 md:px-10 lg:px-16">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-span-12 md:col-span-3 lg:col-span-3 ">
                        <Categories></Categories>
                    </div>
                    <div className=" md:col-start-4 col-span-12">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            {
                                allCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;