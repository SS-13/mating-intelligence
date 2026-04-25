import { create } from 'zustand';
import { Gender, Answers } from '@/lib/questions';

interface QuizStore {
  gender: Gender | null;
  currentQuestion: number;
  answers: Answers;
  setGender: (gender: Gender) => void;
  setAnswer: (questionId: number, answer: boolean) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  gender: null,
  currentQuestion: 0,
  answers: {},
  setGender: (gender) => set({ gender }),
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),
  nextQuestion: () =>
    set((state) => ({ currentQuestion: Math.min(23, state.currentQuestion + 1) })),
  prevQuestion: () =>
    set((state) => ({ currentQuestion: Math.max(0, state.currentQuestion - 1) })),
  reset: () =>
    set({ gender: null, currentQuestion: 0, answers: {} }),
}));
