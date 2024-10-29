"use client";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import WhatDoWeDo from "@/components/parts/WhatDoWeDo";
import WhoAreWe from "@/components/parts/WhoAreWe";
import JoinUs from "@/components/parts/JoinUs";
import FollowUs from "@/components/parts/FollowUs";
interface StarIconProps {
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({
  className = "text-deepOrange",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`w-12 h-12 stroke-current stroke-2 ${className}`}
    >
      <path
        d="M12 2.5l2.95 6.36 7.03.61-5.34 4.88L18.4 22 12 18.68 5.6 22l1.76-7.65-5.34-4.88 7.03-.61L12 2.5z"
        className="stroke-darkBlue stroke-1"
        fill="currentColor"
      />
    </svg>
  );
};

interface IntroImageProps {
  img: string;
  className?: string;
  animationProps?: any;
  imageClass: string;
}

const IntroImage: React.FC<IntroImageProps> = ({
  img,
  className,
  animationProps,
  imageClass,
}) => {
  return (
    <motion.div className={`${className} bg-darkBlue rounded-lg`} {...animationProps}>
      <div
        className={`border-2 rounded-xl  bg-darkBlue border-darkBlue ${imageClass}`}
      >
        <Image
          src={img}
          alt="ForeverYoung images"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { scrollY } = useViewportScroll();

  const yTransform1 = useTransform(scrollY, [0, 1300], [0, -150]);
  const yTransform2 = useTransform(scrollY, [0, 1300], [0, 650]);
  const yTransform3 = useTransform(scrollY, [0, 1300], [0, 350]);
  const yTransform4 = useTransform(scrollY, [0, 1300], [0, 550]);
  const scaleTransform = useTransform(scrollY, [0, 1300], [1, 0.9]); 

  const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  return (
    <>
      <div className="w-screen h-[150vh] relative overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 w-full h-full  flex items-center justify-center -z-10"
          style={{
            y: yTransform1,
            scale: scaleTransform,
          }} 
        >
          <div className="w-2/5">
            <Image
              src="/images/logo.png" //foto del logo
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
            }}          >
            <IntroImage //foto del aniversario
              img="/images/photo2.jpeg"
              className="w-1/4  left-[1%] absolute "
              animationProps={animationProps}
              imageClass="-rotate-2"
            />

            <IntroImage //foto de la campaña para  hijos de trabajadores
              img="/images/photo3.jpg"
              className="w-2/5 absolute top-1/2 left-1/4"
              animationProps={animationProps}
              imageClass="-rotate-2"
            />
             <IntroImage //foto con la torta
              img="/images/photo16.jfif" 
              className="absolute w-1/6 right-[3%] top-[26%]"
              animationProps={animationProps}
              imageClass="rotate-6"
            />
            <IntroImage //foto con la torta
              img="/images/fotoafuera.jpg" 
              className="absolute w-1/5 bottom-[15%] right-[25%]"
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
            }}           >


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
              className="absolute w-1/4 right-10 top-10"
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
            }}           >
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

          </motion.div>
        </div>
      </div>

      <section className="h-screen w-screen bg-deepGreen border-2 border-black z-40">
        <div className="max-w-screen-2xl p-6 m-auto">
        Somos la organización de voluntariado de Servicio de Medicina del Adolescente del Hospital del Niño de Breña, Lima, Perú y estamos inscritos en el Registro Nacional de Organizaciones juveniles
        <WhatDoWeDo/>
        <WhoAreWe/>
        <JoinUs/>
        <FollowUs/>

        </div>
        
      </section>
      <div className="h-screen w-screen bg-green-500 border-2 border-black z-40">
        fewfeawfewfew fewa fwaef ewaf w
      </div>    </>
  );
}
