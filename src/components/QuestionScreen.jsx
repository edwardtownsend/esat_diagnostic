function QuestionScreen({ question, questionNumber, totalQuestions, timeLeft, warningShown, onEndQuestion }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Pearson Blue Header */}
      <div className="text-white px-6 py-3 flex justify-between items-center" style={{ backgroundColor: '#0b5fa5' }}>
        <div className="text-base font-medium">
          ESAT Diagnostic Test
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
            Time Remaining {timeLeft}
          </div>
          <div className="text-sm text-white text-opacity-80">
            {questionNumber} of {totalQuestions}
          </div>
        </div>
      </div>

      {/* Lighter Blue Sub-header Strip */}
      <div className="px-6 py-2 flex justify-end items-center" style={{ backgroundColor: '#0e6fb8' }}>
        <button
          onClick={onEndQuestion}
          className="text-white text-sm font-medium hover:underline px-3 py-1"
        >
          End Question
        </button>
      </div>

      {/* Main Content Area - White, Centered */}
      <div className="flex-1 bg-white overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Warning message */}
          {warningShown && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <strong>10 seconds left! Make your best guess now!</strong>
              </div>
            </div>
          )}

          {/* Question Image - Centered */}
          <div className="flex items-center justify-center">
            <img
              src={question.image}
              alt={`Question ${questionNumber}`}
              className="max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionScreen
