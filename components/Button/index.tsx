type ButtonProps = {
  className: string;
  content: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({ className, onClick, content, href }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} w-28`}>
      <a href={href} className="text-white">
        {content}
      </a>
    </button>
  );
};
