'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding, FaBars, FaTimes } from "react-icons/fa";
import { destroySession } from "@/app/actions/destroySession"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    const state = await destroySession();
    if (state.success) {
      toast.success('Logged out successfully');
      setIsAuthenticated(false);
      router.push('/login');
    } else {
      toast.error(state.error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image className="h-12 w-12" src={logo} alt="Bookit" priority={true} />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Rooms
                  </Link>
                  {isAuthenticated && (
                    <>
                      <Link
                        href="/bookings"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                      >
                        Bookings
                      </Link>
                      <Link
                        href="/rooms/add"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                      >
                        Add Room
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Right Side Menu */}
            <div className="ml-auto flex items-center">
              <div className="hidden md:flex items-center space-x-4">
                {/* Logged Out Only */}
                {!isAuthenticated ? (
                  <>
                    <Link
                      href="/login"
                      className="text-gray-800 hover:text-gray-600 flex items-center"
                    >
                      <FaSignInAlt className="inline mr-1" /> Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-gray-800 hover:text-gray-600 flex items-center"
                    >
                      <FaUser className="inline mr-1" /> Register
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/rooms/my" className="flex items-center text-gray-800 hover:text-gray-600">
                      <FaBuilding className="inline mr-1" /> My Rooms
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-800 hover:text-gray-600 flex items-center"
                    >
                      <FaSignOutAlt className="inline mr-1" /> Sign Out
                    </button>
                  </>
                )}
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Rooms
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    href="/bookings"
                    onClick={closeMobileMenu}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Bookings
                  </Link>
                  <Link
                    href="/rooms/add"
                    onClick={closeMobileMenu}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Add Room
                  </Link>
                </>
              )}
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    <FaSignInAlt className="inline mr-1" /> Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={closeMobileMenu}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    <FaUser className="inline mr-1" /> Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/rooms/my"
                    onClick={closeMobileMenu}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    <FaBuilding className="inline mr-1" /> My Rooms
                  </Link>
                  <button
                    onClick={() => { handleLogout(); closeMobileMenu(); }}
                    className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    <FaSignOutAlt className="inline mr-1" /> Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
