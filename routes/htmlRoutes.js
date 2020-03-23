var path = require("path");

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/service-worker.js", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/service-worker.js"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
