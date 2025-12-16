function EndScreen() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-medium mb-6" style={{ color: '#0b5fa5' }}>
          Test Complete
        </h2>

        <div className="border-l-4 p-6 mb-8 text-left" style={{ borderColor: '#0b5fa5', backgroundColor: '#f5f5f5' }}>
          <p className="text-gray-800 text-base mb-4">
            Great job completing the diagnostic test!
          </p>
          <p className="text-gray-800 text-base mb-4">
            Please submit your answer sheet via email to:
          </p>
          <a
            href="mailto:edwardtownsend2003@gmail.com"
            className="text-base font-medium"
            style={{ color: '#0b5fa5' }}
          >
            edwardtownsend2003@gmail.com
          </a>
        </div>

        <p className="text-sm text-gray-600">
          Thank you for taking the ESAT Diagnostic Test
        </p>
      </div>
    </div>
  )
}

export default EndScreen
