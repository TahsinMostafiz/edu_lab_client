import React from 'react';

const CorsBlog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        What is CORS?
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                    Cross-origin resource sharing (CORS) is a mechanism that allows a client application to request restricted resources hosted on server from a different origin. These resources may include; web fonts, videos, scripts, iframe, images and stylesheets. By default, client applications making AJAX requests are only allowed to request resources that live on the same origin as the location where the client application is running.CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. If an application running on different domain tries to make a XMLHttpRequest to a different domain, it will be blocked by same-origin policy.
                    It extends the same-origin policy and offers freedom and functionality than simply same-origin requests and it is more secured.
                    Poor configuration & implementation of CORS policy could lead to data access denial, data theft and potential cross-domain attacks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CorsBlog;