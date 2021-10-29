export function handleSignUp(formData) {
  try {
    let signup = {};
    for (const [key, value] of formData) {
      if (!value) {
        return alert(`fill ${key} field`);
      }
      if (key == "confirmEmail") {
        if (signup.email !== value) {
          return alert(`entered email did not match`);
        }
      }
      Object.assign(signup, { [key]: value });
    }
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(signup),
    });
    console.log("sign");
  } catch (error) {
    console.log(error);
  }
}
