type Props = {
  children: JSX.Element | JSX.Element[];
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="w-full h-[100vh] flex flex-col justify-center items-center">
      {children}
    </main>
  );
};

export default Main;
