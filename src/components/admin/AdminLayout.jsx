import { Outlet, NavLink } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>

        <nav className="admin-nav">
          <NavLink to="/admin" end>
            🏠 Dashboard
          </NavLink>
          <NavLink to="/admin/products">📦 Manage Products</NavLink>
          <NavLink to="/admin/products/add">➕ Add Product</NavLink>
          <NavLink to="/admin/orders">🧾 Orders</NavLink>
          <NavLink to="/admin/users">👥 User Management</NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-content">
        <Outlet /> {/* <<< DITO LUMALABAS ANG UI */}
      </main>
    </div>
  );
};

export default AdminLayout;
