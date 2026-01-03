'use client';

import { useState } from 'react';
import useStudyStore from '@/lib/store';
import { Plus } from 'lucide-react';

export default function ProgressTable() {
  const { progressRecords, addProgressRecord } = useStudyStore();
  const [newRecord, setNewRecord] = useState({
    goal: '',
    timeSpent: 0,
    completed: false,
    nextSteps: '',
  });

  const handleAddRecord = () => {
    if (!newRecord.goal.trim()) {
      alert('Enter a goal!');
      return;
    }

    addProgressRecord({
      date: new Date().toISOString().split('T')[0],
      ...newRecord,
    });

    setNewRecord({ goal: '', timeSpent: 0, completed: false, nextSteps: '' });
  };

  const totalTime = progressRecords.reduce((sum, r) => sum + r.timeSpent, 0);
  const completedGoals = progressRecords.filter((r) => r.completed).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Total Hours</p>
          <p className="text-4xl font-bold text-indigo-600">{(totalTime / 60).toFixed(1)}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Wins Today</p>
          <p className="text-4xl font-bold text-green-600">{completedGoals}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Goals Logged</p>
          <p className="text-4xl font-bold text-purple-600">{progressRecords.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Log Progress</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Study goal"
            value={newRecord.goal}
            onChange={(e) => setNewRecord({ ...newRecord, goal: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Minutes"
            value={newRecord.timeSpent}
            onChange={(e) =>
              setNewRecord({ ...newRecord, timeSpent: parseInt(e.target.value) || 0 })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Next steps"
            value={newRecord.nextSteps}
            onChange={(e) => setNewRecord({ ...newRecord, nextSteps: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddRecord}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            <Plus size={18} /> Log
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Goal</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Time (min)</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Next</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {progressRecords.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No progress logged yet. Start studying! 🚀
                  </td>
                </tr>
              ) : (
                progressRecords.map((record, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{record.date}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {record.goal}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.timeSpent}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          record.completed
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {record.completed ? '✅ Done' : '🔄 In Progress'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{record.nextSteps}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}