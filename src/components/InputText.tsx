import { useContext } from "react";
import { Context } from "../contexts/context";

export default function InputText() {

  const {
     setInputValue,
  } = useContext(Context);

  return (
    <textarea
      className="inputText"
      rows={4}
      onChange={(e) => setInputValue(e.target.value)}
    >

    </textarea>
  );
}