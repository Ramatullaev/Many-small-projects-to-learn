import "./App.css";
import Accordian from "./components";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Picture from "./assets/Picture";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* <Accordian></Accordian>

      Random Color Component
      <RandomColor />
      <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      /> */}
      {/* Load more products components */}
      {/* <LoadMoreData /> */}
      {/* Tree view component/menu UI component / recursive navigator menu */}
      {/* <TreeView menus={menus} /> */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
