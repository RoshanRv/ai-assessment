import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {};

const Circuit = (props: Props) => {
  const draw: Variants = {
    hidden: {
      pathLength: 0,
      strokeWidth: 3.5,
      opacity: 0.4,
      strokeDashoffset: -10,
    },
    visible: {
      pathLength: 1,
      strokeWidth: 3.5,
      opacity: 0.4,
      strokeDashoffset: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="absolute top-0 w-full h-full">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        // xmlns:svgjs="http://svgjs.dev/svgjs"
        width="110%"
        height="100vh"
        preserveAspectRatio="none"
        viewBox="0 0 1500 714"
        initial="hidden"
        animate="visible"
      >
        <g mask='url("#SvgjsMask1159")' fill="none">
          <rect
            width="1366"
            height="768"
            x="0"
            y="0"
            fill='url("#SvgjsLinearGradient1160")'
          ></rect>
          <g>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 512.5L187.5 462.5L212.5 462.5L312.5 362.5L387.5 362.5L537.5 212.5L562.5 212.5L587.5 237.5L612.5 237.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM608.33 237.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1012.5 512.5L1112.5 412.5L1112.5 37.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1008.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1108.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1262.5 287.5L1137.5 287.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1258.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1133.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M37.5 387.5L412.5 12.5L512.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M33.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M312.5 687.5L487.5 687.5L537.5 637.5L537.5 487.5L437.5 387.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M308.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM433.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1262.5 62.5L1362.5 162.5L1362.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1258.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1358.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M762.5 687.5L687.5 762.5L587.5 762.5L512.5 687.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M758.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M437.5 737.5L462.5 762.5L562.5 762.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M433.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM558.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M187.5 62.5L12.5 237.5L12.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M183.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM8.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1087.5 537.5L1062.5 537.5L1037.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1083.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M812.5 612.5L687.5 737.5L587.5 737.5L537.5 687.5L537.5 662.5L562.5 637.5L712.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M808.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM708.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M512.5 387.5L962.5 387.5L987.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M508.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM983.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1112.5 662.5L1112.5 712.5L1062.5 762.5L712.5 762.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1108.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM708.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 437.5L312.5 262.5L312.5 137.5L412.5 37.5L487.5 37.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM483.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 437.5L1087.5 337.5L1087.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1083.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M37.5 587.5L87.5 587.5L187.5 487.5L262.5 487.5L337.5 562.5L337.5 662.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M33.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM333.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M512.5 312.5L512.5 262.5L537.5 237.5L562.5 237.5L687.5 362.5L737.5 362.5L937.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M508.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM933.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M462.5 562.5L512.5 612.5L512.5 637.5L487.5 662.5L362.5 662.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M458.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM358.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M487.5 537.5L337.5 537.5L262.5 462.5L262.5 437.5L312.5 387.5L412.5 387.5L487.5 462.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M483.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM483.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M787.5 437.5L762.5 412.5L487.5 412.5L437.5 362.5L412.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M783.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM408.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M587.5 187.5L462.5 62.5L412.5 62.5L362.5 112.5L362.5 312.5L337.5 337.5L312.5 337.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M583.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM308.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1237.5 387.5L1237.5 362.5L1187.5 312.5L1137.5 312.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1233.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1133.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1012.5 212.5L1012.5 387.5L912.5 487.5L912.5 687.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1008.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM908.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1187.5 737.5L1112.5 737.5L1087.5 762.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1183.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1083.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1012.5 62.5L1062.5 112.5L1062.5 337.5L1037.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1008.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M287.5 12.5L287.5 112.5L237.5 162.5L187.5 162.5L112.5 237.5L112.5 287.5L37.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M283.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM33.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1237.5 112.5L1337.5 212.5L1337.5 487.5L1237.5 587.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1233.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1233.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M262.5 737.5L237.5 712.5L237.5 587.5L187.5 537.5L187.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M258.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM183.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M787.5 237.5L762.5 237.5L537.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M783.33 237.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM533.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1137.5 187.5L1212.5 262.5L1287.5 262.5L1312.5 237.5L1312.5 212.5L1112.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1133.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1108.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M462.5 587.5L462.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M458.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM458.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 637.5L1012.5 612.5L1362.5 612.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1358.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1012.5 437.5L1087.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1008.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1083.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M862.5 687.5L912.5 737.5L1062.5 737.5L1087.5 712.5L1087.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M858.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1083.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M112.5 537.5L87.5 562.5L12.5 562.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M108.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM8.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M912.5 262.5L1012.5 162.5L1037.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M908.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M737.5 437.5L762.5 437.5L887.5 562.5L887.5 687.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M733.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM883.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1362.5 762.5L1112.5 762.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1358.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1108.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M837.5 112.5L1037.5 112.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M833.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1187.5 12.5L1337.5 162.5L1337.5 187.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1183.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1333.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M287.5 462.5L337.5 512.5L387.5 512.5L437.5 462.5L462.5 462.5L512.5 512.5L512.5 587.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M283.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1137.5 637.5L1162.5 637.5L1187.5 662.5L1187.5 712.5L1212.5 737.5L1362.5 737.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1133.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1358.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M412.5 762.5L362.5 712.5L312.5 712.5L262.5 762.5L137.5 762.5L12.5 637.5L12.5 587.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M408.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM8.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1287.5 62.5L1362.5 137.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1283.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1358.33 137.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M12.5 87.5L62.5 137.5L87.5 137.5L212.5 12.5L262.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M8.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM258.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1212.5 462.5L1137.5 462.5L1087.5 512.5L1062.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1208.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1058.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M387.5 762.5L362.5 737.5L312.5 737.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M383.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM308.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M12.5 62.5L62.5 12.5L187.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M8.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM183.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M237.5 137.5L187.5 87.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M233.33 137.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM183.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M837.5 562.5L812.5 562.5L687.5 437.5L512.5 437.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M833.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M362.5 462.5L412.5 412.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M358.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM408.33 412.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M937.5 437.5L912.5 412.5L787.5 412.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M933.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM783.33 412.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M162.5 212.5L187.5 187.5L212.5 187.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M158.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1062.5 487.5L1187.5 362.5L1187.5 337.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1058.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1183.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M87.5 412.5L87.5 362.5L287.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M83.33 412.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM283.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1312.5 587.5L1312.5 537.5L1337.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1308.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1333.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M762.5 212.5L812.5 162.5L912.5 162.5L937.5 137.5L1037.5 137.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M758.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 137.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1337.5 662.5L1337.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1333.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1333.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M712.5 337.5L687.5 337.5L612.5 262.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M708.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM608.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M812.5 462.5L912.5 462.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M808.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM908.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M312.5 462.5L337.5 462.5L362.5 487.5L387.5 487.5L437.5 437.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M308.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM433.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M112.5 612.5L212.5 612.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M108.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1337.5 87.5L1362.5 62.5L1362.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1333.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1358.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 187.5L62.5 262.5L37.5 262.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM33.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M662.5 87.5L587.5 12.5L562.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M658.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM558.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M887.5 737.5L737.5 737.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M883.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM733.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M62.5 112.5L37.5 87.5L37.5 62.5L62.5 37.5L162.5 37.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M58.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM158.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1062.5 562.5L1037.5 587.5L937.5 587.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1058.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM933.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1162.5 587.5L1062.5 587.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1158.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1058.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M862.5 262.5L887.5 262.5L962.5 337.5L962.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M858.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM958.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1337.5 62.5L1312.5 62.5L1287.5 37.5L1287.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1333.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1283.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M37.5 487.5L87.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M33.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM83.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M787.5 587.5L787.5 612.5L687.5 712.5L587.5 712.5L562.5 687.5L562.5 662.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M783.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM558.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M887.5 312.5L887.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M883.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM883.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M212.5 337.5L212.5 262.5L262.5 212.5L287.5 212.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M208.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM283.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1287.5 512.5L1212.5 587.5L1187.5 587.5L1112.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1283.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1108.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M712.5 537.5L712.5 612.5L737.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M708.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM733.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1237.5 662.5L1287.5 712.5L1312.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1233.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1308.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1037.5 262.5L1037.5 187.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1033.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M562.5 262.5L662.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M558.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM658.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M612.5 612.5L687.5 612.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M608.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM683.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1312.5 387.5L1162.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1308.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1158.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1137.5 162.5L1212.5 237.5L1287.5 237.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1133.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1283.33 237.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M87.5 637.5L212.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M83.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M737.5 112.5L737.5 187.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M733.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM733.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M837.5 587.5L837.5 637.5L812.5 662.5L812.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M833.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM808.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1137.5 87.5L1137.5 137.5L1212.5 212.5L1287.5 212.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1133.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1283.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1312.5 312.5L1212.5 312.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1308.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1208.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 662.5L212.5 662.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M962.5 62.5L912.5 12.5L887.5 12.5L812.5 87.5L812.5 137.5L762.5 187.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M958.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM758.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1062.5 687.5L1062.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1058.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1058.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 462.5L112.5 487.5L112.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM108.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M262.5 612.5L262.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M258.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM258.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1237.5 512.5L1237.5 487.5L1312.5 412.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1233.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1308.33 412.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M312.5 612.5L312.5 562.5L262.5 512.5L212.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M308.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 562.5L1037.5 562.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M712.5 287.5L712.5 312.5L737.5 337.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M708.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM733.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M262.5 62.5L237.5 37.5L212.5 37.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M258.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M537.5 187.5L387.5 337.5L362.5 337.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M533.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM358.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M462.5 162.5L387.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M458.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM383.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M87.5 187.5L87.5 212.5L62.5 237.5L37.5 237.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M83.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM33.33 237.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M437.5 587.5L412.5 562.5L362.5 562.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M433.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM358.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M387.5 12.5L312.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M383.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM308.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M662.5 187.5L512.5 37.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M658.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M87.5 512.5L37.5 462.5L37.5 412.5L62.5 387.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M83.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM58.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M287.5 312.5L337.5 312.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M283.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM333.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M787.5 362.5L787.5 337.5L837.5 287.5L887.5 287.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M783.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM883.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M87.5 662.5L87.5 687.5L137.5 737.5L237.5 737.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M83.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM233.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 337.5L187.5 287.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM183.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M387.5 212.5L437.5 262.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M383.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM433.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M387.5 187.5L512.5 187.5L537.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M383.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM533.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1262.5 412.5L1162.5 412.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1258.33 412.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1158.33 412.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M437.5 337.5L512.5 337.5L562.5 287.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M433.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM558.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1012.5 487.5L937.5 487.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1008.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM933.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M912.5 87.5L1012.5 87.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M908.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1008.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1187.5 62.5L1137.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1183.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1133.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1262.5 662.5L1237.5 637.5L1187.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1258.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1183.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M887.5 487.5L887.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M883.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM883.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M937.5 262.5L987.5 262.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M933.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM983.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M562.5 512.5L562.5 562.5L587.5 587.5L587.5 612.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M558.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM583.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M12.5 712.5L62.5 712.5L112.5 762.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M8.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM108.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M612.5 562.5L637.5 587.5L662.5 587.5L687.5 562.5L687.5 462.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M608.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM683.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M662.5 662.5L637.5 662.5L612.5 687.5L587.5 687.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M658.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM583.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M312.5 87.5L312.5 37.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M308.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM308.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1287.5 337.5L1287.5 387.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1283.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1283.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1287.5 662.5L1312.5 662.5L1337.5 637.5L1362.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1283.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1358.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M612.5 462.5L537.5 462.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M608.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM533.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M212.5 437.5L162.5 437.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M208.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM158.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M612.5 162.5L612.5 212.5L637.5 237.5L737.5 237.5L787.5 287.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M608.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM783.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M587.5 537.5L587.5 487.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M583.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM583.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M87.5 487.5L112.5 462.5L112.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M83.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM108.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M937.5 187.5L962.5 162.5L987.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M933.33 187.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM983.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M737.5 537.5L737.5 512.5L712.5 487.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M733.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM708.33 487.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M637.5 37.5L837.5 37.5L862.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M633.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM858.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M312.5 662.5L287.5 687.5L287.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M308.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM283.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M362.5 587.5L412.5 587.5L437.5 612.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M358.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM433.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1037.5 12.5L1037.5 62.5L1062.5 87.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1033.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1058.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M812.5 512.5L762.5 462.5L737.5 462.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M808.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM733.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 687.5L1037.5 687.5L1062.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1058.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M887.5 37.5L887.5 87.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M883.33 37.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM883.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M487.5 112.5L387.5 112.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M483.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM383.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 462.5L1037.5 462.5L1087.5 412.5L1087.5 387.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 462.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1083.33 387.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M962.5 512.5L987.5 537.5L1012.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M958.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1008.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M962.5 12.5L987.5 37.5L987.5 62.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M958.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM983.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M737.5 262.5L637.5 262.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M733.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM633.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M537.5 112.5L487.5 62.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M533.33 112.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM483.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M737.5 62.5L662.5 62.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M733.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM658.33 62.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1312.5 437.5L1312.5 462.5L1262.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1308.33 437.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1258.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M162.5 587.5L112.5 587.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M158.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM108.33 587.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M462.5 737.5L437.5 712.5L387.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M458.33 737.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM383.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M612.5 362.5L512.5 362.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M608.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 362.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M462.5 712.5L512.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M458.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM508.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 662.5L962.5 637.5L937.5 637.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM933.33 637.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M687.5 662.5L662.5 687.5L637.5 687.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M683.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM633.33 687.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M712.5 87.5L687.5 112.5L687.5 137.5L712.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M708.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM708.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M387.5 312.5L387.5 237.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M383.33 312.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM383.33 237.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M137.5 712.5L187.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M133.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM183.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M437.5 512.5L487.5 512.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M433.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM483.33 512.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M987.5 712.5L962.5 687.5L962.5 662.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M983.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM958.33 662.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1037.5 337.5L1037.5 287.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1033.33 337.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1033.33 287.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M612.5 537.5L637.5 562.5L662.5 562.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M608.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM658.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M762.5 87.5L787.5 112.5L787.5 137.5L762.5 162.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M758.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM758.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M962.5 712.5L912.5 712.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M958.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM908.33 712.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M737.5 12.5L837.5 12.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M733.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM833.33 12.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M37.5 762.5L87.5 762.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M33.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM83.33 762.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M287.5 612.5L212.5 537.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M283.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM208.33 537.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M487.5 162.5L462.5 137.5L437.5 137.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M483.33 162.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM433.33 137.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M862.5 612.5L862.5 562.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M858.33 612.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM858.33 562.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M837.5 212.5L787.5 262.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M833.33 212.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM783.33 262.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1162.5 87.5L1162.5 112.5L1187.5 137.5L1212.5 137.5"
              stroke-width="4.17"
              stroke="rgba(255, 255, 255, 0.48)"
            ></motion.path>
            <motion.path
              variants={draw}
              whileHover={{
                opacity: [1, 0.4],
                transition: { duration: 1.5 },
                stroke: "white",
              }}
              d="M1158.33 87.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0zM1208.33 137.5 a4.17 4.17 0 1 0 8.34 0 a4.17 4.17 0 1 0 -8.34 0z"
              fill="rgba(255, 255, 255, 0.48)"
            ></motion.path>
          </g>
        </g>
        <defs>
          <mask id="SvgjsMask1159">
            <rect width="1366" height="768" fill="#ffffff"></rect>
          </mask>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
            id="SvgjsLinearGradient1160"
          >
            <stop stop-color="rgba(73, 0, 127, 1)" offset="0"></stop>
            <stop stop-color="rgba(147, 0, 255, 1)" offset="1"></stop>
          </linearGradient>
        </defs>
      </motion.svg>{" "}
    </div>
  );
};

export default Circuit;
