import { StarIcon } from "../figures/StarIcon";
import { motion } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { IntroImage } from "../frames/IntroImage";

export function AnimatedLanding() {
  const { scrollY } = useViewportScroll();

  const yTransform1 = useTransform(scrollY, [0, 1300], [0, 850]);
  const yTransform2 = useTransform(scrollY, [0, 1300], [0, 650]);
  const yTransform3 = useTransform(scrollY, [0, 1300], [0, 350]);
  const yTransform4 = useTransform(scrollY, [0, 1300], [0, 550]);
  // const yTransform5 = useTransform(scrollY, [0, 600, 1300], [0, -100, -450]);

  const scaleTransform = useTransform(scrollY, [0, 1500], [1, 0.9]);

  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <> 
    <div className="w-full h-[150vh] -mt-14 relative overflow-hidden -z-20 bg-white">

      <motion.div
        className="absolute top-[22%] w-full"
        style={{
          y: yTransform1,
          scale: scaleTransform,
        }}
      >
        <div className=" m-auto w-4/5 sm:w-3/5 md:w-2/5">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="responsive"
            width={300}
            height={300}
            className="object-contain rounded-lg"
          />
        </div>
      </motion.div>

      <div className="w-full h-full">
        <motion.div
          className="w-full h-full absolute top-0 left-0 z-20 "
          style={{
            y: yTransform2,
            scale: scaleTransform,
          }}
        >
          <IntroImage //foto del aniversario
            img="/images/photo2.jpeg"
            className="w-2/5 sm:w-2/7 md:w-1/4  left-[1%] absolute -z-10 "
            animationProps={animationProps}
            imageClass="-rotate-2"
          />

          <IntroImage //foto de la campaña para  hijos de trabajadores
            img="/images/photo3.jpg"
            className=" w-3/5 md:w-2/5 absolute top-1/2 left-1/4"
            animationProps={animationProps}
            imageClass="-rotate-2"
          />
          <IntroImage //foto con la torta
            img="/images/photo16.png"
            className="absolute w-1/6 right-[3%] top-[26%]"
            animationProps={animationProps}
            imageClass="rotate-6"
          />
          <IntroImage //foto con la torta
            img="/images/fotoafuera.jpg"
            className="absolute w-3/7 md:w-1/5 bottom-[15%] right-[25%]"
            animationProps={animationProps}
            imageClass="rotate-6"
          />
          <StarIcon className="absolute text-deepOrange right-1/3 top-20" />
          <StarIcon className="absolute text-deepGreen left-1/3 " />
          <StarIcon className="absolute text-deepGreen left-[24%] top-[38%]" />
          <StarIcon className="absolute text-darkBlue left-[3%] bottom-[36%]" />
          <StarIcon className="absolute text-darkBlue right-[25%] bottom-[40%]" />

          <StarIcon className="absolute text-deepGreen left-20 top-10 " />
        </motion.div>

        <motion.div
          className="w-full h-full absolute top-0 left-0 z-20
            "
          style={{
            y: yTransform3,
            scale: scaleTransform,
          }}
        >
          <IntroImage //trazos creativos con las familias
            img="/images/photo4.jpg"
            className="absolute w-1/4 top-[40%] left-8"
            animationProps={animationProps}
            imageClass="rotate-3"
          />

          <IntroImage //foto con la ruleta
            img="/images/photo17.jpg"
            className="absolute w-1/7 top-[-1%] left-[32%]"
            animationProps={animationProps}
            imageClass="rotate-3"
          />

          <IntroImage
            img="/images/photo5.png" //foto con los concursantes yo y mishell
            className="absolute w-2/5 md:w-1/4 right-10 top-10"
            animationProps={animationProps}
            imageClass="rotate-0"
          />

          <StarIcon className="absolute text-deepOrange right-[34%] top-[48%]" />
          <StarIcon className="absolute text-deepGreen right-[30%] top-[2%]" />
          <StarIcon className="absolute text-deepOrange right-[14%] top-[38%]" />
        </motion.div>

        <motion.div
          className="w-full h-full absolute top-0 left-0 z-20"
          style={{
            y: yTransform4,
            scale: scaleTransform,
          }}
        >
          <IntroImage //foto con las tarjetas
            img="/images/photo8.png"
            className="w-1/5 right-0 absolute bottom-1/4"
            animationProps={animationProps}
            imageClass="rotate-2"
          />
          <IntroImage //manos en el centro
            img="/images/photo9.png"
            className="w-1/7 bottom-[20%] left-[5%] absolute"
            animationProps={animationProps}
            imageClass="-rotate-3"
          />

          <IntroImage //con las chicas
            img="/images/photo14.jpg"
            className="absolute w-1/5 top-[5%] right-[30%]"
            animationProps={animationProps}
            imageClass="-rotate-2"
          />

          <StarIcon className="absolute text-darkBlue left-[29%] top-[6%]" />
          <StarIcon className="absolute text-deepGreen bottom-[30%] left-[30%] " />
          <StarIcon className="absolute text-darkBlue bottom-[15%] right-[46%]" />
        </motion.div>
      </div>
      
  
    </div>

    </>
  );
}
