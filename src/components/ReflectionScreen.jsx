import { useState } from 'react'

function ReflectionScreen({ question, questionNumber, totalQuestions, onSubmit }) {
  const [confidence, setConfidence] = useState('')
  const [hardestPart, setHardestPart] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = {}
    if (!confidence) {
      newErrors.confidence = 'Please select a confidence level'
    }
    if (!hardestPart.trim()) {
      newErrors.hardestPart = 'Please enter what felt hardest'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit({
      confidence: parseInt(confidence),
      hardestPart: hardestPart.trim()
    })
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Pearson Blue Header */}
      <div className="text-white px-6 py-3 flex justify-between items-center" style={{ backgroundColor: '#0b5fa5' }}>
        <div className="text-base font-medium">
          ESAT Diagnostic Test
        </div>
        <div className="text-sm text-white text-opacity-80">
          Question {questionNumber} of {totalQuestions} - Reflection
        </div>
      </div>

      {/* Lighter Blue Sub-header Strip */}
      <div className="px-6 py-2" style={{ backgroundColor: '#0e6fb8' }}>
        {/* Empty - no controls */}
      </div>

      {/* Main Content Area - White, Centered */}
      <div className="flex-1 bg-white overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-6">
          {/* Question Display - Read-only Context */}
          <div className="mb-6 pb-6 border-b-2" style={{ borderColor: '#e0e0e0' }}>
            <div className="bg-gray-50 p-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="text-sm font-medium mb-3 text-gray-600" style={{ color: '#6c757d' }}>
                Question {questionNumber} (for reference)
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded border" style={{ borderColor: '#dee2e6' }}>
                <img
                  src={question.image}
                  alt={`Question ${questionNumber}`}
                  className="max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Reflection Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-medium mb-6" style={{ color: '#0b5fa5' }}>
              Reflection Required
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Confidence Rating */}
              <div>
                <label className="block text-gray-800 font-medium mb-3">
                  Confidence (1-5) <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setConfidence(value.toString())
                        setErrors(prev => ({ ...prev, confidence: '' }))
                      }}
                      className={`flex-1 py-3 px-4 border-2 text-center font-medium transition-colors ${
                        confidence === value.toString()
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                      style={confidence === value.toString() ? { borderColor: '#0b5fa5', backgroundColor: '#e3f2fd', color: '#0b5fa5' } : {}}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                {errors.confidence && (
                  <p className="text-red-600 text-sm mt-1">{errors.confidence}</p>
                )}
              </div>

              {/* Hardest Part */}
              <div>
                <label className="block text-gray-800 font-medium mb-3">
                  What felt hardest here? <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={hardestPart}
                  onChange={(e) => {
                    setHardestPart(e.target.value)
                    setErrors(prev => ({ ...prev, hardestPart: '' }))
                  }}
                  rows={4}
                  className={`w-full px-4 py-3 border-2 resize-none ${
                    errors.hardestPart ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-600`}
                  placeholder="Enter one sentence describing what felt hardest..."
                  style={{ 
                    focusBorderColor: '#0b5fa5'
                  }}
                />
                {errors.hardestPart && (
                  <p className="text-red-600 text-sm mt-1">{errors.hardestPart}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-medium text-base"
                  style={{ backgroundColor: '#0b5fa5' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0e6fb8'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0b5fa5'}
                >
                  Submit & Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReflectionScreen
