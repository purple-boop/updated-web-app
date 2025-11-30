// TermsModal.jsx
import { useState } from "react";

const TermsModal = ({ isOpen, onClose, user }) => {
  const [agree, setAgree] = useState(false);

  if (!isOpen) return null;

  const handleCheckbox = () => {
    // allow checking, pero optional kung gusto mong i‑lock ang uncheck
    setAgree(!agree);
  };

  const handleContinue = () => {
    if (!agree) {
      alert("Please agree to continue.");
      return;
    }

    // Save user acceptance
    if (user?.id) {
      localStorage.setItem(`accepted_terms_${user.id}`, "true");
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Terms & Conditions
        </h2>

        <div className="text-left mb-6">
          <p className="mb-3">
            All items are freshly made and may slightly vary in appearance.
            Products may contain common allergens.
          </p>

          <p className="mb-3">
            Delivery delays caused by couriers, traffic, or weather are beyond
            our control.
          </p>

          <p className="mb-3">
            Cancellations are allowed within 12 hours. Custom orders cannot be
            canceled once preparation starts.
          </p>

          <p className="mb-3">
            Please check your order upon receiving it and report any issues
            within one hour.
          </p>

          <p>By continuing, you agree to these terms.</p>
        </div>

        <label className="flex items-center gap-2 mb-6 cursor-pointer">
          <input type="checkbox" checked={agree} onChange={handleCheckbox} />
          <span>I agree to the Terms and Conditions</span>
        </label>

        <button
          onClick={handleContinue}
          className={`w-full py-3 rounded-lg text-white font-semibold ${
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
