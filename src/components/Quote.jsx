export default function Quote({ quote, author }) {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="max-w-5xl px-6 relative">
        <span className="absolute -top-26 -left-6 -translate-x-8 text-blue font-bold text-[12em]">“</span>
        <p className="text-4xl font-bold text-gray">{quote}</p>
        <span className="absolute bottom-0 -right-16 -top-4 text-blue font-bold text-[12em] mirror-y">“</span>
        <span className="text-3xl font-bold text-lightGray mt-2 block text-right">{author}</span>
      </div>
    </div>
  );
}


