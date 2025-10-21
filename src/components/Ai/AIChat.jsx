

import React, { useState, useRef, useEffect } from "react";
import { LoaderCircle, User, Bot, X, Send } from "lucide-react";
import { useNavbar } from "../../contexts/NavbarContext";
import { SERVER_URL } from "../../constant";

const AIChat = ({ embedded = false, onClose }) => {
  const { hideNavbarComponent, showNavbar } = useNavbar();
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const modalRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, response]);

  // Hide navbar when component mounts (if not embedded)
  useEffect(() => {
    if (!embedded) {
      hideNavbarComponent();
    }

    // Show navbar when component unmounts
    return () => {
      if (!embedded) {
        showNavbar();
      }
    };
  }, [embedded, hideNavbarComponent, showNavbar]); // <-- fixed here

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !embedded
      ) {
        showNavbar();
        onClose();
      }
    };

    if (!embedded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, embedded, showNavbar]); // Optionally add showNavbar here for maximal safety

  const askAI = async () => {
    if (!question.trim()) return;

    const userMessage = { type: "user", content: question, timestamp: Date.now() };
    setChatHistory((prev) => [...prev, userMessage]);

    setLoading(true);
    setIsTyping(true);
    setError("");
    setResponse("");

    try {
      // const res = await fetch("https://portfolio-server-8zb7.onrender.com/ask", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ question }),
      // });
      const res = await fetch(`${SERVER_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (res.ok) {
        const aiMessage = { type: "ai", content: data.answer, timestamp: Date.now() };
        setChatHistory((prev) => [...prev, aiMessage]);
        setResponse(data.answer);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Could not connect to the assistant.");
    } finally {
      setLoading(false);
      setIsTyping(false);
      setQuestion("");
    }
  };

  const genericQuestions = [
    "Tell me about your skills",
    "What projects have you built?",
    "How can I contact you?",
    "What's your experience?",
  ];

  // const linkify = (text) => {
  //   text = text.replace(
  //     /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
  //     (_, label, url) =>
  //       `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 underline font-medium">${label}</a>`
  //   );
  //   return text.replace(/(https?:\/\/[^\s<>"')\]]+)/g, (url) => {
  //     const cleanUrl = url.replace(/[.,)]*$/, "");
  //     return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 underline font-medium">${cleanUrl}</a>`;
  //   });
  // };
  const linkify = (text) => {
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, label, url) =>
        `<a href="${url}>${label}</a>`
    );
    return text.replace(/(https?:\/\/[^\s<>"')\]]+)/g, (url) => {
      const cleanUrl = url.replace(/[.,)]*$/, "");
      return `<a href="${cleanUrl}>${cleanUrl}</a>`;
    });
  };
  const handleQuestionClick = (q) => {
    setQuestion(q);
    setTimeout(() => askAI(), 100);
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {!embedded && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"></div>
      )}

      <div
        ref={modalRef}
        className={`${
          embedded
            ? ""
            : "fixed bottom-4 right-4 z-40 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:top-16 max-md:m-4 max-md:rounded-2xl"
        } w-full max-w-md max-md:max-w-none h-[650px] max-md:h-auto max-md:max-h-[calc(100vh-8rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden transform transition-all duration-300 ease-in-out`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot size={24} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Assistant</h2>
                <p className="text-white/80 text-sm">Ask me about Aditya</p>
              </div>
            </div>

            {!embedded && (
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 flex items-center justify-center"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50">
          {/* Welcome Message */}
          {chatHistory.length === 0 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Bot size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                👋 Hello! I'm here to help
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Aditya's AI assistant. Ask me anything about his skills, projects, or experience!
              </p>
            </div>
          )}

          {/* Chat History */}
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                message.type === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                    : "bg-gradient-to-r from-emerald-500 to-green-600"
                }`}
              >
                {message.type === "user" ? (
                  <User size={18} className="text-white" />
                ) : (
                  <Bot size={18} className="text-white" />
                )}
              </div>

              <div
                className={`max-w-[75%] ${
                  message.type === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl shadow-sm ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800 shadow-md"
                  }`}
                >
                  {message.type === "user" ? (
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  ) : (
                    <div
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: linkify(message.content) }}
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2 px-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                <Bot size={18} className="text-white" />
              </div>
              <div className="bg-white border border-gray-200 px-5 py-3 rounded-2xl shadow-md">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-3 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">{error}</span>
              </div>
            </div>
          )}

          {/* Suggested Questions */}
          {chatHistory.length === 0 && !loading && (
            <div className="space-y-4">
              <p className="text-base font-semibold text-gray-700 text-center">
                💡 Quick questions to get started:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {genericQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(q)}
                    className="text-left bg-white hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 border border-gray-200 hover:border-indigo-300 rounded-xl p-4 transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <span className="text-white text-sm">?</span>
                      </div>
                      <span className="text-gray-700 group-hover:text-indigo-700 font-medium">
                        {q}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/90 backdrop-blur-sm border-t border-gray-200/50">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                type="text"
                placeholder="Type your message..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !loading && askAI()}
                disabled={loading}
              />
              {question && (
                <button
                  onClick={() => setQuestion("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              onClick={askAI}
              disabled={loading || !question.trim()}
              className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 flex items-center gap-2 ${
                loading || !question.trim()
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
              }`}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
