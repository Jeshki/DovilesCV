// src/pages/About.jsx
import React from 'react';
// Import Lucide icons
import { Languages, GraduationCap, Briefcase, Wrench, UserRound, Building, Calendar, Star, Globe, CreditCard, Car, Cake } from 'lucide-react';


function About({ content }) {
    return (
        <div className="mt-10 max-w-4xl mx-auto px-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center text-gray-900 dark:text-stone-100 uppercase">
                {content.aboutTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 flex flex-col items-center md:sticky md:top-24">
                    <img
                        src="../public/deivis.jpg"
                        alt={content.name}
                        className="rounded-lg w-full max-w-xs md:max-w-full object-cover mb-6 shadow-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3Ctext x='50' y='50' font-size='10' fill='%23ffffff' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E"; }}
                    />
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-stone-100">{content.name}</h3>
                    <p className="text-gray-600 dark:text-stone-300 mb-4">{content.title}</p>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow w-full mt-4">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <CreditCard className="mr-2 text-blue-600 dark:text-blue-400"/> {content.lang === 'lt' ? 'Asmeninė Informacija' : 'Personal Details'} {/* Lucide Icon */}
                        </h3>
                        <ul className="text-gray-700 dark:text-stone-200 space-y-2">
                            {content.dob && (
                                <li className="flex items-center gap-2">
                                    <Cake className="flex-shrink-0" size={16} /> {content.lang === 'lt' ? 'Gimimo data:' : 'DOB:'} {content.dob} {/* Lucide Icon */}
                                </li>
                            )}
                            {content.driversLicense && (
                                <li className="flex items-center gap-2">
                                    <Car className="flex-shrink-0" size={16} /> {content.lang === 'lt' ? 'Vairuotojo pažymėjimas:' : 'Driving license:'} {content.driversLicense} {/* Lucide Icon */}
                                </li>
                            )}
                            {content.nationality && (
                                <li className="flex items-center gap-2">
                                    <Globe className="flex-shrink-0" size={16} /> {content.lang === 'lt' ? 'Tautybė:' : 'Nationality:'} {content.nationality} {/* Lucide Icon */}
                                </li>
                            )}
                        </ul>
                    </div>

                </div>

                <div className="md:col-span-2 space-y-8">
                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                             <UserRound className="mr-2 text-blue-600 dark:text-blue-400"/> {content.lang === 'lt' ? 'Apie mane' : 'Personal Summary'} {/* Lucide Icon */}
                        </h3>
                        <p className="mb-3 text-gray-700 dark:text-stone-200">{content.aboutMeIntro}</p>
                    </div>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <Star className="mr-2 text-blue-600 dark:text-blue-400"/> {content.professionalInterestsTitle} {/* Lucide Icon */}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {content.professionalInterestsList.map((interest, index) => (
                                <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-stone-100 text-sm font-medium px-2.5 py-0.5 rounded">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <Wrench className="mr-2 text-blue-600 dark:text-blue-400"/> {content.personalSkillsTitle} {/* Lucide Icon */}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {content.personalSkillsList.map((skill, index) => (
                                <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-stone-100 text-sm font-medium px-2.5 py-0.5 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                         <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <Languages className="mr-2 text-blue-600 dark:text-blue-400"/> {content.languagesTitle} {/* Lucide Icon */}
                         </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-stone-200">
                             {content.languagesList.map((lang, index) => (<li key={index}>{lang}</li>))}
                         </ul>
                    </div>

                     <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                          <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400"/> {content.educationTitle} {/* Lucide Icon */}
                          </h3>
                         {content.educationList.map((edu, index) => (
                             <div key={index} className="mb-2">
                                 <p className="font-semibold text-gray-800 dark:text-stone-100">{edu.degree}</p>
                                 <p className="text-sm text-gray-600 dark:text-stone-300">{edu.university} ({edu.years})</p>
                             </div>
                         ))}
                     </div>

                     <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-stone-100">
                            <Briefcase className="mr-2 text-blue-600 dark:text-blue-400"/> {content.experienceTitle} {/* Lucide Icon */}
                        </h3>
                        {content.experienceList.map((exp, index) => (
                             <div key={index} className="mb-5 pb-5 border-b border-gray-200 dark:border-blue-800 last:border-b-0 last:mb-0 last:pb-0">
                                 <h4 className="font-semibold text-lg text-gray-800 dark:text-stone-100 mb-1">{exp.title}</h4>
                                 <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 mb-1">
                                     <Building size={16} /> {exp.company} {/* Lucide Icon */}
                                 </p>
                                 <p className="text-xs text-gray-500 dark:text-stone-300 flex items-center gap-1 mb-2">
                                     <Calendar size={12} /> {exp.period} {/* Lucide Icon */}
                                 </p>
                             </div>
                         ))}
                         {content.moreExperience && <p className="text-sm text-gray-700 dark:text-stone-200 mt-4">{content.moreExperience}</p>}
                    </div>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <Briefcase className="mr-2 text-blue-600 dark:text-blue-400"/> {content.dentistDutiesTitle} {/* Lucide Icon */}
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-stone-200 space-y-1">
                            {content.dentistDutiesList.map((duty, index) => (
                                <li key={index}>{duty}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <Briefcase className="mr-2 text-blue-600 dark:text-blue-400"/> {content.dispensingOpticianDutiesTitle} {/* Lucide Icon */}
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-stone-200 space-y-1">
                            {content.dispensingOpticianDutiesList.map((duty, index) => (
                                <li key={index}>{duty}</li>
                            ))}
                        </ul>
                    </div>

                     <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                          <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400"/> {content.conferencesTitle} {/* Lucide Icon */}
                          </h3>
                         <ul className="list-disc list-inside text-gray-700 dark:text-stone-200 space-y-1">
                             {content.conferencesList.map((conf, index) => (<li key={index}>{conf}</li>))}
                         </ul>
                     </div>

                    <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-stone-100">
                            <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400"/> {content.articlesTitle} {/* Lucide Icon */}
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-stone-200 space-y-1">
                            {content.articlesList.map((article, index) => (
                                <li key={index}>{article}</li>
                            ))}
                        </ul>
                    </div>

                    {content.referencesText && (
                        <div className="p-4 md:p-6 bg-white dark:bg-blue-900 rounded-lg shadow">
                            <p className="text-gray-700 dark:text-stone-200">{content.referencesText}</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default About;