import React from 'react'
import { motion } from 'framer-motion';
export default function TermsAndCondition({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
        >
            <div className="bg-gradient-to-r from-black to-gray-800 p-6 rounded-md w-[500px] space-y-4">
                <h2 className="text-white text-xl font-bold">Terms & Conditions</h2>
                <div className=" text-white overflow-y-auto h-[400px] border p-4">
                    {/* Sample terms and conditions content */}
                    Welcome to our mobile recommendation web page. The mobiles recommended here are based solely on technical aspects and specifications, not on promotions or personal experiences. While we aim for accuracy, we do not guarantee the completeness or reliability of the information. Users must conduct their research before making any purchase decisions. We are not liable for any damages arising from the use of this information. The web page may contain links to third-party websites; however, we do not endorse their content. We reserve the right to modify or discontinue the service without notice. All content on this web page is protected by intellectual property laws. By using this web page, you agree to these terms and conditions, governed by the laws of India.        </div>
                <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
                    Agree
                </button>
            </div>
        </motion.div>

    )
}
