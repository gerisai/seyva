"use client";
import { Fragment } from 'react';

export default function SlideHeader({ words, intervalTime = 3 }) {

  return (
    <div className="flex">
      <h1 className="text-gray text-8xl font-bold flex gap-3">
        Vivir es
        <span className="relative h-[1em] overflow-hidden inline-block">
          <span className="animate-slide block">
            { words.map((word,index) => (
              <Fragment key={index}>
              <span className={`text-${word.color}`}>{word.text}</span>
              <br />
              </Fragment>
            ))}
          </span>
        </span>
      </h1>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-25%);
          }
          45% {
            transform: translateY(-25%);
          }
          50% {
            transform: translateY(-50%);
          }
          70% {
            transform: translateY(-50%);
          }
          75% {
            transform: translateY(-75%);
          }
          95% {
            transform: translateY(-75%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-slide {
          animation: slide ${intervalTime*words.length}s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
