/* eslint-disable react/prop-types */
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

// article_photo_url
// :
// "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJpVPyvFe63iT7q0nhc8A_bprf_O3B4d0zxuR73aBTcT4MFNTGOCwBbZJmKTI"
// article_title
// :
// "Paisalo Digital Ltd leads gainers in 'A' group"
// article_url
// :
// "https://www.business-standard.com/markets/capital-market-news/paisalo-digital-ltd-leads-gainers-in-a-group-124031500331_1.html"
// post_time_utc
// :
// "2024-03-15 06:30:00"
// source
// :
// "Business Standard"
// stocks_in_news
// :
// Array(1)
// 0
// :
// change
// :
// 12
// change_percent
// :
// 9.7245
// country_code
// :
// "IN"
// currency
// :
// "INR"
// exchange
// :
// "NSE"
// exchange_close
// :
// "2024-03-15 15:30:00"
// exchange_open
// :
// "2024-03-15 09:15:00"
// google_mid
// :
// "/g/11f3vp3mgn"
// last_update_utc
// :
// "2024-03-15 10:29:09"
// name
// :
// "Paisalo Digital Ltd"
// pre_or_post_market
// :
// null
// pre_or_post_market_change
// :
// null
// pre_or_post_market_change_percent
// :
// null
// previous_close
// :
// 123.4
// price
// :
// 135.4
// symbol
// :
// "PAISALO:NSE"
// timezone
// :
// "Asia/Calcutta"
// type
// :
// "stock"
// utc_offset_sec
// :
// 19800
const CarouselItem = ({ ele }) => {
  return (
    <>
      <Stack
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
        height={"100%"}
        borderRadius={"25px"}
        gap={"20px"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Avatar src={ele.article_photo_url} />
          <Typography>{ele.source}</Typography>
        </Stack>
        <Link sx={{ cursor: "pointer" }}>{ele.article_title}</Link>
      </Stack>
    </>
  );
};

export default CarouselItem;
