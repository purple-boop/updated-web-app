const AdminProducts = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Manage Products</h1>

      <div className="flex justify-end mb-4">
        <a
          href="/admin/products/add"
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg shadow-md"
        >
          ➕ Add Product
        </a>
      </div>

      <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-pink-200 text-pink-900">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">
              <img src="/sample.jpg" className="w-14 h-14 rounded-lg" />
            </td>
            <td className="p-3">Chocolate Cake</td>
            <td className="p-3">₱350</td>
            <td className="p-3">Cakes</td>
            <td className="p-3 flex gap-3">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded-lg">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
