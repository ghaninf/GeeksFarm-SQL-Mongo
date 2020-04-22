module.exports = function(app) {

    app.get("/", (req, res) => res.send("Hello World!"));
    app.get("/me/:name", (req, res) => res.send(`Hello ${req.params.name}`));
    app.get("/optional/:name?", (req, res) => {
        if(req.params.name != null){
            res.send(`Hello optional ${req.params.name}`)
        }
        res.send(`Hello Nothing`);
    });
}