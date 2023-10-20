import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-4xl flex justify-between items-center ">
      <div className="flex flex-col">
        <h1 className=" text-yellow-400 ">Hello I&apos;M</h1>

        <div className="py-8 ">
          <h1 className=" text-5xl   text-white ">
            Jeff Ali <br />
            Frontend Developer
          </h1>
        </div>

        <p className=" text-white ">
          I&apos;m creative designer based in New York, and <br /> I&apos;m very
          passionate and dedicated to my work
        </p>

        <div className="flex gap-5 py-9">
          <button className=" bg-green-500 px-6 py-1 rounded-lg  ">
            Hire Me
          </button>
          <button className=" bg-green-500 px-2 py-1 rounded-lg  ">
            See My work
          </button>
        </div>
      </div>

      <div className="">
        <Image src="/arin.png" width={400} height={400} alt="arin"></Image>
      </div>
    </div>
  );
}
