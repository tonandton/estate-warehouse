import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  let formatPrice = Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(item.price);

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt={item.title} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="itembedroom">{item.bedroom} bedroom</span>
            <b>
              {formatPrice} / {item.unit}
            </b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
