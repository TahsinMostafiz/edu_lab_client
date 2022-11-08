import React from 'react';

const NodeJsBlog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        What is Node? How does that work?
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-5">
                    Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside 'script' tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-5">
                    Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                    </p>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-5">
                    Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
                    </p>
                    <img src="https://www.freecodecamp.org/news/content/images/2019/06/1_sYPllpcAZLHmpuQSRPuO0Q.png" alt="" />
                    <p>If you know Java, here's a little analogy.</p>
                </div>

                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                   
                    <p className="text-base text-gray-700 md:text-lg text-left mb-3">
                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    <br />
                    <br />
                    <span className='text-1xl font-bold'>Node.js basically works on two concept</span>
                    <br />
                    1. Asynchronous
                    <br />
                    2. Non-blocking I/O
                    </p>

                    <div className="my-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-2xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl text-left"
                    >
                        Non-blocking I/O : 
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-5">
                    Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                    </p>

                    <div className="my-4">
                    <p
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-2xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl text-left"
                    >
                        Asynchronous :
                    </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg text-left mb-5">
                    Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn't work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default NodeJsBlog;