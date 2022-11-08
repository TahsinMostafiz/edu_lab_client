import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div >
            
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--RRy8OjMY--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/90it10pz1iyto951oilj.png"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="Published"
                        >
                            Published
                        </a>
                        <span className="text-gray-600">— 28 Dec 2021</span>
                        </p>
                        <p
                        
                        aria-label="Category"
                        title="What is CORS?"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200"
                        >
                        What is CORS?
                        </p>
                        <p className="mb-2 text-gray-700">
                        Understanding Cross Origin Resource Sharing (CORS)
                        </p>
                        <Link
                        to="/corsBlog"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-rose-400 hover:text-rose-800"
                        >
                        Learn more
                        </Link>
                    </div>
                    </div>

                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://process.filestackapi.com/cache=expiry:max/resize=width:700/ffjJzqMHSw2Uu3xVOvwe"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="Published"
                        >
                            Published
                        </a>
                        <span className="text-gray-600">— 21 Jan 2022</span>
                        </p>
                        <p
                        
                        aria-label="Category"
                        title="Firebase"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200"
                        >
                        Why are you using firebase?
                        </p>
                        <p className="mb-2 text-gray-700">
                        The Good and the Bad of Firebase Backend Services
                        </p>
                        <Link
                        to="/fireBaseBlog"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-rose-400 hover:text-rose-800"
                        >
                        Learn more
                        </Link>
                    </div>
                    </div>

                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C5612AQHUplMGIv3KDg/article-cover_image-shrink_720_1280/0/1645382397748?e=2147483647&v=beta&t=RBikKY7lOJL9jtse2JFrHVpfEqARNInaivao3n77SbQ"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="Published"
                        >
                            Published
                        </a>
                        <span className="text-gray-600">— 15 Feb 2022</span>
                        </p>
                        <p
                        
                        aria-label="Category"
                        title="Firebase"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200"
                        >
                        How does the private route work?
                        </p>
                        <p className="mb-2 text-gray-700">
                        Private Route, Public Route, and Restricted Route with React Router
                        </p>
                        <Link
                        to="/privetRouteBlog"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-rose-400 hover:text-rose-800"
                        >
                        Learn more
                        </Link>
                    </div>
                    </div>

                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDp1LAacv8tkp3CQV6GyNrzCPpF7_bfV-fsIp9ON2ChJNRerR3oREPMFJxahKXleSCx94&usqp=CAU"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="Published"
                        >
                            Published
                        </a>
                        <span className="text-gray-600">— 26 Feb 2022</span>
                        </p>
                        <p
                        
                        aria-label="Category"
                        title="Firebase"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200"
                        >
                        What is Node?
                        </p>
                        <p className="mb-2 text-gray-700">
                        Node.js is a JavaScript runtime environment. Sounds great, but what does that mean? How does that work?
                        </p>
                        <Link
                        to="/nodeBlog"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-rose-400 hover:text-rose-800"
                        >
                        Learn more
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;