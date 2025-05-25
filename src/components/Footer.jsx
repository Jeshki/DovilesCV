/// src/components/Footer.jsx
import React from 'react';
// Import Lucide icons
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

function Footer({ content }) {
    const currentYear = new Date().getFullYear();
    const facebookUrl = "https://www.facebook.com/dovile.miciukeviciute";
    const linkedinUrl = content.linkedInUrl || "https://www.linkedin.com/in/deividaschomicius/";

    return (
        <footer className="mt-12 md:mt-20 p-6 text-center bg-blue-100 dark:bg-blue-900 text-sm">
             <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-4">
                {content.email && (
                     <a href={`mailto:${content.email}`} className="flex items-center gap-1 text-blue-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                         <Mail size={16} /> {content.email} {/* Lucide Icon */}
                     </a>
                 )}
                 {content.phone && (
                     <span className="flex items-center gap-1 text-blue-800 dark:text-stone-200">
                         <Phone size={16} /> {content.phone} {/* Lucide Icon */}
                     </span>
                 )}
                 {content.location && (
                      <span className="flex items-center gap-1 text-blue-800 dark:text-stone-200">
                         <MapPin size={16} /> {content.location} {/* Lucide Icon */}
                     </span>
                 )}
                 <a
                    href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilis"
                    className="flex items-center gap-1 text-blue-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                 >
                    <Linkedin size={16} /> LinkedIn {/* Lucide Icon */}
                 </a>
                 <a
                    href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook profilis"
                    className="flex items-center gap-1 text-blue-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                 >
                    <Facebook size={16} /> Facebook {/* Lucide Icon */}
                 </a>
             </div>
            <p className="text-blue-700 dark:text-stone-300">&copy; {currentYear} {content.name}. {content.footerText}</p>
        </footer>
    );
}

export default Footer;