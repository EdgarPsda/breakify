import { useSelector } from "react-redux";
import HighlightSymbols from "./highlightSymbols";

const DisplayResults = () => {
  const firstName = useSelector((state) => state.form.firstName);
  const lastName = useSelector((state) => state.form.lastName);

  return (
    <div className="relative">
      <div>
        <HighlightSymbols text={firstName}></HighlightSymbols>
      </div>
      <div>
        <HighlightSymbols text={lastName}></HighlightSymbols>
      </div>
    </div>
  );
};

export default DisplayResults;
