import ProductsRedux from "./ProductsRedux";

function Main(props) {
  return (
    <div className="main flex-80">
      <ProductsRedux products={props.products} />
    </div>
  );
}

export default Main;
