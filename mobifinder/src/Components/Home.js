import React from 'react'
import { motion } from 'framer-motion'
export default function Home() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="h-screen bg-gradient-to-r from-black to-gray-800 flex flex-col justify-center items-center">

                    <motion.h1
                        initial={{ y: -250 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                        className="text-5xl font-bold text-white mb-5">
                        Welcome to Mobile Insight!
                    </motion.h1>

                    <motion.p
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
                        className="text-xl text-white mb-5">
                        Dive deep into the world of mobiles, compare specs, and make an informed choice.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {["Brands", "Compare", "Prices"].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="p-5 rounded bg-purple-500 shadow-lg">
                                <h2 className="text-xl font-bold text-white">{item}</h2>
                                <p className="text-white mt-2">
                                    Explore {item.toLowerCase()} to find your best fit.
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </motion.div>
        </>
    )
}
