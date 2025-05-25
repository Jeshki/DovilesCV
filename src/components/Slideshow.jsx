// src/components/Slideshow.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import Lucide icons
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Slideshow({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-md mx-auto mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '50%', paddingBottom: '50%', height: 0 }}>
                <AnimatePresence initial={false} custom={currentIndex}>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slideshow image ${currentIndex + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            </div>

            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-blue-800 p-2 rounded-full shadow-md text-blue-700 dark:text-stone-100 hover:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none transition-colors"
                aria-label="Previous image"
            >
                <ChevronLeft size={20} /> {/* Lucide Icon */}
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-blue-800 p-2 rounded-full shadow-md text-blue-700 dark:text-stone-100 hover:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none transition-colors"
                aria-label="Next image"
            >
                <ChevronRight size={20} /> {/* Lucide Icon */}
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-700 dark:bg-stone-100' : 'bg-gray-300 dark:bg-blue-600'} transition-colors`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;