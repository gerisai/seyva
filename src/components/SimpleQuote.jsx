export default function SimpleQuote({ quote, author, colorClass }) {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="max-w-5xl px-6 relative">
        <p className={`text-lg ${colorClass}`}>{quote}</p>
        <span className="text-xl text-lightGray2 mt-2 block text-right">{author}</span>
      </div>
    </div>
  );
}
