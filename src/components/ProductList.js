
const ProductList = ({ products, removeProduct }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p style={{color:"red"}}>Not Product Available</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, remove) => (
              <tr key={remove}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button 
                    onClick={() => removeProduct(remove)} 
                    className="remove-button">
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
