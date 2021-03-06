const express = require('express');
const authRoutes = require('./server/auth/auth.route');
const profileRoutes = require('./server/profile/profile.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount profile related routes at /profile
router.use('/profile', profileRoutes);

module.exports = router;
