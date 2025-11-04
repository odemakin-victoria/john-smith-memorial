import React from "react";
import Section from "../components/sessionManagement";

const Timeline = () => {
  const timelineData = [
    {
      year: "1975",
      date: "March 10th",
      title: "A New Beginning",
      description: "Born on March 17, 1948, in Lagos, Nigeria, to Mr. and Mrs. Adewale. \nHe was the second of four children and grew up in a loving Christian home"
    },
    {
      year: "1982",
      date: "July 1st",
      title: "Early Education",
      description: "Born on March 17, 1948, in Lagos, Nigeria, to Mr. and Mrs. Adewale. \nHe was the second of four children and grew up in a loving Christian home."
    },
    {
      year: "1984",
      date: "February 14th",
      title: "Secondary School Days",
      description: "Attended Methodist Boys High School, Lagos.\nHe was known for his leadership skills and calm personality."
    },
    {
      year: "1989",
      date: "June 9th",
      title: "University Years",
      description: "Gained admission into the University of Ibadan, where he studied Economics and graduated with honors"
    },
    {
      year: "1992",
      date: "October 18th",
      title: "Career Journey",
      description: "Started his career at the Nigerian Ports Authority, where he served diligently for over 30 years, rising to the position of Deputy Director of Operations"
    },
    {
      year: "1995",
      date: "August 6th",
      title: "Marriage & Family",
      description: "Married his beloved Elizabeth Adewale (née Olatunji).\nTogether they raised three wonderful children and built a home filled with love, faith, and laughter."
    },
		 {
      year: "1997",
      date: "December 15th",
      title: "Community & Faith",
      description: "John became an active member of St. John’s Anglican Church, where he served as a lay reader and mentor to many young adults."
    },
		 {
      year: "2010",
      date: "December 15th",
      title: "Retirement & Mentorship",
      description: "After retirement, he devoted his time to mentoring youths, writing, and community service, often saying, “To serve is to live."
    },
    {
      year: "2023",
      date: "August 10th",
      title: "Peaceful Transition",
      description: "John passed on peacefully on May 10, 2024, surrounded by family and loved ones.\nHis life remains a beacon of kindness, integrity, and faith for all who knew him."
    }
  ];

  return (
  <Section id="timeline" title="">

    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-6 px-4 sm:px-6 lg:px-8">
			 {/* Legacy Section */}
      <div className="text-center mb-8">
<p className="text-sm text-gray-600 mb-2 tracking-wide">Journey of Grace</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Moments That Mattered</h2>

				          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>

      </div>
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row md:gap-3 relative">
                  {/* Year Label */}
                  <div className="flex items-start md:w-24 md:flex-shrink-0 mb-2 md:mb-0">
                    <div className="text-[#deac6c] font-light text-3xl md:text-4xl leading-none">
                      {item.year}
                    </div>
                  </div>

                  {/* Circle with connecting line */}
                  <div className="hidden md:block relative flex-shrink-0">
                    <div className="w-7 h-7 rounded-full border-[2.5px] border-[#deac6c] bg-white flex items-center justify-center z-10 relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#deac6c]"></div>
                    </div>
                    {/* Vertical line connecting to next circle */}
                    {index < timelineData.length - 1 && (
                      <div className="absolute left-[13px] top-7 w-[2px] h-[calc(100%+60px)] bg-[#deac6c]"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-md shadow-md p-4 md:p-3 border-l-4 md:border-l-0 border-[#deac6c] ml-4 md:ml-0 mb-6 md:mb-0">
                    <h3 className="text-[#deac6c] font-semibold  text-base md:text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600  font-light text-xs md:text-sm leading-relaxed whitespace-pre-line mb-2">
                      {item.description}
                    </p>
                    {item.date && (
                      <p className="text-gray-400 text-xs font-light">
                        {item.date}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Spacing between timeline items */}
                {index < timelineData.length - 1 && (
                  <div className="h-12 md:h-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
		  </Section>

  );
};

export default Timeline;