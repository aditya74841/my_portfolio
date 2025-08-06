
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import AIChat from "./AIChat";
import { useNavbar } from "../../contexts/NavbarContext";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {  showNavbar } = useNavbar();

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
