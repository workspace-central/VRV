import * as React from "react";
import { newsLetter } from "../constants";

export default function Newsletter() {
  // Ref for the input box
  const emailInputRef = React.useRef(null);

  const handleJoinNow = () => {
    if (emailInputRef.current) {
      emailInputRef.current.value = ""; // Clear the input box
    }
  };

  return (
    <section
      className="NewsletterSection w-[1280px] h-[393px] relative flex-col justify-start items-start inline-flex"
      aria-labelledby="newsletter-heading"
    >
      <div className="Rectangle w-[1280px] h-[393px] bg-[#4c4c4c]/10 from-[#100c08] via-[#4c4c4c] to-white rounded-[15px] border-2 border-white backdrop-blur-[35px] flex flex-col justify-center items-center">
        <div className="Container w-[1264px] h-[203px] pr-[35px] justify-start items-start gap-[97px] inline-flex">
          {/* Heading */}
          <div className="Heading grow shrink basis-0 text-white text-5xl font-bold font-['Inter'] leading-[57.60px] p-[12px]">
            {newsLetter[0].title}
          </div>

          {/* Content */}
          <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            {/* Description */}
            <div className="Text self-stretch text-justify text-white text-lg font-normal font-['Inter'] leading-[27px]">
              {newsLetter[0].text}
            </div>

            {/* Form and Terms */}
            <div className="Actions w-[513px] h-[162px] relative">
              {/* Form */}
              <div className="Form w-[359px] left-0 top-[22px] absolute justify-end items-center gap-4 inline-flex">
                <div className="TextInput grow shrink basis-0 h-12 p-3 bg-white border border-black justify-start items-center gap-2 flex">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    ref={emailInputRef} // Attach ref to the input box
                    className="w-full bg-transparent text-[#4f4f4f] text-base font-normal font-['Roboto'] leading-normal outline-none"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="ByClickingSignUpYouReConfirmingThatYouAgreeWithOurTermsAndConditions left-0 top-[95px] absolute">
                <span className="text-white text-xs font-normal font-['Roboto'] leading-[18px]">
                  By clicking Join Now you're confirming that you agree with our{" "}
                </span>
                <a
                  href="#"
                  className="text-white text-xs font-normal font-['Roboto'] underline leading-[18px]"
                >
                  Terms and Conditions
                </a>
                <span className="text-white text-xs font-normal font-['Roboto'] leading-[18px]">
                  .
                </span>
              </div>

              {/* Submit Button */}
              <div className="Frame53 px-8 py-3.5 left-[378px] top-[21px] absolute bg-white justify-center items-center gap-2.5 inline-flex">
                <button
                  type="button"
                  onClick={handleJoinNow} // Call the function to clear input
                  className="JoinNow text-[#100c08] text-base font-normal font-['Inter'] leading-snug"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
