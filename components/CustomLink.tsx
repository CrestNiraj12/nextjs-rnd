import Link from "next/link";

type Props = {
  href: string;
  children: string;
  className?: string;
};

const CustomLink: React.FC<Props> = ({ href, children, className }) => {
  return (
    <Link
      className={`underline dark:text-red-500 text-red-600 ${
        className ? className : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
