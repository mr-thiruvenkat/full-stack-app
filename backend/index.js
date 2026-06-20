import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Base Route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome rf MyFll-Stack Project!' });
});

// A sample API route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Start the server
app.listen(PORT, () =>{
  console.log(`🚀 Server running smoothly on http://localhost:${PORT}`);
});