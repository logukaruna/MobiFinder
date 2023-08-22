import React from "react";
import { motion } from "framer-motion";
export default function TermsAndConditionReq({ Retry }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90"
    >
      <div className="bg-gradient-to-r from-black to-gray-800 p-6 rounded-md w-[500px] space-y-4">
        <h2 className="text-white text-xl font-bold">Oops..!!!</h2>
        <div className=" text-white overflow-y-auto h-[400px] border p-4">
          {/* Sample terms and conditions content */}
          We sincerely apologize for any inconvenience this may have caused. It
          appears that, as of now, you haven't yet agreed to our terms and
          conditions, which are an essential part of using our service. We value
          your interest in utilizing our service and kindly request you to
          consider agreeing to our terms and conditions. Your understanding and
          cooperation are highly appreciated. Thank you for your time and
          consideration.<br></br>
          To access the terms and conditions, kindly click on the "Terms and
          Conditions" button.
        </div>
        <button
          onClick={Retry}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
        >
          Terms and Conditions
        </button>
      </div>
    </motion.div>
  );
}
