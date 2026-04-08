import React from 'react'

const App = () => {
  return (
    <div className="h-screen bg-blue-200 flex flex-col items-center bg-white-100">
      {/* Header */}
      <div className=' bg-gray-900 text-white w-full p-6 text-center font-semibold text-xl rounded-b-4xl shadow-lg '>
        <h2>AI Medical Assistant</h2>
      </div>
      {/* Main Content */}
      <div className=' bg-blue-100 w-3/4 flex-1 p-8 text-left border-2 border-gray-300 overflow-y-auto rounded-lg shadow-md mb-4 mt-3'>
        <p className=' text-blue-950 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>
      {/* Input area */}
      <div className=' w-3/4 mb-6 flex justify-center'>
        <input
          type="text"
          placeholder="Type Your Symptoms Here..."
          className=" bg-white w-2/4 p-3 text-gray-800 placeholder:text-gray-500 border rounded-full shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
          Submit
        </button>
      </div>

    </div>
  )
}

export default App
