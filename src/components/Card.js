import Image from "next/image";
import Button from "./Button";

export default function Card() {
  return (
    <div className="w-11/12 mx-auto max-w-screen-sm text-purple tracking-widest bg-white font-cursive py-6 px-6 rounded-lg">
      <div className="mx-auto max-w-md">
        <h3 className="font-cursive text-5xl">CHICKEN SANDWICH</h3>
        <div className="flex flex-row gap-6 w-5/6 h-5/6">
          <div className=" flex items-center justify-center">
            <Image
              src="/chicken-sandwich.png"
              className=""
              alt="chicken sandwich"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex-grow">
              <p className="text-l font-sans overflow-hidden">Pret a Manger</p>
            </div>
            <Button buttonName={"More Info"} buttonLink="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
