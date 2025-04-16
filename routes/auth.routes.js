const { loginAdmin, logoutAdmin, registerCustomer, loginCustomer, logoutCustomer, registerAdmin, verifyCustomerOTP } = require("../controllers/auth.controller");

const router = require("express").Router();

router
  .post("/admin/login", loginAdmin)
  .post("/admin/logout", logoutAdmin)

  .post("/customer/register", registerCustomer)
  .post("/customer/login", loginCustomer)
  .post("/customer/verify-customer-otp", verifyCustomerOTP)
  .post("/customer/logout", logoutCustomer);

module.exports = router;
