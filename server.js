// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (if needed for forms later)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Route: Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Example route for future form processing
// app.post("/contact", (req, res) => {
//   const { name, email, message } = req.body;
//   // TODO: Save to database or send email
//   console.log(`New contact: ${name}, ${email}, ${message}`);
//   res.send("Thank you for contacting us!");
// });

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});




// server.js

// Parse incoming form data if needed later
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// Routes for each page (optional; express.static handles this too)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "services.html"));
});

// Add similar routes for blog, hiring, contact if needed...

// Example placeholder POST route for future form submissions
// app.post("/contact", (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(`New message from ${name} (${email}): ${message}`);
//   res.send("Thanks for contacting us!");
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


