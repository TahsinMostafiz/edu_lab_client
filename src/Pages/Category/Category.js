import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import CourseCard from '../CourseCard/CourseCard';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div className='pt-10'>
            <div className="sm:px-4 md:px-10 lg:px-16">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 sm:col-span-12 md:col-span-3 lg:col-span-3 ">
                        <Categories></Categories>
                    </div>
                    <div className=" md:col-start-4 col-span-12">
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                            {
                                courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;