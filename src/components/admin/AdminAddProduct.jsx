const AdminAddProduct = () => {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Add Product</h1>

      <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded-lg"
        />

        <select className="w-full border p-3 rounded-lg">
          <option value="">Select Category</option>
          <option>Cakes</option>
          <option>Cupcakes</option>
          <option>Donuts</option>
        </select>

        <input
          type="file"
          className="w-full border p-3 rounded-lg bg-pink-50"
        />

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded-lg h-24"
        />

        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-xl shadow-md">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
