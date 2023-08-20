import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
    let Navitems = ['Home', 'Compare', 'About Us', 'Contact']
    return (
        <>
            <header className="bg-gray-900 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold">
                        Mobile <span className='text-purple-500'>Insight</span>
                    </motion.h1>

                    <nav>
                        <ul className="flex space-x-4">
                            {Navitems.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.5 }}

                                >
                                    <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition duration-300">
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

