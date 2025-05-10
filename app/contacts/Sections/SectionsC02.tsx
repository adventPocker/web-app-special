"use client";

import type React from "react";

import { useState } from "react";

export default function SectionsC02() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
      <div className="w-full  max-w-[1224px]  max-md:max-w-full max-md:my-10 ">
        <div className="md:py-40 py-14 w-full h-full ">
          <div
            className="text-center font-ClashGrotesk-Medium md:text-[40px]  md:leading-[56.6px] capitalize text-[25px] leading-[35px] font-medium"
            style={{
              background:
                "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get in touch with us !
          </div>
          {/* <h1 className="text-4xl md:text-5xl font-bold text-center text-[#e47a9e] mb-16"></h1> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:py-[74px] py-4">
            <div className="space-y-6 max-w-[470px]">
              <h2 className="text-xl md:text-4xl font-bold text-orange-200">
                Contact Us
              </h2>

              <p className="text-gray-300 leading-relaxed">
                We welcome your inquiries and feedback. Our dedicated team is
                ready to assist you with any questions or concerns you may have.
                Please feel free to reach out through the contact form below,
                and we will respond to your message at the earliest convenience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[25px]">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-gray-400 rounded-md p-3 text-white focus:outline-none focus:border-[#e47a9e] transition-colors"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-gray-400 rounded-md p-3 text-white focus:outline-none focus:border-[#e47a9e] transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border border-gray-400 rounded-md p-3 text-white focus:outline-none focus:border-[#e47a9e] transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#e47a9e] to-[#d35d85] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform rotate-45"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
