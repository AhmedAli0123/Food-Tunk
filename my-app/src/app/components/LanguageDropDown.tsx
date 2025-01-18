"use client";

import { useState } from "react";


const languages: string[] = ["English", "Urdu", "French", "Chinese", "Spanish"];

const LanguageDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    // Add your language change logic here
  };

  return (
    <div className="relative inline-block text-left p-4">
      <div>
        <button
          type="button"
          className=" inline-flex justify-center w-[60px] h-[15%] sm:h-[40px] sm:w-full text-xs rounded-md border border-gray-300 
          shadow-sm px-4 py-2 bg-black sm:text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 
          focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedLanguage}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 011.414 0L10 13.086l3.293-3.379a1 1 0 111.414 1.414l-4 4.086a1 1 0 01-1.414 0l-4-4.086a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 md:w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <a
                key={language}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageSelect(language)}
              >
                {language}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
