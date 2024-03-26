import { useRouter } from "next/navigation";
import Circuit from "./Circuit";

function HomeBG({ children }: any) {
  const route = useRouter();

  function goLoginpage() {
    return route.push("/login");
  }

  return (
    <div className={` `}>
      {/* SVG */}
      <div className="relative w-screen h-screen borde-2 border-white  flex justify-center">
        <Circuit />
        {children}
      </div>
    </div>
  );
}

export default HomeBG;
