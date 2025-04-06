/// src/components/Footer.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer({ content }) {
    const currentYear = new Date().getFullYear();
    // Nuorodos (įsitikinkite, kad LinkedIn nuoroda teisinga)
    const facebookUrl = "https://www.facebook.com/dovile.miciukeviciute";
    const linkedinUrl = "https://www.linkedin.com/in/tavo-profilis"; // <-- PAKEISTI!

    return (
        // <<< Pakeistas Footer fonas ir teksto spalvos >>>
        <footer className="mt-12 md:mt-20 p-6 text-center bg-green-100 dark:bg-green-900 text-sm"> {/* Naujas fonas: bg-green-100 */}
            {/* Kontaktai ir socialiniai tinklai */}
             <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-4">
                {/* El. Paštas */}
                {content.email && (
                     <a href={`mailto:${content.email}`} className="flex items-center gap-1 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors"> {/* Pakeista šviesaus režimo teksto spalva */}
                         <FaEnvelope /> {content.email}
                     </a>
                 )}
                 {/* Telefonas */}
                 {content.phone && (
                     <span className="flex items-center gap-1 text-green-800 dark:text-green-200"> {/* Pakeista šviesaus režimo teksto spalva */}
                         <FaPhone /> {content.phone}
                     </span>
                 )}
                 {/* Vietovė */}
                 {content.location && (
                      <span className="flex items-center gap-1 text-green-800 dark:text-green-200"> {/* Pakeista šviesaus režimo teksto spalva */}
                         <FaMapMarkerAlt /> {content.location}
                     </span>
                 )}
                 {/* LinkedIn */}
                 <a
                    href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilis"
                    className="flex items-center gap-1 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors" // Pakeista šviesaus režimo teksto spalva
                 >
                    <FaLinkedin /> LinkedIn
                 </a>
                 {/* Facebook */}
                 <a
                    href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook profilis"
                    className="flex items-center gap-1 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors" // Pakeista šviesaus režimo teksto spalva
                 >
                    <FaFacebook /> Facebook
                 </a>
             </div>
            {/* Copyright */}
            <p className="text-green-700 dark:text-green-300">&copy; {currentYear} {content.name}. {content.footerText}</p> {/* Pakeistos teksto spalvos */}
        </footer>
    );
}

export default Footer;