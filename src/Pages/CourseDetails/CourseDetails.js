import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';

const CourseDetails = () => {
    const course = useLoaderData();
    const {title, price, image_url, details, Course_Curriculum, _id} = course;


    const pdfDownload = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');

        // doc.addImage(image_url, 'JPEG', 60, 20, 300, 350)
        doc.text(60,20, `${title}`)
        doc.text(60,40, `${price}$`)
        doc.text(60,60, `${_id}`)


        doc.save('course.pdf')
    }
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                <p onClick={pdfDownload} className="inline-block px-3 py-2 cursor-pointer mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                    Download PDF <FaDownload className='inline-block'></FaDownload>
                </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                    <defs>
                        <pattern
                        id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                        >
                        <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                        width="52"
                        height="24"
                    />
                    </svg>
                    <span className="relative"> {title}</span>
                </span>{' '}
                   
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                {details}
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                <div className="flex">
                    <div>
                        <h6 className="mb-4 font-bold leading-5 text-2xl">
                        Course Curriculum
                        </h6>
                        
                        <div className="grid lg:grid-cols-2 gap-2">
                            {
                                Course_Curriculum.map((curr, pos) => <p key={pos} className="text-sm text-gray-900 font-semibold">
                                {curr}
                                </p>)
                            }
                        </div>
                        <hr className="w-full my-6 border-gray-300" />
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                <img
                    className="object-cover w-full h-96 col-span-2 rounded shadow-lg"
                    src={image_url}
                    alt={title}
                />
                </div>
            </div>
            <div className="p-6 py-12 bg-rose-400 rounded text-yellow-50 md:mt-5">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-4xl tracking-tighter font-bold">Course fee : ${price}
                        </h2>
                        <Link to={`/checkout/${_id}`} className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-rose-400">Get premium access</Link>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default CourseDetails;