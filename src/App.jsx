import { useNavigate } from "react-router-dom";
import { allOrders } from "./constants/orders";
import { allProducts } from "./constants/products";

const App = () => {
  const totalProducts = allProducts.length;
  const totalOrders = allOrders.length;
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-500 p-8 shadow-md text-white h-screen">
      <h1 className="text-3xl font-extrabold mb-4">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-600 p-6 rounded-md">
          <p className="text-lg font-semibold text-white">Total Products</p>
          <p className="text-4xl font-extrabold">{totalProducts}</p>
        </div>
        <div className="bg-green-700 p-6 rounded-md">
          <p className="text-lg font-semibold text-white">Total Orders</p>
          <p className="text-4xl font-extrabold">{totalOrders}</p>
        </div>
      </div>
      <div className="max-sm:grid mt-6 gap-3">
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 mx-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          onClick={() => navigate("/products")}
        >
          Manage Products
        </button>
        <button
          className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 mx-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          onClick={() => navigate("/orders")}
        >
          Manage Orders
        </button>
      </div>
    </div>
  );
};

export default App;
