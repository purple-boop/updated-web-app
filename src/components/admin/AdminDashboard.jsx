const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-pink-500">
          <h2 className="text-xl font-bold text-gray-700">Total Products</h2>
          <p className="text-3xl font-extrabold text-pink-600 mt-2">128</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-rose-500">
          <h2 className="text-xl font-bold text-gray-700">Total Orders</h2>
          <p className="text-3xl font-extrabold text-rose-600 mt-2">87</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-fuchsia-500">
          <h2 className="text-xl font-bold text-gray-700">Total Users</h2>
          <p className="text-3xl font-extrabold text-fuchsia-600 mt-2">245</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
