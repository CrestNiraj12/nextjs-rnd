import { useRouter } from "next/router";

type Props = {
  link?: string;
  children: string;
  back?: Boolean;
  className?: string;
};

const Button: React.FC<Props> = ({
  link,
  children,
  back = false,
  className,
}) => {
  const router = useRouter();
  return (
    <button
      className={`bg-red-700 py-2 px-5 border-0 rounded hover:bg-red-500 transition ease-in ${className}`}
      onClick={() => (back ? router.back() : router.push(link!))}
    >
      {children}
    </button>
  );
};

export default Button;
