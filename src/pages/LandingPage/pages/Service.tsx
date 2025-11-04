import Section from "../components/sessionManagement";
import React, { useState } from "react";
import { MapPin, Calendar, Video, Users } from "lucide-react";

const Service = () => {


  return (
    <Section id="service" title="Service">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-600 mb-2 tracking-wide">In His Loving Memory</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Where We Gather to Remember</h2>
        <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="w-full">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b4!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1635184945315!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen= {true}
                loading="lazy"
                title="Service Location Map"
              ></iframe>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="w-full space-y-6">
            <div className="space-y-6">
              <p className="text-gray-700 font-light leading-relaxed">
                Please join us to pay a last tribute.
              </p>

              <p className="text-gray-700 font-light leading-relaxed">
                We invite you to join us in a solemn gathering as we come together to celebrate the life of our beloved John Smith Ayetere.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Your presence would mean a great deal to us as we remember and honor the legacy of a remarkable friend, husband, father,grandfather.
              </p>

              <p className="text-gray-700 leading-relaxed">
                In this moment of remembrance, let us come together to share our fond memories, offer our support to one another, and bid farewell to a truly exceptional individual.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Please join us in commemorating John's life and the positive impact he had on all of us.
              </p>
            </div>

            {/* Event Information */}
            <div className="space-y-4 pt-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
                <div>
                  <p className="font-medium" style={{ color: '#deac6c' }}>Location</p>
                  <p className="text-gray-700">San Jose Funeral Home</p>
                  <p className="text-gray-700">1050 S. Bascom Ave</p>
                  <p className="text-gray-700">San Jose,</p>
                  <p className="text-gray-700">California 95128</p>
                </div>
              </div>

              {/* Date/Time */}
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
                <div>
                  <p className="font-medium" style={{ color: '#deac6c' }}>Date/time</p>
                  <p className="text-gray-700">June 26, 2023</p>
                </div>
              </div>

              {/* Virtual Event */}
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
                <div>
                  <p className="font-medium" style={{ color: '#deac6c' }}>Virtual event</p>
                  <a href="#" className="text-[#deac6c] hover:underline">Click here →</a>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;