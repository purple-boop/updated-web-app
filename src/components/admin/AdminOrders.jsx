import { useState } from "react";

const AdminOrders = () => {
  const [status, setStatus] = useState("Pending");
  const [showPaidModal, setShowPaidModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleMarkAsPaid = () => {
    setStatus("Paid");
    setShowPaidModal(true);
  };

  const handleMarkAsComplete = () => {
    if (status !== "Paid") return; // 🚫 BLOCK kung hindi pa Paid
    setStatus("Completed");
    setShowCompleteModal(true);
  };

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
            <td className="p-3 font-semibold">
              {status === "Pending" && (
                <span className="text-yellow-600">Pending</span>
              )}
              {status === "Paid" && (
                <span className="text-green-600">Paid</span>
              )}
              {status === "Completed" && (
                <span className="text-blue-600">Completed</span>
              )}
            </td>

            <td className="p-3 space-x-2">
              {/* Mark as Paid */}
              {status === "Pending" && (
                <button
                  onClick={handleMarkAsPaid}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg"
                >
                  Mark as Paid
                </button>
              )}

              {/* Mark as Completed — disabled kapag hindi Paid */}
              <button
                onClick={handleMarkAsComplete}
                disabled={status !== "Paid"}
                className={`px-3 py-1 rounded-lg ${
                  status === "Paid"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                Mark as Completed
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* PAID MODAL */}
      {showPaidModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold text-green-600">
              Payment Successful!
            </h2>
            <p className="mt-2">Order has been marked as Paid.</p>
            <button
              onClick={() => setShowPaidModal(false)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* COMPLETED MODAL */}
      {showCompleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold text-blue-600">
              Order Completed!
            </h2>
            <p className="mt-2">Order has been marked as Completed.</p>
            <button
              onClick={() => setShowCompleteModal(false)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
