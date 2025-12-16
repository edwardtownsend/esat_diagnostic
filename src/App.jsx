import { useState, useEffect, useRef } from 'react'
import StartScreen from './components/StartScreen'
import QuestionScreen from './components/QuestionScreen'
import ReflectionScreen from './components/ReflectionScreen'
import EndScreen from './components/EndScreen'
import { questions } from './data/questions'

function App() {
  const [screen, setScreen] = useState('start') // 'start', 'question', 'reflection', 'end'
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(80)
  const [warningShown, setWarningShown] = useState(false)
  const [reflections, setReflections] = useState([])
  const timerRef = useRef(null)

  const startTest = () => {
    setScreen('question')
    setCurrentQuestion(0)
    setTimeLeft(80)
    setWarningShown(false)
  }

  const playBeep = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime)
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(1.0, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.0)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 2.0)
    } catch (e) {
      console.log('Audio not supported:', e)
    }
  }

  const showReflection = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setScreen('reflection')
  }

  const handleEndQuestion = () => {
    // Stop the timer immediately
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    // Show reflection screen
    showReflection()
  }

  const handleReflectionSubmit = (reflectionData) => {
    // Store reflection data
    setReflections(prev => [...prev, {
      questionNumber: currentQuestion + 1,
      ...reflectionData
    }])

    // Move to next question or end test
    if (currentQuestion >= questions.length - 1) {
      endTest()
    } else {
      setCurrentQuestion(prev => prev + 1)
      setTimeLeft(80)
      setWarningShown(false)
      setScreen('question')
    }
  }

  const endTest = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setScreen('end')
  }

  useEffect(() => {
    if (screen === 'question') {
      setTimeLeft(80)
      setWarningShown(false)
      
      let localWarningShown = false
      
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            timerRef.current = null
            showReflection()
            return 0
          }
          
          if (prev === 11 && !localWarningShown) {
            localWarningShown = true
            setWarningShown(true)
            playBeep()
          }
          
          return prev - 1
        })
      }, 1000)

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current)
          timerRef.current = null
        }
      }
    }
  }, [screen, currentQuestion])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {screen === 'start' && <StartScreen onStart={startTest} />}
      {screen === 'question' && (
        <QuestionScreen
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          timeLeft={timeLeft}
          warningShown={warningShown}
          onEndQuestion={handleEndQuestion}
        />
      )}
      {screen === 'reflection' && (
        <ReflectionScreen
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onSubmit={handleReflectionSubmit}
        />
      )}
      {screen === 'end' && <EndScreen />}
    </div>
  )
}

export default App
