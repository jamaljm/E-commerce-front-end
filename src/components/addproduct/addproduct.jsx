import "./addproduct.css";

export default function FeaturedInfo() {
  return (
    <div className="productList">
      <div className="newProduct">
      <h2 className="addProductTitle">Add New Product</h2>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>category</label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="456" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
    </div>
  );
}
