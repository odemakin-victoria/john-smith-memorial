import Section from "../components/sessionManagement";
import React from "react";

const Obituary = () => (
  <Section id="biography" title="">
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Honor Section */}
      <div className="text-center mb-12 bg-gradient-to-b from-white to-orange-50 py-9 ">
        <p className="text-sm text-gray-600 mb-4 tracking-wide">Honoring John Smith Ayetere</p>
         <div className=" flex items-start gap-4">
              <span className="text-6xl text-yellow-600 font-serif leading-none">
                "
              </span>
              <div>
                <p className="text-yellow-600 text-xl lg:text-2xl font-light leading-relaxed mb-3">
                  For this God is our God forever and ever; He will be our guide
                  even to the end.
                </p>
                <p className="font-light text-center text-sm tracking-wider uppercase">
                  PSALM 48:14
                </p>
              </div>
							 <span className="text-6xl text-yellow-600 font-serif leading-none">
                "
              </span>
            </div>
      </div>

      {/* Legacy Section */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2 tracking-wide">Legacy of Love</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Life Well Lived</h2>
				          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>

      </div>

        <div className="text-gray-900 font-light leading-relaxed">
              {/* First paragraph with drop cap */}
              <p className="mb-4">
                <span className="float-left text-7xl font-serif leading-none mr-3 mt-1 text-gray-900">
                  J
                </span>
                <span className="inline">
                  ohn Smith Ateyere, a beloved husband, father, and dedicated
                  community member, peacefully passed away on March 25, 2023 -
                  at the age of 73.
                </span>
              </p>

              <p className="mb-4 clear-left">
                Born on March 10, 1950, John Smith grew up with strong family
                values and a deep sense of community. He excelled academically
                and athletically in high school, eventually earning a Bachelor's
                degree in Business Administration. In 1975, John Smith married
                his love, Stephanie, and they shared 48 years of a loving
                marriage, raising two children, Emily and Michael, and becoming
                adoring grandparents to Grace, Ethan, and Lily.
              </p>

              <p className="mb-4">
                Professionally, John Smith had a distinguished career in
                finance, marked by his integrity and mentorship of young
                professionals. He also dedicated his time to various charitable
                causes, leaving a positive impact on his community. John Smith
                had a passion for the outdoors, often spending weekends camping,
                fishing, and hiking with his family, instilling a love for
                nature in his loved ones.
              </p>

              <p>
                John Smith is survived by his wife, children, grandchildren, and
                siblings, Robert Jr. and Susan. A memorial service will be held
                on October 2, 2023, at St. Mary's Community Church at 2:00 PM.
                In lieu of flowers, the family requests donations to the John
                Smith Anderson Memorial Scholarship Fund, supporting
                underprivileged youth's education in the community. John Smith's
                legacy lives on through the countless lives he touched, the
                values he upheld, and the love he shared. He will be deeply
                missed but forever cherished.
              </p>
            </div>
    </div>
  </Section>
);

export default Obituary;