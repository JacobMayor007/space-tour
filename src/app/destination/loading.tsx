import Image from "next/image";
export default function Loading() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <nav className="flex flex-row justify-between p-6">
        <div className="h-16 w-16 shadow rounded-full bg-slate-700 animate-pulse"></div>
        <div className="bg-slate-700 h-10 w-3/4 rounded-3xl  animate-pulse">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </nav>
      <div className="h-full flex justify-center items-center">
        <AnimatedText text="Loading ..." />
      </div>
    </div>
  );
}

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <h1 className="text-white font-bellefair text-4xl">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in-out"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
