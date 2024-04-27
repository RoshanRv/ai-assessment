import { create } from "zustand";

interface useCaptionProp {
  allCaptions: string[];
  setAllCaptions: (allCaptions: string[]) => void;
}

export const useCaption = create<useCaptionProp>((set) => ({
  allCaptions: [],
  setAllCaptions: (allCaptions) => set({ allCaptions: allCaptions }),
}));
