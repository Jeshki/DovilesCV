// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkToggle from './DarkToggle';
// Import Lucide icons
import { Home, User, Mail } from 'lucide-react';
// Keep flag-icons import if you still use it for flags
import 'flag-icons/css/flag-icons.min.css';

function Header({ lang, setLang, content }) {
    return (
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-blue-100 dark:bg-blue-900 shadow-md gap-y-2">
            <h1 className="text-xl font-bold text-gray-900 dark:text-stone-100 uppercase">{content.name}</h1>
            <nav className="flex flex-wrap items-center gap-x-2 md:gap-x-4 gap-y-1">
                <NavLink
                    to="/"
                    className={({ isActive }) => `flex items-center gap-1 uppercase text-gray-700 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors ${isActive ? 'font-bold text-blue-700 dark:text-stone-100' : ''}`}
                >
                    <Home className="mr-0.5" size={18} /> {/* Lucide Icon */}
                    {content.navHome}
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => `flex items-center gap-1 uppercase text-gray-700 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors ${isActive ? 'font-bold text-blue-700 dark:text-stone-100' : ''}`}
                >
                    <User className="mr-0.5" size={18} /> {/* Lucide Icon */}
                    {content.navAbout}
                </NavLink>
                 <NavLink
                    to="/contact"
                    className={({ isActive }) => `flex items-center gap-1 uppercase text-gray-700 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors ${isActive ? 'font-bold text-blue-700 dark:text-stone-100' : ''}`}
                >
                    <Mail className="mr-0.5" size={18} /> {/* Lucide Icon */}
                    {content.navContact}
                </NavLink>
                <div className="flex items-center gap-2 ml-2 border-l border-blue-300 dark:border-blue-700 pl-2 flex-shrink-0">
                     <button
                        onClick={() => setLang('lt')}
                        className={`px-2 py-1.5 rounded text-gray-800 dark:text-stone-100 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors ${lang === 'lt' ? 'font-bold bg-blue-200 dark:bg-blue-700' : ''}`}
                        aria-label="Pakeisti kalbą į lietuvių"
                    >
                        <i className="fi fi-lt inline-block mr-1"></i> <span className="hidden md:inline">LT</span>
                     </button>
                     <button
                        onClick={() => setLang('en')}
                        className={`px-2 py-1.5 rounded text-gray-800 dark:text-stone-100 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors ${lang === 'en' ? 'font-bold bg-blue-200 dark:bg-blue-700' : ''}`}
                        aria-label="Switch language to English"
                    >
                        <i className="fi fi-gb inline-block mr-1"></i> <span className="hidden md:inline">EN</span>
                     </button>
                    <DarkToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;