import React from 'react';

const FirebaseBlog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        What is Firebase?
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Firebase is a software development platform launched in 2011 by Firebase inc, and acquired by Google in 2014. Started as a realtime database, now it has 18 services (4 of them currently in beta), and dedicated APIs. The whole platform is a Backend-as-a-Service solution both for mobile and web-based applications that includes services for building, testing, and managing apps.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    BaaS solutions allow you to eliminate the need in managing backend databases and obtaining corresponding hardware. Instead, you can plug them into your app via dedicated APIs for each separate service. In the case of Firebase, there are 7 of them that cover all the spectrum of back-end technologies for an app. The list of platforms Firebase integrates with includes Android, iOS, Web, and Unity.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    But, there is a lot more to learn about the platform, as it includes various services to work with a managed backend. In the next section we'll provide a general look on each service available on Firebase platform.
                    </p>
                    <p className='text-left'><span className='font-bold text-1xl'>Categories</span> : Authentication, Marketing Attribution, Mobile Analytics, Mobile App Development, App Development</p>
                </div>

                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        Firebase Use cases?
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Create onboarding flows  developers can give users a quick, intuitive sign-in process using Firebase Authentication. They allow users to sign into their apps via their Google, Twitter, Facebook or GitHub accounts in less than five minutes. Developers can also track each step of their onboarding flows to enhance the user experience. Additionally, developers can use Google Analytics for Firebase to log events at each step of their onboarding flows, create funnels to determine where users are dropping off and use remote configuration to make changes to their apps to see how those changes affect conversions.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Customize a “welcome back” screen - developers can use personalization to give every user the best experience by customizing the initial screen based on a user's preferences, usage history, location or language. Developers can define audiences based, in part, on user behaviors and show targeted content to each audience.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Progressively roll out new features - developers can launch new features with minimal risk by first testing those features on a few users to see how they work and how users respond. Then, when developers are satisfied, they can roll out their apps to the rest of their users.
                    </p>
                </div>


                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        Firebase UI Authentication Method?
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Firebase UI Authentication is a way to add a complete sign-in system to our app, where Firebase provides user interface to them. Firebase UI provides a drop-in auth solution which is used to implement authentication on mobile devices and websites.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Firebase UI can be easily customized to fit with the rest of our app's visual style. It is open-source, so we are not constrained in modifying the user experience to meet our apps need.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    There are the following steps to use Firebase UI Authentication:
                    </p>
                    <ol className='text-left mb-5'>
                        <li className='text-1xl font-semibold'>Set up sign-in methods :</li>
                        <li> 1. For email address and password, phone number sign-in, and any identity providers.</li> 
                        <li className='mb-4'> 1.1 Enable authentication method in the firebase console</li>
                        <li> 2. We have to complete the configuration if anyone requires for identity providers.</li> 
                        <li> 2.1 Setting our OAuth redirect URL.</li>
                    </ol>
                    <ol className='text-left mb-5'>
                        <li className='text-1xl font-semibold'>Customize the sign-in UI :</li>
                        <li> 1. For customizing the sign-in and UI, we have to set some Firebase UI options or fork the code on GitHub.</li> 
                    </ol>
                    <ol className='text-left mb-5'>
                        <li className='text-1xl font-semibold'>To perform the sign-in flow, use Firebase UI :</li>
                        <li> 1. Import the Firebase UI library.</li>
                        <li> 2. Specify the sign-in method which we want to support.</li>
                        <li> 3. Initiate the Firebase UI sign-in flow. </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default FirebaseBlog;