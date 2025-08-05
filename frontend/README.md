# 🎯 Fundraising Intern Portal

A simple full stack intern portal created as part of SheCan Foundation's Full Stack Developer Internship Round 1.

---

## 🌐 Tech Stack

- Frontend: React.js
- Backend: Node.js + Express
- Styling: CSS
- Hosting (optional): Vercel / Netlify / Render / GitHub Pages

---

## ⚙️ Features

- Dummy login page
- Dashboard showing:
  - Intern name
  - Referral code
  - Total donations raised
  - Static rewards/unlockables
- REST API serving dummy intern data

---

## 📂 Folder Structure
fundraising-portal/
├── backend/ → Express server (localhost:5000)
├── frontend/ → React app (localhost:3000)

---

## ▶️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fundraising-portal.git
cd fundraising-portal
 
2 Run Backend

bash
cd backend
npm install
node server.js
Backend runs on:http://localhost:5000

3 Run Frontend
bash
cd frontend
npm install
npm start
Frontend runs on:http://localhost:3000

Output:
![Login Page](assets/login.png,Logining.png)
![Dashboard](assets/Dashboard.png)