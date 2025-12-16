function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-medium mb-6 text-gray-900" style={{ color: '#0b5fa5' }}>
          ESAT Diagnostic Test
        </h1>

        <div className="border-l-4 p-6 mb-8" style={{ borderColor: '#0b5fa5', backgroundColor: '#f5f5f5' }}>
          <p className="text-gray-800 leading-relaxed mb-4">
            This <span className="font-semibold">30-question test</span> is highly time-pressured 
            (<span className="font-semibold" style={{ color: '#d32f2f' }}>80 seconds per question</span>) to identify gaps in your knowledge. 
            You cannot go back to previous questions.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            The number of questions on each topic is proportional to the typical number of questions on that topic in the ESAT.
          </p>
          <p className="text-gray-800 leading-relaxed">
            <span className="font-semibold">Tip:</span> You might need to zoom in to read some questions! If you don't get an answer in 80 seconds, give it your best guess!
          </p>
        </div>

        <button
          onClick={onStart}
          className="px-6 py-2 text-white font-medium text-base"
          style={{ backgroundColor: '#0b5fa5' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0e6fb8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0b5fa5'}
        >
          Start Test
        </button>
      </div>
    </div>
  )
}

export default StartScreen
