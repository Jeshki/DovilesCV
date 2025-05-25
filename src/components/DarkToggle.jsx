// src/components/DarkToggle.jsx
import React, { useState, useEffect } from 'react';
// Import Lucide icons
import { Sun, Moon } from 'lucide-react';

function DarkToggle() {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme === 'dark';
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    function toggleDark() {
        setDark(!dark);
    }

    return (
        <button
            onClick={toggleDark}
            className="p-2 rounded-md bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 transition-colors duration-200"
            aria-label={dark ? "Aktyvuoti šviesų režimą" : "Aktyvuoti tamsų režimą"}
        >
            {/* Lucide Icons */}
            {dark ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-400" size={20} />}
        </button>
    );
}

export default DarkToggle;