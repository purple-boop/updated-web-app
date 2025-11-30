const AdminUsers = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">User Management</h1>

      <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead className="bg-pink-200 text-pink-900">
          <tr>
            <th className="p-3">User</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">Marlyn Magcalas</td>
            <td className="p-3">marlyn@gmail.com</td>
            <td className="p-3">customer</td>
            <td className="p-3">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">
                Promote to Admin
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
