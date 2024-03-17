import { Box, Skeleton } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = (newsData) => {
  // console.log("data inside carousel", newsData.newsData);
  return (
    <Box marginTop={"40px"} padding={"0.5em"} height={"fitContent"}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        pauseOnHover={true}
        autoPlaySpeed={1000}
      >
        {newsData.newsData.map((ele, i) => (
          <Box height={"150px"} key={i} marginX={"20px"}>
            <CarouselItem ele={ele} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default MyCarousel;
