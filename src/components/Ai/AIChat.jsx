// import React, { useState } from "react";

// const AIChat = () => {
//   const [question, setQuestion] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     setLoading(true);
//     setResponse("");

//     const res = await fetch("http://localhost:8080/ask", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });

//     console.log("the res is ", res);

//     const reader = res.body.getReader();
//     const decoder = new TextDecoder();
//     let fullText = "";

//     while (true) {
//       const { value, done } = await reader.read();
//       if (done) break;

//       const chunk = decoder.decode(value);
//       const lines = chunk
//         .split("\n")
//         .filter((line) => line.startsWith("data:"));
//       for (const line of lines) {
//         const data = line.replace("data: ", "");
//         if (data !== "[DONE]") {
//           fullText += data;
//           setResponse((prev) => prev + data);
//         }
//       }
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.heading}>Ask My AI Assistant</h3>
//       <input
//         style={styles.input}
//         type="text"
//         placeholder="Type your question..."
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//       />
//       <button style={styles.button} onClick={askAI} disabled={loading}>
//         {loading ? "Thinking..." : "Ask"}
//       </button>
//       <div style={styles.response}>{response}</div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "600px",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     fontFamily: "sans-serif",
//   },
//   heading: {
//     marginBottom: "10px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     marginBottom: "10px",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer",
//     backgroundColor: "#0070f3",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//   },
//   response: {
//     marginTop: "20px",
//     whiteSpace: "pre-wrap",
//     background: "#f7f7f7",
//     padding: "10px",
//     borderRadius: "6px",
//     minHeight: "50px",
//   },
// };

// export default AIChat;


import React from 'react'

const AIChat = () => {
  return (
    <div>AIChat</div>
  )
}

export default AIChat