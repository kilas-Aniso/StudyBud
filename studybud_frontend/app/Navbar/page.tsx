import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar py-6 bg-[var(--background)]">
      <nav className="navbar container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="EmpowerHer Hub Logo"
              width={350}
              height={300}
              className="cursor-pointer"
            />
          </Link>

          <ul className="navbar-nav flex items-center gap-6 text-2xl font-semibold">
            <li className="nav-item">
              <Link className="nav-link text-[#2E1A47] hover:text-yellow-600" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-[#2E1A47] hover:text-yellow-600" href="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-[#2E1A47] hover:text-yellow-600" href="/Resources">
                Resources
              </Link>
            </li>
          </ul>

          <Link href="/Login">
            <button className="ml-4 bg-yellow-500 text-[#2E1A47] px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-100">
              Find a StudyBuddy
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
