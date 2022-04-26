type AboutProps = {
  title?: string;
  description: string;
};

export const AboutMe = ({ title, description }: AboutProps) => {
  return (
    <aside className="w-[320px] backdrop-blur-sm bg-[#0C0C0C]/80 rounded-xl p-4 shadow-inner shadow-cyan-500/75 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105">
      {title && (
        <h1 className="text-white text-3xl font-bold mb-3 opacity-70">
          {title}
        </h1>
      )}
      <p className="text-center text-white font-normal font-montserrat">
        {description}
      </p>
    </aside>
  );
};
