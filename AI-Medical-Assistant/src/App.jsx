
import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUp, FaRobot } from "react-icons/fa";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  // Auto resize textarea
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  // Send message
  const handleSend = () => {
    if (input.trim() === "") return;

    const message = {
      text: input,
      sender: "user"
    };

    setMessages((prev) => [...prev, message]);
    setInput("");

    // Reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  // Resize on input change
  useEffect(() => {
    autoResize();
  }, [input]);

  return (
    <div className="h-screen flex flex-col items-center bg-white">

      {/* Header */}
      <div className="flex justify-center items-center gap-2 bg-gray-900 text-white w-full p-6 text-xl font-semibold rounded-b-3xl shadow-lg">
        <h2>AI Medical Assistant</h2>
        <FaRobot />
      </div>

      {/* Chat Area */}
      <div className="w-2/4 flex-1 pt-4 overflow-y-auto px-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div className="bg-gray-200 p-3 text-md rounded-2xl shadow-md max-w-md whitespace-pre-wrap">
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="w-full flex justify-center fixed bottom-4 left-0 px-4">
        <div className="w-full max-w-3xl bg-gray-800 rounded-2xl p-3 flex items-end gap-2 shadow-lg">

          <textarea
            ref={textareaRef}
            value={input}
            rows={1}
            placeholder="Message ChatGPT..."
            onChange={(e) => {
              setInput(e.target.value);
              autoResize();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 resize-none bg-transparent text-white outline-none max-h-40 overflow-y-auto"
          />

          <button
            onClick={handleSend}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowUp />
          </button>

        </div>
      </div>

    </div>
  );
};

export default App;




// import React from 'react'
// import { useState } from 'react';
// import { FaArrowUp, FaRobot } from "react-icons/fa";

// const App = () => {

//   const[messages, setMessages] = useState([]);
//   const[input, setInput] = useState("");

//   // function arrayInput() {
//   //    const message = {
//   //     text : input,
//   //     sender : "user"
//   //   }
//   //   if(input.trim() === "") return; // Prevent adding empty messages
//   //   setMessages([...messages, message]);
//   //   setInput("");
//   // }



//   const autoResize = () => {
//     const textarea = textareaRef.current;
//     textarea.style.height = "auto";
//     textarea.style.height = textarea.scrollHeight + "px";
//   };

//   // Reset height after send
//   const handleSend = () => {
//      const message = {
//       text : input,
//       sender : "user"
//     }
//     if(input.trim() === "") return; // Prevent adding empty messages
//     setMessages([...messages, message]);

//     setInput("");
//     textareaRef.current.style.height = "auto";
//   };

//   useEffect(() => {
//     autoResize();
//   }, [input]);

  
  

//   return (
//     <div className=" h-screen bg-blue-200 flex flex-col items-center bg-white-100 ">
//       {/* Header */}
//       <div className=' flex justify-center items-center gap-2 bg-gray-900 text-white w-full p-6 text-center font-semibold text-xl rounded-b-4xl shadow-lg  '>
//         <h2>AI Medical Assistant </h2>
//         <FaRobot />
//       </div>

       

//       {/* Main Content */}
//       <div className='  w-2/4 flex-1 pt-3 text-left overflow-y-auto rounded-lg  '>
//           {messages.map((message, index) => (
//             <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-6 `}>
//                <div className=' bg-gray-200 text-shadow-blue-950 p-3 text-md font-semibold rounded-2xl shadow-md max-w-md whitespace-pre-wrap'>
//                 {message.text}
//                </div>
//             </div>
//           ))}
//       </div>


//       {/* Input area */}
//      <div className="w-full flex justify-center fixed bottom-4 left-0 px-4">
//       <div className="w-full max-w-3xl bg-gray-800 rounded-2xl p-3 flex items-end gap-2 shadow-lg">
//         <textarea
//           ref={textareaRef}
//           value={input}
//           onChange={(e) => {
//             setInput(e.target.value)
//               autoResize();
//           }}
//           placeholder="Message ChatGPT..."
//           rows={1}
//           className="flex-1 resize-none bg-transparent text-white outline-none max-h-40 overflow-y-auto"
//         />

//         <button
//           onClick={handleSend}
//           className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
//         >
//           <FaArrowUp />
//         </button>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default App
