"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import { BsPersonFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const User = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {isSignedIn && user?.imageUrl ? (
        <img
          src={user.imageUrl}
          alt="User"
          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
      ) : (
        <button onClick={() => router.push("/login")}>
          <BsPersonFill className="hover:text-primary-500 dark:hover:text-primary-400 w-6 h-6 text-gray-900 dark:text-white" />
        </button>
      )}

      {dropdownOpen && isSignedIn && (
        <div className="absolute z-50 right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 border border-gray-200 dark:border-gray-700">
          <a
            href="/user"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Manage Account
          </a>
          <hr className="border-gray-200 dark:border-gray-600" />
          <SignOutButton>
            <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              <IoLogOutOutline className="mr-2 w-5 h-5" />
              Logout
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  );
};

export default User;
