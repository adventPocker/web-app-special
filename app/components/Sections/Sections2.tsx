"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getMovieCardData } from "@/app/utils/getData"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import SwiperCore from "swiper"

SwiperCore.use([Autoplay])

interface ApiFilmCard {
  data: CardFilm[]
}

interface CardFilm {
  id: number
  attributes: {
    TitleImage: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    slug: string
  }
}

const Sections2 = () => {
  const [movieData, setMovieData] = useState<ApiFilmCard>()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await getMovieCardData()
        setMovieData(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching movie data:", error)
        setIsLoading(false)
      }
    }

    fetchMovieData()
  }, [])

  return (
    <section className="w-full py-16 md:py-40">
      <div className="max-w-[1204px] mx-auto px-4">
        <h2
          className="font-ClashGrotesk-Medium text-center text-[25px] md:text-[40px] font-medium leading-[35px] md:leading-[56px]"
          style={{
            background: "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          We are makers of unforgettable stories
        </h2>

        <div className="mt-12 md:mt-20 relative">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-800 rounded-lg p-4 h-[120px] flex items-center justify-center">
                    <div className="w-[180px] h-[80px] bg-gray-900 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView="auto"
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Pagination, Autoplay, Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                480: {
                  slidesPerView: 2.2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="movie-slider py-8"
            >
              {movieData?.data.map((data: CardFilm, index: number) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="movie-slide-container  backdrop-blur-sm rounded-lg p-4 transition-all duration-3000">
                    <button
                      onClick={() => router.push(`/projects/${data.attributes.slug}`)}
                      type="button"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Image
                        className="w-auto max-h-[120px] object-contain transition-transform duration-500 ease-in-out hover:scale-125"
                        src={`${data?.attributes.TitleImage.data.attributes.url}`}
                        alt={data?.attributes.slug || "Movie title"}
                        width={180}
                        height={120}
                        priority
                      />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {!isLoading && <div className="swiper-pagination mt-6"></div>}
        </div>
      </div>

      <div className="hidden md:block max-w-[1204px] mx-auto px-[121px] mt-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  )
}

export default Sections2
