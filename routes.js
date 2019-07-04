const routes = require('express').Router();



routes.get('/' , (req , res) => {

    return res.status(200).send(`API Working with success !  . `);
});


module.exports = routes;