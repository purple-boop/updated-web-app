import { useState } from "react";

const AdminProducts = () => {
  // TEMPORARY DUMMY DATA
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      price: 350,
      category: "Cakes",
      image: "/sample.jpg",
    },
  ]);

  // MODAL STATES
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Manage Products</h1>

      {/* Add Product Button */}
      <div className="flex justify-end mb-4">
        <a
          href="/admin/products/add"
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg shadow-md"
        >
          ➕ Add Product
        </a>
      </div>

      {/* PRODUCT TABLE */}
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
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-3">
                <img src={p.image} className="w-14 h-14 rounded-lg" />
              </td>
              <td className="p-3">{p.name}</td>
              <td className="p-3">₱{p.price}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3 flex gap-3">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                  onClick={() => setEditingProduct(p)}
                >
                  Edit
                </button>

                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-lg"
                  onClick={() => setDeletingProduct(p)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ========================= EDIT MODAL ========================= */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-pink-600">
              Edit Product
            </h2>

            <label className="block mb-2 font-semibold">Name</label>
            <input
              className="w-full border p-2 rounded mb-4"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
            />

            <label className="block mb-2 font-semibold">Price</label>
            <input
              className="w-full border p-2 rounded mb-4"
              type="number"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: e.target.value })
              }
            />

            <label className="block mb-2 font-semibold">Category</label>
            <input
              className="w-full border p-2 rounded mb-4"
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  category: e.target.value,
                })
              }
            />

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-pink-500 text-white rounded-lg"
                onClick={() => {
                  setProducts((prev) =>
                    prev.map((p) =>
                      p.id === editingProduct.id ? editingProduct : p
                    )
                  );
                  setEditingProduct(null);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================= DELETE MODAL ========================= */}
      {deletingProduct && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Delete Product?
            </h2>

            <p className="mb-6">
              Are you sure you want to delete{" "}
              <span className="font-bold">{deletingProduct.name}</span>?
            </p>

            <div className="flex justify-center gap-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setDeletingProduct(null)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => {
                  setProducts((prev) =>
                    prev.filter((p) => p.id !== deletingProduct.id)
                  );
                  setDeletingProduct(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
