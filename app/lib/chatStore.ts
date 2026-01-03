import { create } from 'zustand';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setLoading: (loading: boolean) => void;
  clearChat: () => void;
}

const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      id: '1',
      role: 'assistant',
      content: "🎓 StudyForge AI here! Lock in. Crush it. What's your study target today? How many hours you got?",
      timestamp: new Date(),
    },
  ],
  isLoading: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Date.now().toString(),
          timestamp: new Date(),
        },
      ],
    })),

  setLoading: (loading) => set({ isLoading: loading }),
  clearChat: () =>
    set({
      messages: [
        {
          id: '1',
          role: 'assistant',
          content: "🎓 StudyForge AI here! Lock in. Crush it. What's your study target today? How many hours you got?",
          timestamp: new Date(),
        },
      ],
    }),
}));

export default useChatStore;