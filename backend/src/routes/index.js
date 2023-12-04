const express = require("express");
const config = require('../config/config')
const homeRoute = require('./home.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/',
        route: homeRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
