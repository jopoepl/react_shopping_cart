import React from "react";
import OrderBy from "./OrderBy";
import { connect } from "react-redux";
import { setOrder, setProducts } from "./actions/orderActions";

function Products(props){
    console.log(props, "PROPS IN REDUX COMP")
     // sort the products based on the selected order
  let sortedProducts = [...props.products];
  if(props.selectedOrder === 'highest'){
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  if(props.selectedOrder === 'lowest'){
    sortedProducts.sort((a, b) => a.price - b.price);
  }

    return (
      <div>
        <div className="products-filter">
          <p>
            {`${sortedProducts.length} Product${
              sortedProducts.length > 1 ? "s" : ""
            } found.`}{" "}
          </p>
          <OrderBy
          />
        </div>
        <div className="flex wrap">
          {sortedProducts.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    );
  }


function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    selectedOrder: state.order.selectedOrder,
  }
}




export default connect(mapStateToProps)(Products);

