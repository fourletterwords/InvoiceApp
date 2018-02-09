const mongoose = require("mongoose");
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  orderNumber: String,
  date: Date
});

mongoose.model("invoices", invoiceSchema);
