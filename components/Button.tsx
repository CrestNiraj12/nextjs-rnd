import { useRouter } from "next/router";
import { Button as ChakraButton } from "@chakra-ui/react";

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
    <ChakraButton
      colorScheme="red"
      className={className ? className : ""}
      onClick={() => (back ? router.back() : router.push(link!))}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
