const mongoose = require("mongoose");

const connect = async () => {
  try {
    const connection = mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlparser: true,
    });
    console.log("Connection secure");
  } catch (e) {
    console.log("COnnection Error");
    process.exit(1);
  }
};

module.exports = connect;
