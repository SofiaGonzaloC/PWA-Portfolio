export const H1 = ({ text }: { text: string }) => {
  const colors = [
    "text-shocking",
    "text-breaker-bay",
    "text-tussock",
    "text-green-forest",
  ];

  return (
    <h1>
      {text.split("").map((char, index) => (
        <span key={index} className={colors[index % colors.length]}>
          {char}
        </span>
      ))}
    </h1>
  );
};
