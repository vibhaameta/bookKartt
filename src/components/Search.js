import React, { Component } from "react";
import logo from "./images/shopping-cart.png";
import { Link } from "react-router-dom";
import'./Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name:'Apple', price:'Rs. 89000', image: require('./images/iPhone.jpeg')},
        {name:'Samsung', price:'Rs. 59000', image: require('./images/samsung.jpeg')},
        {name:'OnePlus', price:'Rs. 49000', image: require('./images/OnePlus.jpg')},
        {name:'Huawei', price:'Rs. 49000', image: require('./images/huawei.jpg')},
        {name:'Opps', price:'Rs. 39000', image: require('./images/oppo.jpg')},
        {name:'Vivo', price:'Rs. 38000', image: require('./images/vivo.jpeg')},
      ],
      addedItems: [],
    };
  }

  getButton(value){
    const { addedItems } = this.state;
    return(
     addedItems.indexOf(value) !== -1 ? (
        <button
          onClick={() => {
            addedItems.splice(addedItems.indexOf(value), 1);
            this.setState({ addedItems });
          }}
          
        >
          Remove from Cart
        </button>
      ) : <button
      onClick={() => {
        addedItems.push(value);
        this.setState({ addedItems });
      }}
    >
      Add to Cart
    </button>

    )
  }

  renderList(items) {
    return items.map((value) => {
      return (
        <div className="product_detail">
          <div className="bg_product">
          <img src={value.image} alt="cart"></img>
          <h3>{value.name}</h3>
          <p>{value.price}</p>
          {this.getButton(value)}
          </div>
        </div>
      );
    });
  }

  render() {
    const { items, addedItems } = this.state;
    return (
      <div className="SearchPage">
        <div className="navBar">
          <div className="item-flex">
            <div className="Company-name">VERIZON</div>
            <div className="searchPage_cart">
            <button>
          <Link to="/cart" state={{ item: addedItems }}>
          <img src={logo} alt="cart"></img><h4>{addedItems.length}</h4>
          </Link>
        </button>
            </div>
          </div>
        
        </div>
        <div className="search_products_wd">
          <h3>Verizon Store</h3>
          <div className="search_products">
          {this.renderList(items)}
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
