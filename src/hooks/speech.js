import { useState } from "react";

export const useSpeechSynthesis = (initialText = "how are you") => {
  const [text, setText] = useState(initialText);
  const [synth, setSynth] = useState(null);
  const [speaking, setSpeaking] = useState(false);

  if (typeof window !== "undefined" && !synth) {
    setSynth(window.speechSynthesis);
  }

  const speak = () => {
    if (synth) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => {
        setSpeaking(false);
      };
    }
  };

  const stopSpeaking = () => {
    if (synth && speaking) {
      synth.cancel();
      setSpeaking(false);
    }
  };

  return {
    text,
    setText,
    speak,
    speaking,
    stopSpeaking,
  };
};
