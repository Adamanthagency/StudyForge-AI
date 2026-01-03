'use client';

import { useState, useEffect } from 'react';
import useStudyStore from '@/lib/store';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [subject, setSubject] = useState('');
  const [sessionCount, setSessionCount] = useState(0);

  const { startPomodoro, endPomodoro, pomodoroSessions } = useStudyStore();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      if (!isBreak) {
        endPomodoro();
        setSessionCount((prev) => prev + 1);
        setIsBreak(true);
        setTimeLeft(5 * 60);
      } else {
        setIsBreak(false);
        setTimeLeft(25 * 60);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isBreak, endPomodoro]);

  const handleStart = () => {
    if (!subject.trim()) {
      alert('Enter a study subject first!');
      return;
    }
    if (!isRunning && sessionCount === 0) {
      startPomodoro(subject);
    }
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
    setSessionCount(0);
    setSubject('');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {isBreak ? '☕ Break Time' : '🎯 Focus Time'}
          </h2>
          <div className="text-7xl font-mono font-bold mb-6">
            {formatTime(timeLeft)}
          </div>
          <p className="text-lg mb-6">
            Session: <span className="font-bold">{sessionCount + 1}</span>
          </p>

          {sessionCount === 0 && (
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What subject? (Math, Bio, Dropshipping...)"
              className="w-full px-4 py-2 rounded-lg text-gray-900 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              disabled={isRunning}
            />
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleStart}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
            >
              {isRunning ? (
                <>
                  <Pause size={20} /> Pause
                </>
              ) : (
                <>
                  <Play size={20} /> Start
                </>
              )}
            </button>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
            >
              {isRunning ? (
                <>
                  <Pause size={20} /> Pause
                </>
              ) : (
                <>
                  <Play size={20} /> Start
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
            >
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Sessions</h3>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {pomodoroSessions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No sessions logged yet. Lock in! 🔥</p>
          ) : (
            pomodoroSessions.map((session, idx) => (
              <div
                key={session.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="font-bold text-indigo-600">| Pomo {idx + 1} |</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{session.subject}</p>
                  <p className="text-sm text-gray-600">{session.duration} min</p>
                </div>
                <div className="text-lg">✅</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}