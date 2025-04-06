// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkToggle from './DarkToggle';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'; // Naudojamos ikonos

function Header({ lang, setLang, content }) {
    return (
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-green-100 dark:bg-green-900 shadow-md gap-y-2">
            {/* Vardas (paliekame įprastą registą) */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-green-100 uppercase">{content.name}</h1>

            {/* Navigacija */}
            <nav className="flex flex-wrap items-center gap-x-2 md:gap-x-4 gap-y-1">
                {/* Navigacijos nuorodos su uppercase klase */}
                <NavLink
                    to="/"
                    // <<< Pridėta 'uppercase' klasė >>>
                    className={({ isActive }) => `flex items-center gap-1 uppercase text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                >
                    <FaHome className="mr-0.5" /> {/* Sumažintas tarpas prie ikonos */}
                    {content.navHome}
                </NavLink>
                <NavLink
                    to="/about"
                     // <<< Pridėta 'uppercase' klasė >>>
                    className={({ isActive }) => `flex items-center gap-1 uppercase text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                >
                    <FaUser className="mr-0.5" /> {/* Sumažintas tarpas */}
                    {content.navAbout}
                </NavLink>
                 <NavLink
                    to="/contact"
                     // <<< Pridėta 'uppercase' klasė >>>
                    className={({ isActive }) => `flex items-center gap-1 uppercase text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                >
                    <FaEnvelope className="mr-0.5" /> {/* Sumažintas tarpas */}
                    {content.navContact}
                </NavLink>

                {/* Kalbos keitimas ir tamsus režimas */}
                <div className="flex items-center gap-2 ml-2 border-l border-green-300 dark:border-green-700 pl-2 flex-shrink-0">
                    {/* Mygtukai (paliekame kaip buvo) */}
                     <button
                        onClick={() => setLang('lt')}
                        className={`px-2 py-1.5 rounded text-gray-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 transition-colors ${lang === 'lt' ? 'font-bold bg-green-200 dark:bg-green-700' : ''}`}
                        aria-label="Pakeisti kalbą į lietuvių"
                    >
                        🇱🇹 <span className="hidden md:inline">LT</span>
                     </button>
                     <button
                        onClick={() => setLang('en')}
                        className={`px-2 py-1.5 rounded text-gray-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 transition-colors ${lang === 'en' ? 'font-bold bg-green-200 dark:bg-green-700' : ''}`}
                        aria-label="Switch language to English"
                    >
                        🇬🇧 <span className="hidden md:inline">EN</span>
                     </button>
                    <DarkToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;