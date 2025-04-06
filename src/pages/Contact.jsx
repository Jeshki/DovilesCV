// src/pages/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Contact({ content }) {
  const facebookUrl = "https://www.facebook.com/dovile.miciukeviciute";
  const linkedinUrl = "https://www.linkedin.com/in/dovile-miciukeviciute/"; // <-- PAKEISTI!

  return (
    <div className="mt-10 max-w-3xl mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold font-serif mb-6 text-center text-gray-900 dark:text-green-100 uppercase">
        {content.contactTitle || 'Kontaktai'}
      </h2>
      <p className="text-center text-gray-700 dark:text-green-200 mb-10">
        {content.contactIntro || 'Turite klausimų ar norite pasitarti? Susisiekite Jums patogiu būdu.'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tiesioginiai Kontaktai */}
        {/* <<< Žalios temos kortelė >>> */}
        <div className="bg-white dark:bg-green-900 p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-green-100">{content.directContactTitle || 'Tiesioginiai Kontaktai'}</h3>
          <div className="space-y-4">
            {content.email && (
              <a href={`mailto:${content.email}`} className="flex items-center gap-3 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                <FaEnvelope className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{content.email}</span>
              </a>
            )}
            {content.phone && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-green-200">
                <FaPhone className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{content.phone}</span>
              </div>
            )}
            {content.location && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-green-200">
                <FaMapMarkerAlt className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{content.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Socialiniai Tinklai */}
        {/* <<< Žalios temos kortelė >>> */}
        <div className="bg-white dark:bg-green-900 p-4 md:p-6 rounded-lg shadow">
           <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-green-100">{content.socialMediaTitle || 'Socialiniai Tinklai'}</h3>
           <div className="space-y-4">
             <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                <FaLinkedin className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" /> {/* Pakeista spalva */}
                <span>LinkedIn</span>
             </a>
             <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                <FaFacebook className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" /> {/* Pakeista spalva */}
                <span>Facebook</span>
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;