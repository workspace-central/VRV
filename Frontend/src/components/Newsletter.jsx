import * as React from "react";

export default function Newsletter() {
  return (
    <section
      className="flex flex-col mt-11 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full"
      aria-labelledby="newsletter-heading"
    >
      <div className="flex flex-col px-2 pt-28 pb-20 w-full rounded-2xl bg-neutral-600 bg-opacity-10 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start pr-9 h-[203px] max-md:pr-5 max-md:max-w-full">
          <h2
            id="newsletter-heading"
            className="flex-1 shrink text-5xl font-bold text-white basis-0 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Join Our Newsletter Community
          </h2>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <p className="text-lg leading-7 text-justify text-white max-md:max-w-full">
              Stay informed with the latest security insights, threat updates,
              and exclusive offers delivered straight to your inbox! Sign up now
              to ensure you never miss an essential update in cybersecurity!
            </p>
            <form
              className="flex flex-col pt-5 pb-12 mt-6 max-w-full w-[513px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-wrap gap-5 w-full text-base max-md:max-w-full">
                <div className="flex flex-auto gap-4 items-center self-start">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="flex-1 shrink gap-2 self-stretch p-3 my-auto w-full bg-white border border-black border-solid min-w-[240px]"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="gap-2.5 self-stretch px-8 py-3.5 leading-snug bg-white text-stone-950 max-md:px-5"
                >
                  Join Now
                </button>
              </div>
              <p className="self-start mt-6 text-xs text-white underline decoration-auto decoration-solid underline-offset-auto max-md:max-w-full">
                By clicking Sign Up you're confirming that you agree with our{" "}
                <a href="#" className="text-white underline">
                  Terms and Conditions
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
