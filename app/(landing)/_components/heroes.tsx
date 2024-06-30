import Image from "next/image";

const Heroes = () => {
   return (
      <div className="flex flex-col items-center justify-center max-w-5xl">
         <div className="flex items-center">
            <div className="relative w-[600px] h-[600px] sm:w-[650px] sm:h-[650px] md:w-[700px] md:h-[700px]">
               <Image
                  src="/idea.png"
                  alt="ideas"
                  fill
                  className="object-contain"
               />
            </div>
         </div>
      </div>
   );
};

export default Heroes;
