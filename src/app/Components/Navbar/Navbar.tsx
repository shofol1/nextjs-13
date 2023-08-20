"use client";
import { useAppSelector } from "@/hooks";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { value } = useAppSelector((state: any) => state.counter);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 text-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center uppercase font-bold text-[25px]"
        >
          MealKoi
        </Link>

        <div className="flex gap-2">
          <Link href="/about">Cart{value}</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Blog</Link>
          <Link href="/about">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
