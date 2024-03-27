import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const HomeContent = () => {
  const { scrollYProgress } = useScroll();
  const translateVal = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const translate = useSpring(translateVal);

  return (
    <motion.div
      style={{ translateY: translate }}
      className="w-[50%] borde border-white z-10 md:w-[60%] h-fit my-auto flex-col flex justify-center items-center"
    >
      <div className="flex w-full  justify-center items-center flex-col gap-4 p-[20px]">
        <p className="bg-white uppercase font-black p-[4px_20px] text-priClr text-[14px] rounded-sm">
          Introducing
        </p>
        <div className="flex justify-center items-center gap-5">
          <div className="w-[5rem] sm:w-[9rem]  h-[0px] border-b-2 relative border-dashed border-white ">
            <div
              className={` absolute left-0 w-[10px] h-[10px] rounded-full  shadow-black shadow-sm bg-blue-500 -top-1 animbox `}
            ></div>
            <div
              className={` absolute -left-3 w-[7px] h-[7px] rounded-full  shadow-sm bg-white -top-[2.3px] `}
            ></div>
          </div>
          <div className="text-center">
            <div>
              <h1 className="text-[1rem] textShadow sm:text-6xl whitespace-nowrap uppercase text-white  font-black ">
                AI-Assessment
              </h1>
            </div>
          </div>
          <div className=" w-[5rem] sm:w-[9rem] h-[0px] border-b-2 relative border-dashed border-white ">
            <div
              className={` absolute left-0 w-[10px] h-[10px] rounded-full shadow-black shadow-sm bg-blue-500 -top-1 animbox2 `}
            ></div>
            <div
              className={` absolute -right-3 w-[7px] h-[7px] rounded-full  bg-white -top-[2.9px] `}
            ></div>
          </div>
        </div>
      </div>
      <span className=" sr-only">part 2</span>
      <div className=" text-center flex flex-col gap-10">
        <section>
          <h1 className=" text-3xl font-bold text-white">
            AI Powered Assessment Revolutionizing Skill Mastery
          </h1>
        </section>
        <section>
          <h1 className="text-lg font-medium text-center text-white">
            Revolutionize Your Learning Adventure: Experience Education Where AI
            Innovation Drives Personalized Support and Unlocks Potential
          </h1>
        </section>
        <section className="flex justify-center gap-6">
          <Link
            href={"/signup"}
            className="bg-white  text-priClr capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
          >
            <p className="font-bold">Sign Up</p>
            <AiOutlineDoubleRight className="text-[23px] text-priClr" />
          </Link>
          <Link
            href={"/login"}
            className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
          >
            <p className="font-bold">Login</p>
            <AiOutlineDoubleRight className="text-[23px] text-white" />
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default HomeContent;
