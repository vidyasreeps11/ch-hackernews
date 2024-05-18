import { Fragment, useState } from "react";
import "./App.css";
import TitleBar from "./Componets/TitleBar";
import MenuBar from "./Componets/MenuBar";
import NewsTile from "./Componets/NewsTile";

function App() {
  var baseUrl = "https://hacker-news.firebaseio.com/v0/";
  var topStoriesUrl = `${baseUrl}topstories.json`;
  var bestStoriesUrl = `${baseUrl}beststories.json`;
  var newStoriesUrl = `${baseUrl}newstories.json`;
  var itemBaseUrl = "https://hacker-news.firebaseio.com/v0/item/";
  let idArray;
  let dataArray;
  const [newsArray, updateNewsArray] = useState([]);

  //fetching data from hackernews api on button click
  function fetchData(value) {
    var url;

    if (value === "new") url = newStoriesUrl;
    else if (value === "top") url = topStoriesUrl;
    else url = bestStoriesUrl;

    fetch(url)
      .then((response) => response.json())
      .then((result) => getNewsItems(result))
      .catch((error) => console.log("Error from fetchdata: ", error));
  }

  //fetching json format news items based on the news ids
  function getNewsItems(result) {
    idArray = result.map((item) => `${itemBaseUrl}${item}.json`);
    dataArray = [];
    idArray.map((link) =>
      fetch(link)
        .then((response) => response.json())
        .then((jsonData) => {
          dataArray.push({
            id: jsonData.id,
            title: jsonData.title,
            url: jsonData.url,
          });
        })
        .catch((error) => console.log("error : ", error))
    );

    updateNewsArray(dataArray);
    console.log(dataArray);
  }

  return (
    <Fragment>
      <TitleBar></TitleBar>
      <MenuBar sendButtonName={fetchData}></MenuBar>

      {newsArray.map((value) =>(<NewsTile
        key={value.id}
        title={value.title}
        url={value.url}
      ></NewsTile>))}
      
    </Fragment>
  );
}

export default App;
