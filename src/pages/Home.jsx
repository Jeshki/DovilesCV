// src/pages/Home.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Home({ content }) {
    return (
        <div className="text-center mt-10 flex flex-col items-center px-4">
            <img
                src="/dovile.jpg"
                alt={content.name}
                // <<< Žalios temos border spalva >>>
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mb-8 shadow-lg border-4 border-white dark:border-green-800"
                onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3Ctext x='50' y='50' font-size='10' fill='%23ffffff' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E"; }}
            />
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gray-900 dark:text-green-100 uppercase">
                 {content.homeTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-green-200 max-w-xl mx-auto"> {/* Pakeista teksto spalva */}
                {content.homeContent}
            </p>
             <a
                 href="/about"
                 // <<< Žalios temos mygtuko spalvos >>>
                 className="mt-8 px-6 py-2 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg dark:bg-green-500 dark:hover:bg-green-600 transition duration-300 shadow hover:shadow-md uppercase">
                 Sužinoti daugiau
                 <FaArrowRight />
             </a>
        </div>
    );
}

export default Home;