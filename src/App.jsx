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
//import Testimonials from './pages/Testimonials'; // Galima įjungti vėliau
//import Experience from './pages/Experience'; // Galima įjungti vėliau

// Turinys skirtingomis kalbomis
const content = {
    lt: {
        // Pagrindinė informacija
        name: 'Deividas Chomičius',
        title: 'Odontologas',
        email: 'chomdeiv@gmail.com',
        phone: '+370 675 37973 (LT)',
        phoneUK: '+44 780888078 (UK)',
        location: 'Kaunas',
        linkedInUrl: 'https://www.linkedin.com/in/deividaschomicius/',
        dob: '1984-01-26',
        driversLicense: 'Taip',
        nationality: 'Lietuvis',
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
        homeContent: 'Esu kvalifikuotas odontologas, pasirengęs teikti profesionalias odontologijos paslaugas ir prisidėti prie jūsų šypsenos sveikatos.',
        // Apie mane puslapis
        aboutTitle: 'Apie Mane',
        aboutMeIntro: 'Gyd. odontologas Deividas Chomičius GDC numeris: 320309. Odontologija man – ne tik profesija. Tai nuoširdus atsidavimas žmonėms, jų sveikatai ir pasitikėjimui savimi. Tikiu, kad kiekvienas pacientas nusipelno ne tik kokybiško gydymo, bet ir žmogiško požiūrio – dėmesio, pagarbos ir aiškaus bendravimo.Mano profesinis kelias grįstas nuolatiniu tobulėjimu ir tikslumu. Nuolatos gilinu žinias, dalyvauju praktiniuose kursuose ir seku naujausias odontologijos mokslo tendencijas – visa tai tam, kad galėčiau pasiūlyti šiuolaikiškus, saugius ir veiksmingus sprendimus kiekvienam pacientui. Nuo kasdienių profilaktinių patikrinimų iki sudėtingesnių procedūrų – kiekvienas gydymo etapas man yra svarbus.Pacientai dažnai prisipažįsta bijantys vizito pas odontologą. Mano tikslas – tai pakeisti. Kuriu aplinką, kurioje žmonės jaučiasi saugiai, suprasti ir gerbiami. Pas mane niekas nebūna skubinama ar teisiama – tik nuoširdus dialogas ir bendras darbas dėl geresnės sveikatos. Pasitikėjimas – tai, ką vertinu labiausiai. Todėl kiekvieną pacientą priimu ne tik kaip pacientą, bet kaip žmogų, kurio sveikata man rūpi. Kurkime sveikesnę ir keliančią pasitikėjimą šypseną – kartu.',
        personalSkillsTitle: 'Asmeniniai Įgūdžiai',
        personalSkillsList: [ 'Dėmesys detalėms', 'Bendravimo įgūdžiai', 'Empatija ir užuojauta', 'Problemų sprendimas', 'Laiko valdymas', 'Gebėjimas prisitaikyti / keistis', 'Darbas komandoje' ],
        professionalInterestsTitle: 'Profesiniai Interesai',
        professionalInterestsList: [ 'Prevencinė odontologija', 'Atkuriamoji odontologija', 'Burnos chirurgija', 'Dantų protezavimas', 'Dantų radiologija', 'Bendravimas su pacientais ir jų švietimas', 'Skubioji pagalba' ],
        languagesTitle: 'Kalbos',
        languagesList: [ 'Lietuvių', 'Anglų', 'Rusų' ],
        educationTitle: 'Akademinė Kvalifikacija',
        educationList: [
            { years: '2019 – 2024', degree: 'Magistro laipsnis, Odontologija', university: 'Lietuvos sveikatos mokslų universitetas, Lietuva' },
            { years: '2011 – 2014', degree: 'Optikas, Optika', university: 'City and Islington College, Jungtinė Karalystė' },
            { years: '2003 – 2007', degree: 'Bakalauro laipsnis, Vadyba ir verslo administravimas', university: 'ISM Vadybos ir ekonomikos universitetas, Lietuva' },
            { years: '1991 – 2003', degree: 'Vidurinis išsilavinimas', university: 'S. Dariaus ir S. Girėno gimnazija, Lietuva' }
        ],
        experienceTitle: 'Darbo Patirtis',
        experienceList: [
            { period: 'Spalis 2024 - dabar', title: 'Odontologas', company: 'UK Smiles (Jungtinė Karalystė)' },
            { period: 'Liepa 2024 - dabar, Liepa - Rugpjūtis 2023, Liepa - Rugpjūtis 2022', title: 'Optikas', company: 'Taylor-West & Co. Opticians (Jungtinė Karalystė)' },
            { period: 'Gegužė - Birželis 2024', title: 'Odontologo asistentas (praktika)', company: 'Šypsenos akademija' },
            { period: 'Balandis - Birželis 2024, Gruodis 2022 - Sausis 2023', title: 'Odontologo asistentas (praktika)', company: '"SB dentų klinika" (DPC)' },
            { period: 'Vasaris - Kovas 2024', title: 'Odontologas (internatūra)', company: 'Kauno miesto poliklinika (Šilainiai)' },
            { period: 'Lapkritis 2023 - Kovas 2024', title: 'Odontologas (papildomas praktika)', company: 'Lietuvos Sveikatos Mokslų Universitetas (burnos chirurgijos skyrius)' },
            { period: 'Lapkritis - Gruodis 2023', title: 'Odontologo asistentas (papildoma praktika)', company: '"33 dantys"' },
            { period: 'Liepa - Rugsėjis 2021', title: 'Optikas', company: 'GlassesON Optika' },
            { period: 'Birželis - Rugpjūtis 2020', title: 'Pagalbinis darbininkas skubios pagalbos skyriuje', company: 'Respublikinė Kauno Ligoninė' },
            { period: 'Sausis - Vasaris 2020', title: 'Odontologo asistentas (papildoma praktika)', company: '„Imperial Denta Group“' },
            { period: 'Balandis - Rugsėjis 2019', title: 'Optikas', company: 'Whitby and Co. Opticians (Jungtinė Karalystė)' },
            { period: 'Gruodis 2018 - Gegužė 2019', title: 'Optikas (savanoris)', company: 'Vision Care for Homeless People Opticians (Jungtinė Karalystė)' },
            { period: 'Birželis 2015 - Kovas 2019', title: 'Optikas', company: 'Specs of Kensington Opticians (Jungtinė Karalystė)' },
            { period: 'Kovas 2010 - Gegužė 2015', title: 'Optikas', company: 'Vision Express Opticians (Jungtinė Karalystė)' }
        ],
        moreExperience: 'Daugiau darbo patirties pateikiama paprašius arba LinkedIn profilyje.',
        dentistDutiesTitle: 'Odontologo Papildomos Praktikos ir Internatūros Pareigos',
        dentistDutiesList: [
            'Pagalba pacientų priežiūrai: Pagalba dantų specialistams tyrimų ir procedūrų metu, įskaitant medžiagų ir instrumentų paruošimą.',
            'Pirminių tyrimų atlikimas: Pirminių paciento įvertinimų atlikimas, įskaitant medicininės istorijos rinkimą, pagrindinių burnos tyrimų atlikimą ir duomenų fiksavimą prižiūrint specialistui.',
            'Diagnostikos metodų mokymasis.',
            'Susipažinimas su įvairiomis specialybėmis: Stebėjimas specialistų tokiose srityse kaip periodontologija, burnos chirurgija ir protezavimas, siekiant suprasti skirtingus gydymo metodus ir technikas.',
            'Pacientų švietimas.',
            'Infekcijos kontrolės praktika.',
            'Pagalba odontologinėse procedūrose: Dalyvavimas praktinėse procedūrose, tokiose kaip plombavimas, traukimas, tiesiogiai prižiūrint specialistui.',
            'Gydymo planų kūrimas: Bendradarbiavimas su mentoriais kuriant ir aptariant gydymo planus, pritaikytus individualiems paciento poreikiams.',
            'Burnos chirurgijos stebėjimas ir asistavimas: Įgyti praktinės patirties stebint operacijas, padedant ruošti pacientus ir suprantant chirurgines procedūras.',
            'Dalyvavimas komandos susitikimuose: Dalyvavimas atvejų aptarimuose, gydymo planavimo sesijose ir komandos susitikimuose, siekiant pagerinti tarpdisciplininės priežiūros supratimą.',
            'Pacientų įrašų dokumentavimas: Tiksliai tvarkyti ir atnaujinti pacientų įrašus, įskaitant gydymo pastabas, pažangos ataskaitas ir tolesnės priežiūros instrukcijas.',
            'Bendravimo įgūdžių tobulinimas: Praktikuoti efektyvų bendravimą su pacientais, kolegomis ir vadovais, siekiant sukurti ryšį ir palengvinti sklandų pacientų valdymą.'
        ],
        dispensingOpticianDutiesTitle: 'Optiko Pareigos',
        dispensingOpticianDutiesList: [
            'Konsultavimas dėl akinių pasirinkimo: Pagalba pacientams pasirenkant tinkamus akinius pagal jų receptą, gyvenimo būdą, veido bruožus ir asmeninius pageidavimus.',
            'Optinių receptų interpretavimas: Tiksliai interpretuoti optometrininkų ar oftalmologų pateiktus receptus, siekiant užtikrinti, kad pacientai gautų tinkamus lęšius ir akinius.',
            'Akinių matavimas ir pritaikymas.',
            'Lęšių variantų rekomendavimas.',
            'Akinių reguliavimas ir taisymas.',
            'Konsultavimas akių sveikatos klausimais: Šviesti pacientus apie tinkamą akinių priežiūrą, akių sveikatos praktiką ir reguliarių akių tyrimų svarbą.',
            'Užsakymų ir atsargų valdymas.',
            'Klientų aptarnavimas: Teikti aukštos kokybės klientų aptarnavimą, spręsti pacientų problemas ir išspręsti bet kokias su akiniais ar receptais susijusias problemas.',
            'Administracinės pareigos.',
            'Atitiktis ir standartai: Užtikrinti, kad visa veikla atitiktų atitinkamus reglamentus ir standartus, nustatytus Bendrosios optikos tarybos (GOC) ir kitų profesinių organizacijų.',
            'Pagalba kasdienėje praktikos veikloje.',
            'Šie bendri įgūdžiai ir pareigos leidžia sklandžiai pereiti nuo optiko prie odontologo pareigų, nes abu vaidmenys orientuoti į detalią, į pacientą orientuotą priežiūrą.'
        ],
        conferencesTitle: 'Dalyvauta Konferencijose, Mokymuose',
        conferencesList: [
            'Tarptautinė dantų implantų konferencija 2021 m.',
            'Medgrupė studentų paskaita „Basic Implantology 2021“',
            'Analoginio ir skaitmeninio šypsenos dizaino planavimo pagrindų meistriškumo klasė 2021 m.',
            'MedAcademy 2 dienų paskaita ir praktinis seminaras „Pažangioji implantologija“ 2024 m.',
            'Tarpautinė sveikatos mokslų konferencija visiems (IHSC) 2024 m.',
            'Megagen Baltics paskaita ir praktiniai mokymai „Implantologija pradedantiesiems“ 2023 m.',
            'Nober Biocare dirbtuvės „Immediate implantation“ 2021 m.',
            'Konferencija „Tarptautinė osteointegracijos ir periodontologijos diena“ 2024 m.',
            'Ir kitos paskaitos / mokymai RipeGlobal ir kitose platformose.'
        ],
        articlesTitle: 'Rašyti Straipsniai ir Santraukos',
        articlesList: [
            'Straipsnis. Safety and Potential Complications of Facial Wrinkle Correction with Dermal Fillers: A Systematic Literature Review',
            'Straipsnis. Healing of Post-Extraction Alveolar Defects by Primary and Secondary Intention: A Systematic Literature Review',
            'Abstraktas. One year evaluation of mandibular vertical augmentation: A comparative analysis between titanium meshes and resorbable membranes',
            'Abstraktas. Conservative versus surgical treatment of pediatric mandibular condyle fractures',
            'Abstraktas. Comparison of surgical techniques for extraction of impacted or retained mesiodens: A literature review'
        ],
        referencesText: 'Rekomendacijos – Galima pagal pageidavimą.'
    },
    en: {
        // Basic Info
        name: 'Deividas Chomicius',
        title: 'Dentist',
        email: 'chomdeiv@gmail.com',
        phone: '+370 675 37973 (LT)',
        phoneUK: '+44 780888078 (UK)',
        location: 'Kaunas',
        linkedInUrl: 'https://www.linkedin.com/in/deividaschomicius/',
        dob: '26/01/1984',
        driversLicense: 'Yes',
        nationality: 'Lithuanian',
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
        homeContent: 'I am a qualified dentist, ready to provide professional dental services and contribute to your smile health.',
        // About Page
        aboutTitle: 'About Me',
        aboutMeIntro: "Dentist Deividas Chomičius, GDC number: 320309. For me, dentistry is not just a profession. It's a sincere dedication to people, their health, and their self-confidence. I believe that every patient deserves not only quality treatment but also a human approach – attention, respect, and clear communication. My professional path is based on continuous improvement and precision. I constantly deepen my knowledge, participate in practical courses, and follow the latest trends in dental science – all to offer modern, safe, and effective solutions to every patient. From routine prophylactic check-ups to more complex procedures – every stage of treatment is important to me. Patients often admit to being afraid of visiting the dentist. My goal is to change that. I create an environment where people feel safe, understood, and respected. With me, no one is rushed or judged – only sincere dialogue and collaborative work for better health. Trust is what I value most. Therefore, I treat every patient not just as a patient, but as a person whose health I care about. Let's create a healthier and more confident smile – together.",
        personalSkillsTitle: 'Personal Skills',
        personalSkillsList: [ 'Attention to detail', 'Communication skills', 'Empathy and Compassion', 'Problem-Solving', 'Time Management', 'Adaptability', 'Team Collaboration' ],
        professionalInterestsTitle: 'Areas of Interests',
        professionalInterestsList: [ 'Preventative dentistry', 'Restorative dentistry', 'Oral surgery', 'Dental prosthetics', 'Dental Radiology', 'Patient Communication and Education', 'Emergency Dentistry' ],
        languagesTitle: 'Languages',
        languagesList: [ 'Lithuanian', 'English', 'Russian' ],
        educationTitle: 'Academic Qualifications',
        educationList: [
            { years: '2019 – 2024', degree: 'Master\'s degree, Odontology', university: 'Lithuanian University of Health Sciences, Lithuania' },
            { years: '2011 – 2014', degree: 'Ophthalmic Dispensing Optician, Optics/Optical Sciences', university: 'City and Islington College, United Kingdom' },
            { years: '2003 – 2007', degree: 'Bachelor’s degree, Management and business administration', university: 'ISM University of Management and Economics, Lithuania' },
            { years: '1991 – 2003', degree: 'Secondary education', university: 'S. Dariaus and S. Gireno gymnasium, Lithuania' }
        ],
        experienceTitle: 'Work Experience',
        experienceList: [
            { period: 'October 2024 - Present', title: 'Associate Dentist', company: 'UK Smiles (United Kingdom)' },
            { period: 'July 2024 - Present, July - August 2023, July - August 2022', title: 'Dispensing Optician', company: 'Taylor-West & Co. Opticians (United Kingdom)' },
            { period: 'May - June 2024', title: 'Dental Assistant (additional practice)', company: 'Šypsenos akademija (Eng. Smile academy) (Lithuania)' },
            { period: 'April - June 2024, December 2022 - January 2023', title: 'Dental Assistant (additional practice)', company: '"SB dentų klinika" (Eng. SB dental clinic) (Lithuania)' },
            { period: 'February - March 2024', title: 'Dentist (internship)', company: 'Kaunas city clinic (Lithuania)' },
            { period: 'November 2023 - March 2024', title: 'Dentist (additional practice)', company: 'Lithuania University of Health Sciences Hospital, Oral Surgery department (Lithuania)' },
            { period: 'November - December 2023', title: 'Dental Assistant (additional practice)', company: '"33 dantys" (Eng. 33 teeth) (Lithuania)' },
            { period: 'July - September 2021', title: 'Dispensing Optician', company: 'GlassesON Opticians (Lithuania)' },
            { period: 'June - August 2020', title: 'Nurse assistant', company: 'Respublikinė Kauno Ligoninė (Eng. Kaunas Republic hospital, Lithuania)' },
            { period: 'January - January 2020', title: 'Dental Assistant (additional practice)', company: '„Imperial Denta Group“ (Lithuania)' },
            { period: 'April - September 2019', title: 'Dispensing Optician', company: 'Whitby and Co. Opticians (United Kingdom)' },
            { period: 'December 2018 - May 2019 (6 months)', title: 'Dispensing Optician (Volunteer)', company: 'Vision Care for Homeless People Opticians (United Kingdom)' },
            { period: 'June 2015 - March 2019 (3 years 10 months)', title: 'Dispensing Optician', company: 'Specs of Kensington Opticians (United Kingdom)' },
            { period: 'March 2010 - May 2015 (5 years 3 months)', title: 'Dispensing Optician', company: 'Vision Express Opticians (United Kingdom)' }
        ],
        moreExperience: 'More work experience available on request or on LinkedIn.',
        dentistDutiesTitle: 'Dentist Additional Practice and Internship Duties',
        dentistDutiesList: [
            'Assisting with Patient Care: Support dental specialists during examinations and procedures, including preparing materials and instruments.',
            'Conducting Preliminary Exams: Perform initial patient assessments, including taking medical histories, conducting basic oral examinations, and recording findings under supervision.',
            'Learning Diagnostic Techniques.',
            'Gaining Exposure to Various Specialties: Shadow specialists in fields like periodontics, oral surgery, and prosthodontics to understand different treatment approaches and techniques.',
            'Providing Patient Education.',
            'Practicing Infection Control.',
            'Assisting in Dental Procedures: Participate in hands-on procedures such as fillings, extractions under direct supervision.',
            'Developing Treatment Plans: Collaborate with mentors to create and discuss treatment plans tailored to individual patient needs.',
            'Observing and Assisting in Oral Surgery: Gain practical experience by observing surgeries, assisting with patient preparation, and understanding surgical procedures.',
            'Participating in Team Meetings: Engage in case discussions, treatment planning sessions, and team meetings to enhance understanding of interdisciplinary care.',
            'Documenting Patient Records: Accurately maintain and update patient records, including treatment notes, progress reports, and follow-up care instructions.',
            'Enhancing Communication Skills: Practice effective communication with patients, colleagues, and supervisors to build rapport and facilitate smooth patient management.'
        ],
        dispensingOpticianDutiesTitle: 'Dispensing Optician Duties',
        dispensingOpticianDutiesList: [
            'Advising Patients on Eyewear Choices: Assisting patients in selecting suitable eyewear based on their prescription, lifestyle, facial features, and personal preferences.',
            'Interpreting Optical Prescriptions: Accurately interpreting prescriptions provided by optometrists or ophthalmologists to ensure patients receive the correct lenses and eyewear.',
            'Measuring and Fitting Eyewear.',
            'Recommending Lens Options.',
            'Adjusting and Repairing Eyewear.',
            'Providing Advice on Eye Health: Educating patients on proper eyewear maintenance, eye health practices, and the importance of regular eye examinations.',
            'Managing Orders and Inventory.',
            'Customer Service: Delivering high-quality customer service, addressing patient concerns, and resolving any issues related to eyewear or prescriptions.',
            'Administrative Duties.',
            'Compliance and Standards: Ensuring all activities comply with relevant regulations and standards set by the General Optical Council (GOC) and other professional bodies.',
            'Assisting in the Practice’s Day-to-Day Operations.',
            'These shared skills and responsibilities make the transition from a Dispensing Optician to a Dentist smooth, as both roles focus on detailed, patient-centered care.'
        ],
        conferencesTitle: 'Attended Conferences, Hands-on Trainings',
        conferencesList: [
            'International Conference on Dental Implants 2021',
            'Med group for students’ lecture, Basic Implantology 2021',
            'The Basics of Analog and Digital Smile Design Planning Masterclass 2021',
            'Med Academy 2-day lecture and hands-on workshop "Advanced implantology" 2024',
            'INTERNATIONAL HEALTH SCIENCES CONFERENCE FOR ALL 2024',
            'Megagen Baltics lecture and hands-on training "Implantology for beginners" 2023',
            'Nober Biocare workshop "Immediate implantation" 2021',
            'Conference "International Osseointegration and Periodontology Day" 2024'
        ],
        articlesTitle: 'Written Articles and Abstracts',
        articlesList: [
            'Article. Healing of Post-Extraction Alveolar Defects by Primary and Secondary Intention: A Systematic Literature Review',
            'Abstract. One year evaluation of mandibular vertical augmentation: A comparative analysis between titanium meshes and resorbable membranes',
            'Abstract. Conservative versus surgical treatment of pediatric mandibular condyle fractures',
            'Abstract. Comparison of surgical techniques for extraction of impacted or retained mesiodens: A literature review'
        ],
        referencesText: 'References – Available on request.'
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
        <div className="min-h-screen bg-zinc-100 dark:bg-blue-950 text-gray-900 dark:text-stone-100 flex flex-col font-sans">
            <Header lang={lang} setLang={setLang} content={c} />
            <main className="p-4 md:p-8 flex-grow container mx-auto">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname + lang}>
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