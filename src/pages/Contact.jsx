// src/pages/Contact.jsx
import React from 'react';
// Import Lucide icons
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

function Contact({ content }) {
  const facebookUrl = "https://www.facebook.com/deividas.chomicius";
  const linkedinUrl = content.linkedInUrl || "https://www.linkedin.com/in/deividaschomicius/";

  return (
    <div className="mt-10 max-w-3xl mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold font-serif mb-6 text-center text-gray-900 dark:text-stone-100 uppercase">
        {content.contactTitle || 'Kontaktai'}
      </h2>
      <p className="text-center text-gray-700 dark:text-stone-200 mb-10">
        {content.contactIntro || 'Turite klausimų ar norite pasitarti? Susisiekite Jums patogiu būdu.'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-blue-900 p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-stone-100">{content.directContactTitle || 'Tiesioginiai Kontaktai'}</h3>
          <div className="space-y-4">
            {content.email && (
              <a href={`mailto:${content.email}`} className="flex items-center gap-3 text-gray-700 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Lucide Icon */}
                <span>{content.email}</span>
              </a>
            )}
            {content.phone && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-stone-200">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Lucide Icon */}
                <span>{content.phone}</span>
              </div>
            )}
             {content.phoneUK && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-stone-200">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Lucide Icon */}
                <span>{content.phoneUK}</span>
              </div>
            )}
            {content.location && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-stone-200">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Lucide Icon */}
                <span>{content.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-blue-900 p-4 md:p-6 rounded-lg shadow">
           <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-stone-100">{content.socialMediaTitle || 'Socialiniai Tinklai'}</h3>
           <div className="space-y-4">
             <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Lucide Icon */}
                <span>LinkedIn</span>
             </a>
             {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                    <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Lucide Icon */}
                    <span>Facebook</span>
                </a>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;