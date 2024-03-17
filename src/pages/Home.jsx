import axios from "axios";
import React, { useEffect, useState } from "react";
import MyCarousel from "../components/carousel";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import StockTable from "../components/Table";
const Home = () => {
  const [stockdata, setStockdata] = useState([]);
  const [newsData, setNewsdata] = useState([]);
  const [lossData, setLossData] = useState([]);
  const [activeData,setActiveData]=useState([])
  console.log(stockdata);
  console.log(newsData);

  const options = {
    method: "GET",
    url: "https://real-time-finance-data.p.rapidapi.com/market-trends",
    params: {
      trend_type: "GAINERS",
      country: "in",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "85e0b2aafamsh4cac8b06f9f7047p114241jsnea757cae6dc7",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  const lossOptions = {
    method: "GET",
    url: "https://real-time-finance-data.p.rapidapi.com/market-trends",
    params: {
      trend_type: "LOSERS",
      country: "in",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "85e0b2aafamsh4cac8b06f9f7047p114241jsnea757cae6dc7",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  const ActiveOptions = {
    method: "GET",
    url: "https://real-time-finance-data.p.rapidapi.com/market-trends",
    params: {
      trend_type: "MOST_ACTIVE",
      country: "in",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "85e0b2aafamsh4cac8b06f9f7047p114241jsnea757cae6dc7",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      const LossResponse = await axios.request(lossOptions);
      const activeResponse=await axios.request(ActiveOptions)
      console.log(response.data.data.trends);
      setStockdata(response.data.data.trends);
      setNewsdata(response.data.data.news);
      setLossData(LossResponse.data.data.trends);
      setActiveData(activeResponse.data.data.trends)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getData();
  }, []);

  // console.log(data.news);

  return (
    <>
      {newsData.length === 0 ? (
        <Typography>...Loading</Typography>
      ) : (
        <>
          {console.log(newsData.length)}
          <MyCarousel newsData={newsData} />
        </>
      )}
      <Stack
        direction={"row"}
        border={"1px solid black"}
        height={"400px"}
        margin={"20px"}
        padding={"1em"}
        justifyContent={"space-between"}
      >
        <Box border={"1px solid blue"} width={"33%"} overflow={"hidden"}>
          <Typography variant={"h4"}>Top Losers</Typography>
          {lossData ? (
            <StockTable data={lossData} LastVal={true} />
          ) : (
            <Typography>...Loading</Typography>
          )}
        </Box>
        <Box border={"1px solid blue"} width={"33%"} overflow={"hidden"}>
          <Typography variant={"h4"}>Top Gainers</Typography>
          {lossData ? (
            <StockTable data={stockdata} LastVal={true} />
          ) : (
            <Typography>...Loading</Typography>
          )}
        </Box>
        <Box border={"1px solid blue"} width={"33%"} overflow={"hidden"}>
          <Typography variant={"h4"}>Most Active</Typography>
          {lossData ? (
            <StockTable data={activeData} LastVal={false} />
          ) : (
            <Typography>...Loading</Typography>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default Home;
