const db = require('../config/db');

// Haversine Formula to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = (x) => x * Math.PI / 180;
  
  const R = 6371; // Radius of Earth in KM
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  return R * c; // Distance in KM
}

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  
  // Validation
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
  if (typeof latitude !== 'number' || typeof longitude !== 'number') {
    return res.status(400).json({ message: "Latitude and Longitude must be numbers" });
  }
  
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    
    res.status(201).json({ message: "School added successfully", schoolId: result.insertId });
  });
};

exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);
  
  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ message: "Valid latitude and longitude are required" });
  }
  
  db.query('SELECT * FROM schools', (err, schools) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    
    // Calculate distance and sort
    const schoolsWithDistance = schools.map(school => {
      const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
      return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance); // Sort ascending
    
    res.json(schoolsWithDistance);
  });
};
