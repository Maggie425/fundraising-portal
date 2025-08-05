// frontend/src/Dashboard.js
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [internData, setInternData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then((res) => res.json())
      .then((data) => setInternData(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="container">
      <h1>Intern Dashboard</h1>
      <p><strong>Name:</strong> {internData.name}</p>
      <p><strong>Referral Code:</strong> {internData.referralCode}</p>
      <p><strong>Total Donations:</strong> ₹{internData.totalDonations}</p>

      <h3>Rewards / Unlockables</h3>
      <ul>
        <li>🎁 Free Certificate (Unlocked)</li>
        <li>🏅 Leaderboard Badge (Locked)</li>
        <li>📜 LOR Unlocks at ₹5000+ (Locked)</li>
      </ul>
    </div>
  );
}

export default Dashboard;
