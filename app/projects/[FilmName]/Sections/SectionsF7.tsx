import React from 'react'
import Gallery from './../Elements/Gallery'
interface propSectionsF7 {
  GalleryData:GalleryItem[]
}
const SectionsF7 = ({GalleryData}:propSectionsF7) => {
  return (
    <>
    
    <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-11">

          <Gallery  ImageData={GalleryData}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionsF7