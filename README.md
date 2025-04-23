# 📚 School Management APIs

## 🚀 Objective
Develop a set of **Node.js APIs** using **Express.js** and **MySQL** to manage school data.  
The APIs allow users to:
- **Add a new school** to the database.
- **Retrieve a list of schools** sorted by proximity to a user's location.

---

## 🛠️ Technology Stack
- Node.js
- Express.js
- MySQL
- Postman (for API testing)

---

## 💂️ Project Structure
```
school-management-api/
│
├— config/
│   └— db.js           # Database connection setup
│
├— controllers/
│   └— schoolController.js  # API logic for schools
│
├— routes/
│   └— schoolRoutes.js  # API endpoints
│
├— app.js              # Main app entry point
├— package.json
└— README.md
```

---

## 🛂️ Database Setup

Create a **MySQL** database and a table named `schools`:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

---

## 📋 API Documentation (Link: 



### 1. Add School API

- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Request Payload:**

```json
{
    "name": "Sage International School",
    "address": "Ayodhya Bypass Road, Bhopal",
    "latitude": 23.2755,
    "longitude": 77.4328
}
```

- **Functionality:**
  - Validates input fields (non-empty, correct data types).
  - Inserts the new school into the `schools` table.

- **Response Example:**

```json
{
    "message": "School added successfully",
    "schoolId": 1
}
```

---

### 2. List Schools API

- **Endpoint:** `/listSchools`
- **Method:** `GET`
- **Query Parameters:**
  - `latitude` (required)
  - `longitude` (required)

- **Example:**
```
/listSchools?latitude=28.7041&longitude=77.1025
```

- **Functionality:**
  - Retrieves all schools from the database.
  - Calculates the distance between the user's location and each school's location.
  - Returns the list of schools sorted by nearest to farthest.

- **Response Example:**

```json
[
  {
    "id": 1,
    "name": "Sage International School",
    "address": "Ayodhya Bypass Road, Bhopal",
    "latitude": 23.2755,
    "longitude": 77.4328
}
  },
  {
    "id": 2,
    "name": "XYZ Public School",
    "address": "456 Elm Street, Townsville",
    "latitude": 28.5355,
    "longitude": 77.3910,
    "distance_km": 15.8
  }
]
```

---

## 📦 Hosting
 Deploy the API on Render:

 ### - **listSchools** : https://student-management-api-jmoj.onrender.com/listSchools?latitude=21.25&longitude=65.4126
 ### - **addSchool** : https://student-management-api-jmoj.onrender.com/addSchool


---

## 🔥 Postman Collection
 
- A complete **Postman collection** is available including:
  - Example requests for `/addSchool` and `/listSchools`.
  - Example responses.
  - Validation failure cases.

> 📅 **[Download Postman Collection](#)** (https://api-testing-1634.postman.co/workspace/API-Testing-Workspace~c8c40140-a0f0-4fe8-a3cd-d5b623ecdbb2/collection/44347938-bf4d7225-1892-4e0a-bfcf-ec2469695479?action=share&creator=44347938)

---

## ✪ Quick Start Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/ritikkumar55/school-management-api.git
   cd school-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables (e.g., `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

4. Start the server:
   ```bash
   npm start
   ```

5. Test APIs using Postman.




## 🧑‍💻 Author

- GitHub: [@ritikkumar55](https://github.com/ritikkumar55)

