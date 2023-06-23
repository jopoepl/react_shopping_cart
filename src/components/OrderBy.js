import { setOrder } from "./actions/orderActions";
import { connect } from "react-redux";


function OrderBy(props) {
  console.log(props, "ORDER PROPS")
  const handleChange = (event) => {
    props.setOrder(event.target.value); // Dispatch setOrder action with the new selected order
  };
      
  return (
    <div className="sort">
      Order by
      <select value={props.selectedOrder} onChange={handleChange}>
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}

const mapDispatchToProps = {
  setOrder
};

export default connect(null, mapDispatchToProps)(OrderBy);
