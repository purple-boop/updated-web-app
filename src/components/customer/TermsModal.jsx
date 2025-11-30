// TermsModal.jsx
import { useState } from "react";

const TermsModal = ({ isOpen, onClose }) => {
  const [agree, setAgree] = useState(false);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (agree) {
      onClose(); // close modal when checked + continue
    } else {
      alert("Please agree to continue.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

        <p className="text-gray-700 mb-4">
          By using this website, you agree to follow all rules, respect shop
          policies, and ensure all purchases are made responsibly.
        </p>

        <label className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>I agree to the Terms and Conditions</span>
        </label>

        <button
          onClick={handleContinue}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            agree ? "bg-rose-500" : "bg-rose-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
