// src/components/DarkToggle.jsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

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
            // <<< Žalios temos DarkToggle spalvos >>>
            className="p-2 rounded-md bg-green-200 dark:bg-green-800 hover:bg-green-300 dark:hover:bg-green-700 transition-colors duration-200"
            aria-label={dark ? "Aktyvuoti šviesų režimą" : "Aktyvuoti tamsų režimą"}
        >
            {/* Mėnulio ikonai neutralesnė spalva */}
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-400" />}
        </button>
    );
}

export default DarkToggle;