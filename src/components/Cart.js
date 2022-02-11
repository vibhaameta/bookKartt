import { useLocation } from "react-router-dom";
import "./Cart.css";
function Cart() {
  const location = useLocation();
  const { item } = location.state;
  return item.map((value) => {
    return (
      <div className="cart_details">
        <div className="cart_flex">
          <img src={value.image} alt="cart"></img>
          <div>
            <h3>{value.name}</h3>
            <p>{value.price}</p>
          </div>
          <button type="submit" value="Buy Now">
            Buy Now
          </button>
        </div>
      </div>
    );
  });
}

export default Cart;
