"use client";

import { useState } from "react";

export const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button className="px-3 py-2 rounded-md font-medium inline-flex items-center hover:text-black">
        Services and Prices
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="absolute z-10 -ml-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a
              href=""
              className="block px-4 py-2 text-sm text-[#DFCCA8] hover:text-black hover:bg-gray-100"
              role="menuitem"
            >
              Dog Boarding
            </a>
            <a
              href=""
              className="block px-4 py-2 text-sm text-[#DFCCA8] hover:text-black hover:bg-gray-100"
              role="menuitem"
            >
              Development
            </a>
            <a
              href=""
              className="block px-4 py-2 text-sm text-[#DFCCA8] hover:text-black hover:bg-gray-100"
              role="menuitem"
            >
              Design
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
