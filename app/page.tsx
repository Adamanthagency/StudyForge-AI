'use client';

import { useState, useEffect } from 'react';
import ChatInterface from '@/components/ChatInterface';
import PomodoroTimer from '@/components/PomodoroTimer';
import ProgressTable from '@/components/ProgressTable';
import useStudyStore from '@/lib/store';
import { formatInTimeZone } from 'date-fns-tz';

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'chat' | 'pomodoro' | 'progress'>('chat');
  const streak = useStudyStore((s) => s.currentStreak);

  useEffect(() => {
    const updateTime = () => {
      const watTime = formatInTimeZone(
        new Date(),
        'Africa/Lagos',
        'HH:mm:ss zzz'
      );
      setCurrentTime(watTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">StudyForge AI 🎓</h1>
            <p className="text-sm text-gray-600">Elite study coach</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-mono text-gray-700">{currentTime}</div>
            <div className="text-xs text-gray-500">Lagos/WAT</div>
            <div className="mt-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              🔥 Streak: {streak} days
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'chat'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            💬 Coach Chat
          </button>
          <button
            onClick={() => setActiveTab('pomodoro')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'pomodoro'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ⏱️ Pomodoro
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'progress'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📊 Progress
          </button>
        </div>

        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'pomodoro' && <PomodoroTimer />}
        {activeTab === 'progress' && <ProgressTable />}
      </main>
    </div>
  );
}