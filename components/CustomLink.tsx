import Link from "next/link";

type Props = {
  href: string;
  children: string;
  className?: string;
};

const CustomLink: React.FC<Props> = ({ href, children, className }) => {
  return (
    <Link className={`underline text-red-500 ${className}`} href={href}>
      {children}
    </Link>
  );
};

export default CustomLink;
