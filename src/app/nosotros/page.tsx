import AnimatedDiv from "@/components/minicomponents/AnimatedDiv"
import WhoAreWe from "@/components/parts/WhoAreWe"
function Nosotros () {
    return (
        <div className="bg-white flex flex-col items-center justify-center">       
        <AnimatedDiv>
        <div className="max-w-screen-2xl px-8 py-12">
          <WhoAreWe />
        </div>
      </AnimatedDiv>
      </div>
    )
}

export default Nosotros