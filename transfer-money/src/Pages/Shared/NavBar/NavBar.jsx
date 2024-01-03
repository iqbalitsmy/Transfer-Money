import { useState } from "react";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            {/* Navbar */}
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-xl">Logo</div>

                    {/* Hamburger icon for mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? (<span className="material-symbols-outlined text-white">
                                    close
                                </span>) : (<span className="material-symbols-outlined text-white">
                                    menu
                                </span>)
                            }
                        </button>
                    </div>

                    {/* Navbar links for large screens */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10 font-normal text-white uppercase">
                        <a href="#" className="hover:text-blue-300 transition-all">Home</a>
                        <a href="#" className="hover:text-blue-300 transition-all">About</a>
                        <a href="#" className="hover:text-blue-300 transition-all">Service</a>
                        <a href="#" className="hover:text-blue-300 transition-all">Contact</a>
                        <a href="#" className="hover:text-blue-300 transition-all">Login</a>
                        <a href="#" className="rounded-md bg-blue-800 hover:bg-blue-900 transition-colors p-2">Sign Up</a>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            {/* Navbar links for mobile screens */}
            <div
                className={`md:hidden text-lg font-medium fixed inset-y-0 left-0 bg-gray-800 text-white p-4 w-64 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <a href="#" className="block mb-2 hover:text-blue-300 transition-all">Home</a>
                <a href="#" className="block mb-2 hover:text-blue-300 transition-all">About</a>
                <a href="#" className="block mb-2 hover:text-blue-300 transition-all">Service</a>
                <a href="#" className="block mb-2 hover:text-blue-300 transition-all">Contact</a>
                <hr className="border border-l-2 border-gray-600 mb-2" />
                <a href="#" className="block mb-3 hover:text-blue-300 transition-all">Login</a>
                <a href="#" className="rounded-md bg-blue-800 hover:bg-blue-900 transition-colors p-2">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;