import { useState } from "react";

const AdminUsers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePromote = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const confirmPromote = () => {
    setShowModal(false);

    // Simulated success message
    setSuccessMessage(`${selectedUser.name} is now an Admin!`);

    setTimeout(() => {
      setSuccessMessage("");
    }, 2500);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">User Management</h1>

      {/* SUCCESS BANNER */}
      {successMessage && (
        <div className="mb-4 p-3 bg-green-500 text-white rounded-lg">
          {successMessage}
        </div>
      )}

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
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() =>
                  handlePromote({
                    name: "Marlyn Magcalas",
                    email: "marlyn@gmail.com",
                  })
                }
              >
                Promote to Admin
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* MODAL POPUP */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-3 text-pink-600">
              Confirm Promotion
            </h2>

            <p className="mb-6">
              Promote <strong>{selectedUser.name}</strong> to Admin?
            </p>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={confirmPromote}
              >
                Yes, Promote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
