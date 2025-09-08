export default function SimpleQuote({ quote, author, colorClass }) {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="md:w-3/4 xs:w-full relative">
        <p className={`${colorClass}
          lg:text-5xl
          md:text-4xl
          sm:text-3xl
          xs:text-2xl
        `}>
            {quote}
        </p>
        <span className="text-lightgray-simple mt-2 block text-right
          lg:text-5xl
          md:text-4xl
          sm:text-3xl
          xs:text-2xl
        ">
          {author}
        </span>
      </div>
    </div>
  );
}
