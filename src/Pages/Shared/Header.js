import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo192.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const {user} = useContext(AuthContext);
    return (
        <div>
            {/* className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8' */}
            <div class="bg-gray-200 sm:px-5 md:px-10 lg:px-16 py-3">
            <div class="relative flex items-center justify-between">
                <Link rel="noopener noreferrer"to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={logo} alt="logo" className='w-5' />
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-700 uppercase'>Edu Lab</span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                        <Link
                            to="/home"
                            aria-label="home"
                            title="home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                        >
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/courses"
                            aria-label="Courses"
                            title="Courses"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                        >
                            Courses
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/faq"
                            aria-label="FAQ"
                            title="FAQ"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                        >
                            FAQ
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                        >
                            Blog
                        </Link>
                        </li>
                        <li>
                            <Link
                            to="/login"
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                            >
                            Sign in
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/register"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition text-white duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                            >
                            Sign up
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/user"
                            aria-label="User"
                            title="User"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                            >
                            {user?.displayName}
                            </Link>
                        </li>
                </ul>
                
                <div class="lg:hidden">
                <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div class="absolute top-0 left-0 w-full">
                    <div class="p-5 bg-white border rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                        <div>
                            <Link rel="noopener noreferrer"to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                            <img src={logo} alt="logo" className='w-5' />
                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-700 uppercase'>Edu Lab</span>
                            </Link>
                        </div>
                        <div>
                            <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                />
                            </svg>
                            </button>
                        </div>
                        </div>
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                <Link
                                    to="/home"
                                    aria-label="Home"
                                    title="Home"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                                >
                                    Home
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="/courses"
                                    aria-label="Courses"
                                    title="Courses"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                                >
                                    Courses
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="/faq"
                                    aria-label="FAQ"
                                    title="FAQ"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                                >
                                    FAQ
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="/blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                                >
                                    Blog
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="/login"
                                    aria-label="Sign in"
                                    title="Sign in"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
                                >
                                    Sign in
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="/register"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Sign up
                                </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default Header;