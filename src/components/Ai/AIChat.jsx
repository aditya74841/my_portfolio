// import React, { useState } from "react";
// import { LoaderCircle, User, Bot } from "lucide-react";

// const AIChat = ({ embedded = false }) => {
//   const [question, setQuestion] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const askAI = async () => {
//     if (!question.trim()) return;
//     setLoading(true);
//     setError("");
//     setResponse("");

//     try {
//       const res = await fetch("https://portfolio-server-8zb7.onrender.com/ask", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ question }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setResponse(data.answer);
//       } else {
//         setError(data.error || "Something went wrong.");
//       }
//     } catch (err) {
//       console.log("Error:", err.message);
//       setError("Could not connect to the assistant.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const genericQuestions = [
//     "Tell me about your self.",
//     "What projects have you worked on?",
//     "What makes you unique as a developer?",
//     "How do you keep learning and improving?",
//     "Can you explain your AI assistant project?",
//   ];

//   const linkify = (text) => {
//     text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => {
//       return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${label}</a>`;
//     });
//     return text.replace(/(https?:\/\/[^\s<>"')\]]+)/g, (url) => {
//       const cleanUrl = url.replace(/[.,)]*$/, "");
//       return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${cleanUrl}</a>`;
//     });
//   };

//   return (
//     <div
//       className={`${
//         embedded ? "w-full h-full" : "max-w-xl mx-auto mt-16"
//       } p-6 bg-white rounded-xl shadow-xl font-sans flex flex-col`}
//     >
//       {/* {!embedded && (
//         <> */}
//           <h1 className="text-2xl font-semibold mb-2 text-indigo-700 text-center">
//             💬 Ask My AI Assistant
//           </h1>
//           <p className="text-center text-gray-600 mb-4">
//             Ask anything about my skills, journey or projects.
//           </p>
//         {/* </>
//       )} */}

//       <div className="flex gap-2 mb-4">
//         <input
//           className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           type="text"
//           placeholder="Ask me something..."
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && askAI()}
//           disabled={loading}
//         />
//         <button
//           onClick={askAI}
//           disabled={loading}
//           className={`px-4 py-2 rounded-lg font-medium text-white transition ${
//             loading ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
//           }`}
//         >
//           {loading ? <LoaderCircle className="animate-spin" size={20} /> : "Ask"}
//         </button>
//       </div>

//       {error && (
//         <div className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded-md">{error}</div>
//       )}

//       {question && (
//         <div className="flex items-start gap-2 mb-2">
//           <div className="text-indigo-500">
//             <User size={20} />
//           </div>
//           <div className="bg-indigo-50 px-4 py-2 rounded-lg text-gray-800 max-w-[90%]">
//             {question}
//           </div>
//         </div>
//       )}

//       {response && (
//         <div className="flex items-start gap-2 mb-4">
//           <div className="text-green-600">
//             <Bot size={20} />
//           </div>
//           <div
//   className="mb-6 whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded-lg p-5 text-gray-800 text-lg max-h-96 overflow-y-auto"
//   dangerouslySetInnerHTML={{ __html: linkify(response) }}
// />

//         </div>
//       )}

//       {!response && !loading && (
//         <div className="mt-3 text-sm text-gray-600">
//           <span className="font-medium">Try asking:</span>
//           <ul className="list-disc list-inside mt-1 space-y-1 text-indigo-700">
//             {genericQuestions.map((q, idx) => (
//               <li
//                 key={idx}
//                 onClick={() => {
//                   setQuestion(q);
//                   setResponse("");
//                   setTimeout(() => askAI(), 200);
//                 }}
//                 className="hover:underline cursor-pointer"
//               >
//                 {q}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AIChat;
import React, { useState, useRef, useEffect } from "react";
import { LoaderCircle, User, Bot, X } from "lucide-react";

const AIChat = ({ embedded = false, onClose }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const modalRef = useRef(null);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("https://portfolio-server-8zb7.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.answer);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Could not connect to the assistant.");
    } finally {
      setLoading(false);
    }
  };

  const genericQuestions = [
    "Tell me about yourself.",
    "What projects have you worked on?",
    "What makes you unique as a developer?",
    "How do you keep learning and improving?",
    "Can you explain your AI assistant project?",
  ];

  const linkify = (text) => {
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, label, url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${label}</a>`
    );
    return text.replace(/(https?:\/\/[^\s<>"')\]]+)/g, (url) => {
      const cleanUrl = url.replace(/[.,)]*$/, "");
      return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${cleanUrl}</a>`;
    });
  };

  return (
    <div
      ref={modalRef}
      className={`${
        embedded ? "" : "fixed bottom-0 right-0 z-50"
      } w-full max-w-md h-[80vh] bg-white rounded-t-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-indigo-600 text-white">
        <h2 className="text-lg font-semibold">💬 Ask My AI Assistant</h2>
        {!embedded && (
          <button onClick={onClose}>
            <X size={20} />
          </button>
        )}
      </div>

      {/* Scrollable chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        <p className="text-center text-gray-500 text-sm">
          Ask anything about my skills, journey or projects.
        </p>

        {error && (
          <div className="text-red-600 bg-red-100 px-4 py-2 rounded-md">
            {error}
          </div>
        )}

        {question && (
          <div className="flex items-start gap-2">
            <User className="text-indigo-500 mt-1" size={20} />
            <div className="bg-indigo-50 px-4 py-2 rounded-lg text-gray-800 max-w-[90%]">
              {question}
            </div>
          </div>
        )}

        {response && (
          <div className="flex items-start gap-2">
            <Bot className="text-green-600 mt-1" size={20} />
            <div
              className="whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded-lg p-5 text-gray-800 text-base"
              dangerouslySetInnerHTML={{ __html: linkify(response) }}
            />
          </div>
        )}

{ !loading && (
  <div className="text-sm text-gray-600 mt-4">
    <span className="font-semibold text-base text-indigo-700">💡 Try asking me one of these:</span>
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {genericQuestions.map((q, idx) => (
        <div
          key={idx}
          onClick={() => {
            setQuestion(q);
            setResponse("");
            setTimeout(() => askAI(), 200);
          }}
          className="cursor-pointer bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg p-3 shadow-sm hover:shadow-md transition duration-200 ease-in-out flex items-start gap-2"
        >
          <span className="text-indigo-500 font-bold">➤</span>
          <span className="text-gray-800">{q}</span>
        </div>
      ))}
    </div>
  </div>
)}
      </div>

      {/* Fixed input */}
      <div className="p-4 border-t flex gap-2">
        <input
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Ask me something..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && askAI()}
          disabled={loading}
        />
        <button
          onClick={askAI}
          disabled={loading}
          className={`px-4 py-2 rounded-lg font-medium text-white transition ${
            loading ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? <LoaderCircle className="animate-spin" size={20} /> : "Ask"}
        </button>
      </div>
    </div>
  );
};

export default AIChat;
