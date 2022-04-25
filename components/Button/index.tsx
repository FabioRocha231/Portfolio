type ButtonProps = {
  className: string;
  content: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({ className, onClick, content }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} w-28`}>
      <p className="text-white">{content}</p>
    </button>
  );
};
