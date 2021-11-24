export const handleSignup = async () => {
  setLoading(true);
  try {
    await signup(emailRef.current.value, passwordRef.current.value);
  } catch (err) {
    alert("error");
  }
  setLoading(false);
};

export const handleLogin = async () => {
  setLoading(true);
  try {
    await login(emailRef.current.value, passwordRef.current.value);
  } catch (err) {
    alert("error");
  }
  setLoading(false);
  console.log(currentUser);
};

export const handleLogout = async () => {
  setLoading(true);
  try {
    await logout();
  } catch (err) {
    alert("error");
  }
  setLoading(false);
};
