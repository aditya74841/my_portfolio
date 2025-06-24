// import React, { useState } from "react";

// const genericQuestions = [
//   "Tell me about your To-Do app.",
//   "What technologies do you use?",
//   "How did you build your portfolio website?",
//   "Can you explain your AI assistant project?",
//   "What skills are you strongest at?",
// ];

// const AIChat = () => {
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
//       const res = await fetch("http://localhost:8080/ask", {
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
//       setError("Could not connect to the assistant.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md font-sans">
//       <h1 className="text-3xl font-semibold mb-2 text-gray-900">💬 Ask My AI Assistant</h1>
//       <p className="text-gray-600 mb-6">You can ask anything about my work, skills, or journey.</p>

//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Type your question..."
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") askAI();
//           }}
//         />
//         <button
//           onClick={askAI}
//           disabled={loading}
//           className={`px-6 py-3 rounded-md text-white font-semibold ${
//             loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Thinking..." : "Ask"}
//         </button>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-gray-700 mb-2 font-medium">Try one of these questions:</h2>
//         <div className="flex flex-wrap gap-2">
//           {genericQuestions.map((q, idx) => (
//             <button
//               key={idx}
//               onClick={() => setQuestion(q)}
//               className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer transition"
//             >
//               {q}
//             </button>
//           ))}
//         </div>
//       </div>

//       {error && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md font-medium">
//           {error}
//         </div>
//       )}

//       {response && (
//         <div className="whitespace-pre-wrap p-5 bg-gray-50 border border-gray-200 rounded-md text-gray-800 text-lg">
//           {response}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AIChat;

import React, { useState } from "react";

const AIChat = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError("");
    setResponse("");
    // http://localhost:8080/ask
    // https://portfolio-server-8zb7.onrender.com/ask

    try {
      const res = await fetch(
        "https://portfolio-server-8zb7.onrender.com/ask",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question }),
        }
      );
      // console.log(res);
      const data = await res.json();

      if (res.ok) {
        setResponse(data.answer);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.log("The Error is", err.message);
      setError("Could not connect to the assistant.");
    } finally {
      setLoading(false);
    }
  };

  // Some generic questions users might want to ask
  const genericQuestions = [
    "Tell me about your self.",
    "Tell me about your strongest skills.",
    "What projects have you worked on?",
    "How do you keep learning and improving?",
    "Can you explain your AI assistant project?",
    "What makes you unique as a developer?",
  ];
  // function linkify(text) {
  //   const urlRegex = /(https?:\/\/[^\s]+)/g;
  //   return text.replace(urlRegex, (url) => {
  //     return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${url}</a>`;
  //   });
  // }
  function linkify(text) {
    // First, replace markdown links: [text](url)
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, label, url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${label}</a>`;
      }
    );

    // Then, replace plain URLs (excluding trailing punctuation)
    return text.replace(/(https?:\/\/[^\s<>"')\]]+)/g, (url) => {
      // Remove any trailing punctuation like .,),]
      const cleanedUrl = url.replace(/[.,)]*$/, "");
      return `<a href="${cleanedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${cleanedUrl}</a>`;
    });
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg font-sans">
      <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-700">
        💬 Ask My AI Assistant
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Ask me anything about my skills, projects, or journey.
      </p>

      <div className="flex gap-3 mb-6">
        <input
          className="flex-grow border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && question.trim() && !loading) {
              askAI();
            }
          }}
          disabled={loading}
        />
        <button
          className={`px-6 py-3 rounded-lg text-white font-medium transition ${
            loading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          onClick={askAI}
          disabled={loading}
          aria-label="Ask question"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      {error && (
        <div className="mb-6 text-red-600 bg-red-100 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      {/* {response && (
        <div className="mb-6 whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded-lg p-5 text-gray-800 text-lg">
          {response}
        </div>
      )} */}

      {response && (
        <div
          className="mb-6 whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded-lg p-5 text-gray-800 text-lg"
          dangerouslySetInnerHTML={{ __html: linkify(response) }}
        />
      )}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">
          Try one of these questions:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-indigo-700 cursor-pointer">
          {genericQuestions.map((q, idx) => (
            <li
              key={idx}
              onClick={() => {
                setQuestion(q);
                setResponse("");
              }}
              className="hover:underline"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setQuestion(q);
                  setResponse("");
                }
                askAI();
              }}
            >
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIChat;
