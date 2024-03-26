import { create } from "zustand";

interface useQuizzType {
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedLevel: string;
  setSelectedLevel: (val: string) => void;
  ques: string;
  setQues: (val: string) => void;
  isStart: boolean;
  setIsStart: (val: boolean) => void;
  isEnd: boolean;
  setIsEnd: (val: boolean) => void;
  score: number;
  setScore: (val: number) => void;
  quesNo: number;
  setQuesNo: (val: number) => void;
  showQuiz: boolean;
  setShowQuiz: (val: boolean) => void;
}

const useQuizz = create<useQuizzType>((set) => ({
  selectedType: "mcq",
  setSelectedType: (val: string) => set({ selectedType: val }),
  selectedLevel: "begin",
  setSelectedLevel: (val: string) => set({ selectedLevel: val }),
  ques: "",
  setQues: (val: string) => set({ ques: val }),
  isEnd: false,
  isStart: false,
  quesNo: 0,
  score: 0,
  setIsEnd: (val) => set({ isEnd: val }),
  setIsStart: (val) => set({ isStart: val }),
  setQuesNo: (val) => set({ quesNo: val }),
  setScore: (val) => set({ score: val }),
  showQuiz: false,
  setShowQuiz: (val) => set({ showQuiz: val }),
}));

export default useQuizz;
