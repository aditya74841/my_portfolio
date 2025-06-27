
// import React, { useEffect, useState } from "react";
// import { MessageCircle } from "lucide-react";
// import AIChat from "./AIChat";

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Prevent background scroll
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     // Clean up when unmounted
//     return () => document.body.classList.remove("overflow-hidden");
//   }, [isOpen]);

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           {/* Clickable background */}
//           <div
//             className="absolute inset-0"
//             onClick={() => setIsOpen(false)}
//           ></div>

//           {/* Chatbox modal */}
//           {/* <div className="relative w-[90%] max-w-md h-[90%] bg-red-600 rounded-xl shadow-lg z-50 overflow-y-auto p-4"> */}
//           {/* Close button */}
//           <button
//             className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//             onClick={() => setIsOpen(false)}
//           >
//             {/* <X size={20} /> */}
//           </button>

//           <AIChat embedded={false} onClose={() => setIsOpen(false)} />
//           {/* </div> */}
//         </div>
//       )}

//       {/* Floating toggle button */}
//       {!isOpen && (
//         <>
//           <button
//             onClick={() => setIsOpen(true)}
//             className="fixed bottom-5 right-5 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
//           >
//             <MessageCircle size={24} />
//           </button>
//         </>
//       )}
//     </>
//   );
// };

// export default FloatingChat;
import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import AIChat from "./AIChat";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showDot, setShowDot] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  // Tooltip logic: show after 2s, hide after 7s
  useEffect(() => {
    const showTimer = setTimeout(() => setShowMessage(true), 2000);
    const hideTimer = setTimeout(() => {
      setShowMessage(false);
      setShowDot(true);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowDot(false); // hide red dot
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          <AIChat embedded={false} onClose={() => setIsOpen(false)} />
        </div>
      )}

      {/* Floating Chat Button + Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {/* Tooltip message */}
          {showMessage && (
            <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-xl text-sm animate-fade-in border border-gray-200">
              💬 Ask me anything
            </div>
          )}

          {/* Chat button with notification dot */}
          <button
            onClick={handleOpen}
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200"
          >
            <MessageCircle size={24} className="text-white" />
            {showDot && (
              <span className="absolute top-1 right-1 h-3 w-3 bg-red-700 rounded-full border-2 border-white animate-ping-slow" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
