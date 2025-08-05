const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const internData = {
  name: "Meghana Chintamala",
  referralCode: "meghana2025",
  donations: 5600
};

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
