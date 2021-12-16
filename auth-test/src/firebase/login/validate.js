import validator from "validator";

export default function validate(email, password, callback) {
  if (email.length > 0) {
    if (password.length > 0) {
      if (validator.isEmail(email)) {
        if (validator.isStrongPassword(password)) {
          callback(true);
        } else {
          callback("Wrong password");
        }
      } else {
        callback("Wrong email");
      }
    } else {
      callback("Password cannot be empty");
    }
  } else {
    callback("Email cannot be empty");
  }
}
