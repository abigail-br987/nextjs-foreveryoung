import AnimatedDiv from "@/components/minicomponents/AnimatedDiv";
import WhoAreWe from "@/components/parts/WhoAreWe";
import { StarIcon } from "@/components/figures/StarIcon";
function Nosotros() {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
        <AnimatedDiv className="max-w-screen-2xl px-8 py-12">
          <WhoAreWe />
        </AnimatedDiv>

        <StarIcon className="absolute text-deepOrange right-[6%] top-20" />
        <StarIcon className="absolute text-deepGreen right-[1%] bottom-10" />
        <StarIcon className="absolute text-darkBlue left-[0%] bottom-[36%]" />
 
    </div>
  );
}

export default Nosotros;
