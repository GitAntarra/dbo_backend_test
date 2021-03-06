const Conn = require('../config/database');
const custRoute = require('./custRoute')
const authRoute = require('./authRoute');
const orderRoute = require('./orderRoute');



const Routes = (app) => {
    app.use(Conn.connect);

    app.group("/api/v1/", (routes) => {
        routes.group("/customer", (cust) => custRoute(cust));    
        routes.group("/auth", (auth) => authRoute(auth));
        routes.group("/order", (order) => orderRoute(order));
    })

    app.all('/', (req,res) => {
        res.status(200).send({
            title: 'Undian BRI API',
            version: '1.0.0',
            author: 'CCP Team'
        });
    });

    app.all('*', (req, res) => {
        res.status(404).send({
            err : true,
            msg : 'Route not found'
        })
    });
}

module.exports = Routes;