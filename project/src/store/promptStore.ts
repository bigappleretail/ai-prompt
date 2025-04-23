import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SavedPrompt {
  id: string;
  title: string;
  content: string;
  category: string;
  niche: string;
  createdAt: number;
}

interface PromptState {
  savedPrompts: SavedPrompt[];
  addPrompt: (prompt: Omit<SavedPrompt, 'id' | 'createdAt'>) => void;
  removePrompt: (id: string) => void;
  getSavedPrompts: () => SavedPrompt[];
}

export const usePromptStore = create<PromptState>()(
  persist(
    (set, get) => ({
      savedPrompts: [],
      addPrompt: (prompt) => set((state) => ({
        savedPrompts: [
          {
            ...prompt,
            id: Math.random().toString(36).substring(2),
            createdAt: Date.now(),
          },
          ...state.savedPrompts,
        ],
      })),
      removePrompt: (id) => set((state) => ({
        savedPrompts: state.savedPrompts.filter((p) => p.id !== id),
      })),
      getSavedPrompts: () => get().savedPrompts,
    }),
    {
      name: 'prompt-storage',
    }
  )
);