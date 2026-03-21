"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/components/GlobalELements/Navbar";
import Footer from "@/app/components/GlobalELements/Footer";

const UpcomingAjaSundari = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);

  const divStyles = {
    background: `
      linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
      linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
      radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
    `,
  };

  return (
    <>
      <main className="h-[100vh] min-w-[100%] bg-[#121212]">
        {loading && (
          <div className="w-full h-full bg-gray-800 animate-pulse absolute top-0 left-0"></div>
        )}
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/upcoming/ajasundari/banner-01.png"
            loading="eager"
            alt="Aja Sundari Banner"
            width={1920}
            height={1080}
            className={`object-cover absolute top-0 min-h-[100vh] w-[100vw] h-full ${
              loading ? "hidden" : ""
            }`}
            onLoad={handleImageLoad}
          />
        </motion.div>
        
        <div className="items-center w-full flex flex-col px-5 max-md:px-5 h-[100vh] relative" style={divStyles}>
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10">
            <Navbar />
            <div className="w-full h-auto lg:pt-[46vh] pt-[51.36vh] sm:pt-[20vh]">
              <div className="w-full h-full">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col md:items-start">
                    <Image  
                      src="/upcoming/ajasundari/title.png"
                      alt="Aja Sundari Title"
                      width={400}
                      height={150}
                      className="md:min-h-[99px] max-h-[168px] w-auto h-auto object-contain"
                    />
                  </div>
                  <div className="md:h-11 py-2.5 justify-start items-center gap-2.5 inline-flex mt-4">
                    <div className="text-neutral-200 text-base font-bold font-lato capitalize leading-normal">
                      Coming Soon
                    </div>
                    <div className="w-[5px] h-[5px] bg-neutral-200 rounded-full" />
                    <div className="text-neutral-200 text-base font-bold font-lato capitalize leading-normal">
                      Drama / Mystery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Project Summary Section */}
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 bg-[#121212]">
        <div className="w-full max-w-[1128px] max-md:max-w-full max-md:my-10">
          <div className="md:py-20 py-[40px]">
            <div className="text-orange-200 md:text-[40px] font-medium font-ClashGrotesk-Medium md:leading-[56px] text-[31px] leading-[37px] tracking-0 text-start">
              Project Summary
            </div>
            <div className="md:flex gap-32 justify-normal mt-8">
              <div className="w-full min-w-[362px]">
                <div className="flex justify-normal">
                  <div className="w-1/2 flex flex-col gap-4">
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Rating
                    </div>
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Run time
                    </div>
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Release date
                    </div>
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Genre
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col gap-4 md:mt-0">
                    <div className="text-stone-300 md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base leading-[119%] tracking-tighter">
                      : — —
                    </div>
                    <div className="text-stone-300 md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base leading-[119%] tracking-tighter">
                      : — —
                    </div>
                    <div className="text-stone-300 md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base leading-[119%] tracking-tighter">
                      : Coming Soon
                    </div>
                    <div className="text-stone-300 w-full md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base leading-[119%] tracking-tighter">
                      : Drama / Mystery
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-8 md:mt-0">
                <div className="lg:w-[714px] text-zinc-400 md:text-[19px] md:font-normal font-archive md:leading-[26.6px] text-sm font-light leading-[140%] tracking-wider whitespace-pre-line">
                  A quiet village.{"\n"}
                  A missing presence.{"\n"}
                  And a story that slowly begins to unfold.{"\n\n"}
                  Aja Sundari follows an unusual disappearance that unsettles an entire community — where every silence feels like a clue, and every face hides a version of the truth.
                </div>
              </div>
            </div>
          </div>

          <div className="md:py-20 py-[40px] border-t border-zinc-800">
            <div className="text-orange-200 md:text-[40px] font-medium font-ClashGrotesk-Medium md:leading-[56px] text-[31px] leading-[37px] tracking-0 text-start mb-12">
              Credits
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
              {/* Lead Cast */}
              <div>
                <h3 className="text-white text-2xl font-bold font-archive mb-6 pb-2 border-b border-zinc-800">Lead Cast</h3>
                <div className="flex flex-col gap-4">
                  <div className="text-stone-300 text-lg font-Archivo">Joju George</div>
                  <div className="text-stone-300 text-lg font-Archivo">Lijomol Jose</div>
                </div>
              </div>

              {/* Lead Crew */}
              <div>
                <h3 className="text-white text-2xl font-bold font-archive mb-6 pb-2 border-b border-zinc-800">Lead Crew</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-stone-300 text-lg font-bold font-Archivo">Manu Antony</div>
                    <div className="text-zinc-500 text-sm">Writer, Editor & Director</div>
                  </div>
                  <div>
                    <div className="text-stone-300 text-lg font-bold font-Archivo">Aashiq Abu</div>
                    <div className="text-zinc-500 text-sm">Producer & Director of Photography</div>
                  </div>
                  <div>
                    <div className="text-stone-300 text-lg font-bold font-Archivo">Jaison Francis</div>
                    <div className="text-zinc-500 text-sm">Co-Producer</div>
                  </div>
                  <div>
                    <div className="text-stone-300 text-lg font-bold font-Archivo">Drumyuga</div>
                    <div className="text-zinc-500 text-sm">Music Director</div>
                  </div>
                </div>
              </div>

              {/* Full Credits snippet */}
              <div>
                <h3 className="text-white text-2xl font-bold font-archive mb-6 pb-2 border-b border-zinc-800">Details</h3>
                <div className="text-stone-300 text-sm font-Archivo leading-relaxed opacity-80 whitespace-pre-line">
                  An upcoming film from OPM Cinemas, directed by Manu Antony and produced by Aashiq Abu, starring Joju George and Lijomol in the lead. Releasing this year.
                  {"\n\n"}
                  Production Designer: Ajayan Challissery{"\n"}
                  Art Director: Midhun Challissery{"\n"}
                  Executive Producers: Abid Abu, Madan AVK{"\n"}
                  Co-Writer: Geethartha AR{"\n"}
                  Additional Screenplay: Saneth Radhakrishnan{"\n"}
                  Sync & Sound Design: Nixon George{"\n"}
                  Sound Mixing: Dan Jose{"\n"}
                  Costumes: Mashar Hamza{"\n"}
                  Make-up: Ronex Xavier{"\n"}
                  Action Choreographer: Robin{"\n"}
                  Visual Effects: Little Hippo{"\n"}
                  Colorist: Yashika Routray{"\n"}
                  Casting Director: Milind Siraj{"\n"}
                  Associate Director: Shelly Srees{"\n"}
                  Production Controller: Vimal Vijay{"\n"}
                  Stills: Sajith RM{"\n"}
                  Title Design: Nipin Narayanan{"\n"}
                  Publicity Design: Roasted Paper{"\n"}
                  Sync Sound: Vivek KM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UpcomingAjaSundari;
