import elementsData from "../../data/elementsData.json";

const HighlightSymbols = ({ text }) => {
  console.log("From symbols");
  const symbols = elementsData.elements.map((element) =>
    element.symbol.toLowerCase()
  );

  const regex = new RegExp(
    `(${symbols.sort((a, b) => b.length - a.length).join("|")})`,
    "gi"
  );
  //const regex = new RegExp(`(${symbols.join("|")})`, "gi");

  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="highlight text-2xl">
        {part}
      </span>
    ) : (
      <span key={index} className="text-2xl text-gray-300">
        {part}
      </span>
    )
  );
};

export default HighlightSymbols;
