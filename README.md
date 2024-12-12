# Stealth Project

## Overview
The Stealth Project is a web application built with a full-stack architecture. It consists of a backend server powered by Node.js and Express,
and a frontend developed using modern web technologies. The project features a user login system, a technician dashboard, and a booking mechanism, 
providing a seamless experience for users to view and book technicians.

---

## Features

1. **User Authentication**
   - Secure login functionality for users.

2. **Technician Dashboard**
   - Displays a list of all available technicians with detailed information:
     - Name
     - Photo
     - Specialization
     - Rating
     - Description

3. **Technician Booking**
   - Book a technician directly from the dashboard.
   - Displays a confirmation modal upon successful booking.

4. **Backend Integration**
   - RESTful API to fetch technician details and handle user authentication.

5. **Frontend UI**
   - Modern, user-friendly interface.
   - Responsive design for various devices.

---

## Technologies Used

### Frontend
- **React.js**: For building the dynamic user interface.
- **CSS**: For styling components.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for API development.
- **SQLite**: Database to store and retrieve data.

---

## Installation and Setup

Follow the steps below to set up the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [Git](https://git-scm.com/) installed.

### Clone the Repository
```bash
git clone https://github.com/vinay-reddy31/stealth-project.git
cd stealth-project
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the SQLite database:
   - Ensure the database path is correctly set in the code (`data/nviri.db`).
4. Start the backend server:
   ```bash
   node server.js || npm run start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd stealth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will run at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).

---

## Usage

1. **Login**:
   - Use the login page to authenticate as a user.
2. **Technician Dashboard**:
   - View all technicians with their details.
   - Click the "Book" button to book a technician.
3. **Booking Confirmation**:
   - A modal will appear to confirm the successful booking.

   
---

## Project Structure

```
stealth-project/
├── Backend/
│   ├── controllers/
│   │   └── controllers.js
│   ├── routes/
│   │   └── routes.js
│   ├── data/
│   │   └── nviri.db
│   ├── server.js
│   └── package.json
├── stealth/
│   ├── src/
│   │   ├── components/ 
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## Contact

For any queries, please contact:
- **Name**: Vinay Teja
- **Email**: [Mail](mailto:vinayarukala333@gmail.com)

---

Enjoy working with the Stealth Project!
