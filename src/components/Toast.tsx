"use client";

import useToast from "../store/useToast";

const Toast = () => {
  const {
    toast: { msg, variant },
    showToast,
  } = useToast((state) => ({
    toast: state.toast,
    showToast: state.showToast,
  }));

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-[999] max-w-[90%] boxShadow -translate-x-1/2 border-2 bg-white px-2 py-1 text-center font-semibold capitalize shadow-xl transition-all md:px-5 md:py-3 ${
        variant === "success" ? "border-emerald-500" : "border-red-600"
      } delay-[10ms] ${
        showToast ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } `}
    >
      <h4 className="text-wrap">{`${
        variant === "error" ? "❌ " : "✅ "
      } ${msg}`}</h4>
    </div>
  );
};

export default Toast;
