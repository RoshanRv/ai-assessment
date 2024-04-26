import { set } from "mongoose";
import { useState } from "react";

export const useSpeechSynthesis = (speaking, setSpeaking) => {
  const [synth, setSynth] = useState(null);

  if (typeof window !== "undefined" && !synth) {
    setSynth(window.speechSynthesis);
  }

  const speak = (text) => {
    if (synth && !speaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => {
        setSpeaking(false);
      };
    } else {
      synth.cancel();
      setSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    if (synth && speaking) {
      synth.cancel();
      setSpeaking(false);
    }
  };

  return {
    speak,

    stopSpeaking,
  };
};
