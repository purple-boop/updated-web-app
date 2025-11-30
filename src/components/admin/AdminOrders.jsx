const AdminOrders = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Orders</h1>

      <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-pink-200 text-pink-900">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Total</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">#1023</td>
            <td className="p-3">Sarah Dela Cruz</td>
            <td className="p-3">₱780</td>
            <td className="p-3">Pending</td>
            <td className="p-3">
              <button className="px-3 py-1 bg-green-500 text-white rounded-lg">
                Mark as Paid
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
