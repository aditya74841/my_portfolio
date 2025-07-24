

// import React, { useEffect, useState } from "react";
// import { MessageCircle } from "lucide-react";
// import AIChat from "./AIChat";

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const [showDot, setShowDot] = useState(false);

//   // Prevent background scroll
//   useEffect(() => {
//     document.body.classList.toggle("overflow-hidden", isOpen);
//   }, [isOpen]);

//   // Tooltip logic: show after 2s, hide after 7s
//   useEffect(() => {
//     const showTimer = setTimeout(() => setShowMessage(true), 2000);
//     const hideTimer = setTimeout(() => {
//       setShowMessage(false);
//       setShowDot(true);
//     }, 5000);

//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(hideTimer);
//     };
//   }, []);

//   const handleOpen = () => {
//     setIsOpen(true);
//     setShowDot(false); // hide red dot
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
//           <AIChat embedded={false} onClose={() => setIsOpen(false)} />
//         </div>
//       )}

//       {/* Floating Chat Button + Tooltip */}
//       {!isOpen && (
//         <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
//           {/* Tooltip message */}
//           {showMessage && (
//             <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-xl text-sm animate-fade-in border border-gray-200">
//               💬 Ask me anything
//             </div>
//           )}

//           {/* Chat button with notification dot */}
//           <button
//             onClick={handleOpen}
//             className="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200"
//           >
//             <MessageCircle size={24} className="text-white" />
//             {showDot && (
//               <span className="absolute top-1 right-1 h-3 w-3 bg-red-700 rounded-full border-2 border-white animate-ping-slow" />
//             )}
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default FloatingChat;
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import AIChat from "./AIChat";
import { useNavbar } from "../../contexts/NavbarContext";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hideNavbarComponent, showNavbar } = useNavbar();

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-20 right-4 z-40 md:bottom-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Open AI Chat"
          >
            <MessageCircle size={24} className="group-hover:animate-pulse" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">AI</span>
            </div>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-75 animate-ping"></div>
          </button>
        </div>
      )}

      {isOpen && (
        <AIChat
          embedded={false}
          onClose={() => {
            showNavbar();
            setIsOpen(false)}}
        />
      )}
    </>
  );
};

export default FloatingChatButton;
