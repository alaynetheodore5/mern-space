console.log("planet.routes.js");

const Planets = require("../controllers/planet.controller");

module.exports = app => {
    app.get("/api/planets", Planets.getAll);
    app.post("/api/planets", Planets.create);
    app.put("/api/planets/:_id/add_moon", Planets.addMoon);
}