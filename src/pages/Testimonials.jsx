import React from 'react';

// Priimame 'content' objektą
function Testimonials({ content }) {
    return (
        <div className="text-center mt-10">
             {/* Naudojame tekstus iš content */}
            <h2 className="text-2xl font-bold mb-4">{content.testimonialsTitle}</h2>
            <p>{content.testimonialsContent}</p>
             {/* Čia galėtų būti tikrų atsiliepimų sąrašas */}
        </div>
    );
}

export default Testimonials;