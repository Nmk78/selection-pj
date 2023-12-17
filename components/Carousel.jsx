import { Carousel } from "@material-tailwind/react";

export function MTCarousel({images}) {


  console.log(images);

  return (
    <Carousel
    autoplay
    loop
    autoplayDelay = "3000"
//     transition={{type:"tween", duration:3000}}
      className="rounded-xl w-full flex items-center h-auto overflow-hidden object-fill object-center max-h-[600px] "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images?.map((img, index) => (
        <img
        src={img}
        key={index}
        alt={index}
          className="h-auto max-h-[600px] object-fill object-center rounded-xl w-full overflow-hidden  " 
        />
      ))}
    </Carousel>
  );
}
