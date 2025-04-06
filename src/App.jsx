// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Stiliai ir komponentai
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageFade from './components/PageFade';

// Puslapių komponentai
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Testimonials from './pages/Testimonials'; // Galima įjungti vėliau
// import Experience from './pages/Experience'; // Galima įjungti vėliau

// Turinys skirtingomis kalbomis
const content = {
    lt: {
        // Pagrindinė informacija
        name: 'Dovilė Miciukevičiūtė',
        title: 'Karjeros Konsultantė',
        email: 'dovile.mi@gmail.com',
        phone: '+370 622 84833',
        location: 'Kaunas',
        // Navigacija
        navHome: 'Pradžia',
        navAbout: 'Apie mane',
        // navExperience: 'Patirtis', // Raktas patirties puslapiui (jei bus)
        navContact: 'Kontaktai',
        // Bendri tekstai
        contactButton: 'Susisiekite',
        footerText: 'Visos teisės saugomos',
        notFound: '404 - Puslapis Nerastas',
        // Pradžios puslapis
        homeTitle: 'Sveiki atvykę!',
        homeContent: 'Profesionalios karjeros konsultacijos ir mokymai.',
        // Apie mane puslapis
        aboutTitle: 'Apie Mane',
        aboutMeIntro: 'Esu atsakinga, patikima karjeros srities specialistė, turinti patirties mokymų vedimo, konsultavimo, ES finansuojamų projektų koordinavimo, administracinio darbo srityse.',
        aboutMeExperience: 'Šiuo metu dirbu pedagoginį darbą pradinėse mokyklose. Gebu lengvai bendrauti su įvairaus amžiaus ir poreikių žmonėmis: nuo mokinių iki įsidarbinimo sunkumų patiriančių jaunuolių.',
        aboutMeQualities: 'Asmeninės savybės: turiu gerus planavimo, procesų valdymo, viešojo kalbėjimo įgūdžius. Esu komunikabili, empatiška, kūrybiška, nebijanti prisiimti atsakomybės, mokanti dirbti komandoje ir išvien su komanda! Darbe ypač praverčia prigimtinis darbštumas bei noras padaryti daugiau, nei yra tikimasi.',
        skillsTitle: 'Įgūdžiai',
        skillsList: [ 'Viešasis kalbėjimas', 'Komunikabilumas', 'Laiko planavimas', 'Pedagoginė patirtis', 'Darbas su įv. amžiaus grupėmis', 'Organizavimas ir koordinavimas', 'Atsakomybė', 'Kūrybiškumas ir idėjų generavimas', 'Problemų sprendimas', 'Streso valdymas', 'Administravimas', 'Duomenų valdymas', 'Vadyba', 'Derybos', 'Vadovavimas komandai', 'MS Office (Word, Excel, PowerPoint)' ],
        languagesTitle: 'Kalbos',
        languagesList: [ 'Anglų kalba (B2)', 'Rusų kalba (B1)' ],
        educationTitle: 'Išsilavinimas',
        educationList: [ { years: '2010-2012', degree: 'Karjeros projektavimo magistras', university: 'Vytauto Didžiojo universitetas' }, { years: '2003-2007', degree: 'Lietuvių filologijos bakalauras', university: 'Vilniaus universitetas' } ],
        experienceTitle: 'Darbo Patirtis',
        experienceList: [ { period: '2022-11 – dabar', title: 'Karjeros specialistė', company: 'Kauno švietimo inovacijų centras', description: 'Karjeros pamokų vedimas 1-4 klasių mokiniams, planavimas, užduočių kūrimas.'}, { period: '2019-09 – 2022-05', title: 'Karjeros konsultantė (ES projektas)', company: 'Užimtumo tarnyba', description: 'Grupiniai mokymai karjeros temomis, medžiagos ruošimas, administravimas, konsultavimas.'}, { period: '2017-04 – 2018-09', title: 'Lektorė', company: 'UAB "Inlinen"', description: 'Paskaitų ir praktinių užsiėmimų vedimas jaunimui.'}, { period: '2013 – 2015', title: 'Profesinio veiklinimo organizatorė / Karjeros konsultantė', company: 'Lietuvos mokinių neformaliojo švietimo centras', description: 'Darbas su mokiniais (5-12 kl.), paskaitos, vizitų organizavimas, vadovavimas specialistų grupei.'} ],
        // Kontaktų puslapis
        contactTitle: 'Susisiekite',
        contactIntro: 'Turite klausimų ar norite pasitarti dėl karjeros? Susisiekite Jums patogiu būdu arba raskite mane socialiniuose tinkluose.',
        directContactTitle: 'Tiesioginiai Kontaktai',
        socialMediaTitle: 'Socialiniai Tinklai',
    },
    en: {
        // Basic Info
        name: 'Dovilė Miciukevičiūtė',
        title: 'Career Consultant',
        email: 'dovile.mi@gmail.com',
        phone: '+370 622 84833',
        location: 'Kaunas',
        // Navigation
        navHome: 'Home',
        navAbout: 'About Me',
        // navExperience: 'Experience', // Key for experience page (if added)
        navContact: 'Contact',
        // Common Texts
        contactButton: 'Contact Me',
        footerText: 'All rights reserved',
        notFound: '404 - Not Found',
        // Home Page
        homeTitle: 'Welcome!',
        homeContent: 'Professional career consulting and training.',
        // About Page
        aboutTitle: 'About Me',
        aboutMeIntro: 'I am a responsible, reliable specialist in the field of career guidance with experience in training, consulting, coordinating EU-funded projects, and administrative work.',
        aboutMeExperience: 'Currently, I work as a teacher in primary schools. I can easily communicate with people of various ages and needs: from students to young people experiencing employment difficulties.',
        aboutMeQualities: 'Personal qualities: I have good planning, process management, and public speaking skills. I am communicative, empathetic, creative, not afraid to take responsibility, able to work in a team and together with a team! Natural diligence and a desire to do more than expected are particularly useful in my work.',
        skillsTitle: 'Skills',
        skillsList: [ 'Public Speaking', 'Communication', 'Time Management', 'Pedagogical Experience', 'Working with Various Age Groups', 'Organization & Coordination', 'Responsibility', 'Creativity & Idea Generation', 'Problem Solving', 'Stress Management', 'Administration', 'Data Management', 'Management', 'Negotiation', 'Team Leadership', 'MS Office (Word, Excel, PowerPoint)' ],
        languagesTitle: 'Languages',
        languagesList: [ 'English (B2)', 'Russian (B1)' ],
        educationTitle: 'Education',
        educationList: [ { years: '2010-2012', degree: 'Master\'s in Career Design', university: 'Vytautas Magnus University' }, { years: '2003-2007', degree: 'Bachelor\'s in Lithuanian Philology', university: 'Vilnius University' } ],
        experienceTitle: 'Work Experience',
        experienceList: [ { period: 'Nov 2022 – Present', title: 'Career Specialist', company: 'Kaunas Education Innovation Center', description: 'Conducting career lessons for grades 1-4, planning, creating tasks.'}, { period: 'Sep 2019 – May 2022', title: 'Career Consultant (EU Project)', company: 'Employment Service', description: 'Group training on career topics, material preparation, administration, consulting.'}, { period: 'Apr 2017 – Sep 2018', title: 'Lecturer', company: 'UAB "Inlinen"', description: 'Conducting lectures and practical sessions for youth.'}, { period: '2013 – 2015', title: 'Vocational Guidance Organizer / Career Consultant', company: 'Lithuanian Centre of Non-formal Youth Education', description: 'Working with students (grades 5-12), lectures, organizing visits, leading a team of specialists.'} ],
        // Contact Page
        contactTitle: 'Get in Touch',
        contactIntro: 'Have questions or want to discuss your career? Contact me through your preferred method or find me on social media.',
        directContactTitle: 'Direct Contacts',
        socialMediaTitle: 'Social Media',
    },
};

function App() {
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('appLang');
        const browserLang = navigator.language.split('-')[0];
        return savedLang || (browserLang === 'lt' ? 'lt' : 'en');
    });

    const c = content[lang] || content.en;
    const location = useLocation();

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem('appLang', lang);
    }, [lang]);

    return (
        // <<< Žalios temos pagrindinės fono ir teksto spalvos >>>
        <div className="min-h-screen bg-white dark:bg-green-950 text-gray-900 dark:text-green-100 flex flex-col font-sans">
            <Header lang={lang} setLang={setLang} content={c} />
            <main className="p-4 md:p-8 flex-grow container mx-auto">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname + lang}>
                        {/* Maršrutai */}
                        <Route path="/" element={<PageFade key="home"><Home content={c} /></PageFade>} />
                        <Route path="/about" element={<PageFade key="about"><About content={c} /></PageFade>} />
                        <Route path="/contact" element={<PageFade key="contact"><Contact content={c} /></PageFade>} />
                        <Route path="*" element={<PageFade key="notfound"><h1 className="text-3xl text-center mt-20 font-serif">{c.notFound}</h1></PageFade>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer content={c} />
        </div>
    );
}

export default App;