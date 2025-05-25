// src/pages/Home.jsx
import React from 'react';
// Import Lucide icon
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow'; // Import Slideshow component

function Home({ content }) {
    const slideshowImages = [
        "/deivis.jpg",
        "/deivis-5.jpg",
    ];

    return (
        <div className="text-center mt-10 flex flex-col items-center px-4">
            <Slideshow images={slideshowImages} interval={5000} />

            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gray-900 dark:text-stone-100 uppercase">
                 {content.homeTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-stone-200 max-w-xl mx-auto">
                {content.homeContent}
            </p>
             <Link
                   to="/about"
                   className="mt-8 px-6 py-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 shadow hover:shadow-md uppercase"
             >
                 Sužinoti daugiau
                 <ArrowRight size={18} />
             </Link>
        </div>
    );
}

export default Home;