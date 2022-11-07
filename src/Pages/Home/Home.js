import React from 'react';
import { Link } from 'react-router-dom';
import homeBg from '../../Assets/home-bg.jpg';

const Home = () => {
    return (
        <div className='py-7'>
            <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        <span className="inline-block text-rose-400">Edu Lab </span> is a
                        <br className="hidden md:block" />
                        community for
                        creative people.
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Learn from expert professionals and join the largest online community for creatives.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                       to="/courses"
                        className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none"
                        >
                        Get Start
                        </Link>
                        <Link
                        to="/blog"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-rose-700"
                        >
                        Learn more
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src={homeBg}
                    alt="BG"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;