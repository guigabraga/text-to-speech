import { Context } from "./context";

export const Provider = ({ children }: { children: JSX.Element }) => {

  return(
    <Context
      value={{

      }}
    >
      {children}
    </Context>
  );
}