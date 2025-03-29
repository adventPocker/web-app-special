import Image from "next/image";

const OurVentures = () => {
    const ventures = [
      {
        image: "/company/icons/icons-4.png",
        title: "OPM Cinemas",
        description:
          "OPM Cinemas is a powerhouse in the film industry, delivering compelling stories and unforgettable visual experiences. Our productions feature top-tier talents, visionary directors, and cutting-edge storytelling.",
      },
      {
        image: "/company/icons/icons-3.png",
        title: "OPM Records",
        description:
          "OPM Records is a premier media production house, founded by acclaimed director Aashiq Abu. From movies to commercials and corporate films, we create audio-visual excellence.",
      },
      {
        image: "/company/icons/icons-2.png",
        title: "OPM Distributions",
        description:
          "OPM Distributions ensures that great films reach the right audiences. We handle theatrical releases, streaming partnerships, and international film distribution.",
      },
      {
        image: "/company/icons/icons-1.png",
        title: "OPM Studio",
        description:
          "OPM Studios is a creative hub producing films, ads, and branded content. Founded by industry experts, we focus on high-quality storytelling and innovative production techniques.",
      },
    ]
  
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
  
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {ventures.map((venture, index) => (
              <div key={index} className="flex flex-col h-full w-full   gap-3 duration-500  transform transition  hover:border rounded-[20px] p-5">
                {/* <Image src={venture.image} alt={venture.title} width={100} height={100} /> */}
                <Image src={venture.image} alt={venture.title} width={43} height={43} />
                <h3 className="text-3xl md:text-4xl font-light text-[#CCCCCC] mb-4">{venture.title}</h3>
                <p className="text-[#999999] text-base md:text-lg font-light leading-relaxed">{venture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default OurVentures
  
  