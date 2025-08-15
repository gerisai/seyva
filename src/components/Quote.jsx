export default function Quote({ quote, author }) {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="max-w-5xl px-6 relative">
        <span className="absolute -top-13 -left-6 -translate-x-5 text-blue font-bold text-9xl">“</span>
        <p className="text-lg font-bold text-gray">{quote}</p>
        <span className="absolute bottom-0 right-0 translate-x-9 text-blue font-bold text-9xl translate-y-13">“</span>
        <span className="text-lg font-bold text-lightGray mt-2 block text-right">{author}</span>
      </div>
    </div>
  );
}


