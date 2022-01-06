const customer = require('./table_customer.js');
const user = require('./table_user');
const order = require('./table_order');

(async () => {    
    await customer()     
    await user()
    await order()

    console.log(`Migration success`)
    return
  })();