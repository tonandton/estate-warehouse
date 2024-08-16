import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            ค้นหาโกดังให้เช่า & สร้างโกดังสำเร็จรูป และ บ้านน็อคดาวน์
          </h1>
          <p>
            รับสร้างโกดังสำเร็จรูป บ้านน็อคดาวน์ ให้โกดังให้เช่า
            สามารถติดต่อตัวแทนจำหน่ายได้ที่
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Warehouse</h2>
            </div>
            <div className="box">
              <h1>30</h1>
              <h2>Warehouse Rental Project</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
