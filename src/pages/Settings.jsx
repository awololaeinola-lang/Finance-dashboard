import "../styles/settings.css";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p className="subtitle">Manage your preferences</p>

      <div className="settings-grid">
        {/* Profile */}
        <div className="settings-card">
          <h3>Profile</h3>

          <label>Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email</label>
          <input type="email" placeholder="john@email.com" />
        </div>

        {/* Preferences */}
        <div className="settings-card">
          <h3>Preferences</h3>

          <div className="toggle-row">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Monthly Reports</span>
            <input type="checkbox" />
          </div>

          <label>Currency</label>
          <select>
            <option>NGN (₦)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>
      </div>

      <button className="save-btn">Save Changes</button>
    </div>
  );
};

export default Settings;
