// // components/Ai/FloatingChat.jsx
// import React, { useState } from "react";
// import { MessageCircle } from "lucide-react"; // Optional icon lib
// import AIChat from "./AIChat";

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Chat Box */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-5 w-[320px] h-[400px] shadow-lg rounded-lg bg-white z-50 border overflow-hidden">
//          <div className="w-full h-full bg-black" onClick={() => setIsOpen(false)}></div>
//           <AIChat embedded />
//         </div>
//       )}

//       {/* Floating Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-5 right-5 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         <MessageCircle size={24} />
//       </button>
//     </>
//   );
// };

// export default FloatingChat;

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import AIChat from "./AIChat";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up when unmounted
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Clickable background */}
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Chatbox modal */}
          {/* <div className="relative w-[90%] max-w-md h-[90%] bg-red-600 rounded-xl shadow-lg z-50 overflow-y-auto p-4"> */}
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            {/* <X size={20} /> */}
          </button>

          <AIChat embedded={false} onClose={() => setIsOpen(false)} />
          {/* </div> */}
        </div>
      )}

      {/* Floating toggle button */}
      {!isOpen && (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <MessageCircle size={24} />
          </button>
        </>
      )}
    </>
  );
};

export default FloatingChat;
