import * as React from "react";

export default function TestimonialCard({
  rating,
  author,
  role,
  content,
  imageUrl,
  size = "regular",
}) {
  const isLarge = size === "large";

  return (
    <div
      className={`flex flex-col items-start ${
        isLarge ? "px-6 pt-6 pb-10" : "px-5 pt-5 pb-8"
      } rounded-${isLarge ? "2xl" : "xl"} bg-neutral-600 bg-opacity-10`}
    >
      <div className="flex gap-2 items-start">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            loading="lazy"
            src={`http://b.io/ext_${23 + i}-`}
            alt=""
            className={`object-contain shrink-0 ${
              isLarge ? "w-5" : "w-4"
            } aspect-[1.05]`}
          />
        ))}
      </div>
      <div
        className={`flex gap-2 items-center mt-5 ${
          isLarge ? "text-base" : "text-xs"
        } leading-6 text-neutral-100`}
      >
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${author}'s profile`}
          className={`object-contain shrink-0 self-stretch my-auto rounded-full ${
            isLarge ? "w-[38px]" : "w-[29px]"
          } aspect-square`}
        />
        <div className="self-stretch my-auto">
          <span className="font-medium">{author}</span>
          <br />
          {role}
        </div>
      </div>
      <div
        className={`self-stretch mt-5 ${
          isLarge ? "text-base" : "text-xs"
        } leading-6 text-neutral-100`}
      >
        {content}
      </div>
    </div>
  );
}
