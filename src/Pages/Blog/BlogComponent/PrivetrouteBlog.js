import React from 'react';

const PrivetrouteBlog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        How does the private route work?
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-5">
                    React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple application with following components:
                    <br />
                    1. Home: a public route that everyone can access to.
                    <br />
                    <br />
                    2. Dashboard: a private route that only authenticated user can access to.
                    <br />
                    <br />
                    3. Sign-in: a restricted route that unauthenticated user can see. To explain more, we don't want to show the sign-in page after logged in to the site. If the authorised user goes to the sign-in page, we will redirect to dashboard page.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                        <span className='text-2xl font-bold'>Privet Route</span><br />
                    PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                    </p>

                    
                    
                </div>
            </div>
        </div>
    );
};

export default PrivetrouteBlog;