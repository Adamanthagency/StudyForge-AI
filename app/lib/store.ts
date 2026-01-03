import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Goal {
  id: string;
  subject: string;
  target: string;
  timeAvailable: number;
  createdAt: Date;
  completed: boolean;
}

interface PomodoroSession {
  id: string;
  subject: string;
  duration: number;
  startTime: Date;
  endTime?: Date;
  completed: boolean;
}

interface ProgressRecord {
  date: string;
  goal: string;
  timeSpent: number;
  completed: boolean;
  nextSteps: string;
}

interface StudyState {
  goals: Goal[];
  addGoal: (goal: Omit<Goal, 'id' | 'createdAt'>) => void;
  completeGoal: (id: string) => void;
  pomodoroSessions: PomodoroSession[];
  currentSession: PomodoroSession | null;
  startPomodoro: (subject: string) => void;
  endPomodoro: () => void;
  progressRecords: ProgressRecord[];
  addProgressRecord: (record: ProgressRecord) => void;
  currentStreak: number;
  updateStreak: () => void;
}

const useStudyStore = create<StudyState>()(
  persist(
    (set, get) => ({
      goals: [],
      pomodoroSessions: [],
      currentSession: null,
      progressRecords: [],
      currentStreak: 0,

      addGoal: (goal) =>
        set((state) => ({
          goals: [
            ...state.goals,
            {
              ...goal,
              id: Date.now().toString(),
              createdAt: new Date(),
            },
          ],
        })),

      completeGoal: (id) =>
        set((state) => ({
          goals: state.goals.map((g) =>
            g.id === id ? { ...g, completed: true } : g
          ),
        })),

      startPomodoro: (subject) =>
        set({
          currentSession: {
            id: Date.now().toString(),
            subject,
            duration: 25,
            startTime: new Date(),
            completed: false,
          },
        }),

      endPomodoro: () => {
        const session = get().currentSession;
        if (session) {
          set((state) => ({
            pomodoroSessions: [
              ...state.pomodoroSessions,
              { ...session, endTime: new Date(), completed: true },
            ],
            currentSession: null,
          }));
        }
      },

      addProgressRecord: (record) =>
        set((state) => ({
          progressRecords: [...state.progressRecords, record],
        })),

      updateStreak: () => {
        const state = get();
        const today = new Date().toDateString();
        const lastRecord = state.progressRecords[state.progressRecords.length - 1];
        
        if (lastRecord?.date === today && lastRecord?.completed) {
          set((s) => ({ currentStreak: s.currentStreak + 1 }));
        }
      },
    }),
    {
      name: 'studyforge-storage',
    }
  )
);

export default useStudyStore;