import { Carousel } from "@material-tailwind/react";

export function MTCarousel({images}) {
  // let imgArr = [
  //   "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  //   "https://unsplash.com/photos/a-person-jumping-into-the-air-at-sunset-urBne08-lTQ",
  //   "https://unsplash.com/photos/a-blurry-photo-of-a-city-street-at-night-49lzNhusxSg",
  //   "https://unsplash.com/photos/a-blurry-photo-of-a-city-street-at-night-49lzNhusxSg"
  // ];

  console.log(images);

  return (
    <Carousel
    autoplay
    loop
    autoplayDelay = "3000"
//     transition={{type:"tween", duration:3000}}
      className="rounded-xl overflow-hidden object-center w-full max-h-[600px] "
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
        alt={index}
          className="h-full w-full object-center"
        />
      ))}
    </Carousel>
  );
}
