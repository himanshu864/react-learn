import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    isValueValid: isEmailValid,
  } = useInput("", (value) => isNotEmpty(value) && isEmail(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    isValueValid: isPasswordValid,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (!isEmailValid || !isPasswordValid) return;

    console.log({ email: emailValue, password: passwordValue });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          type="email"
          error={!isEmailValid ? "Please enter a valid email address." : ""}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          type="password"
          error={!isPasswordValid ? "Please enter a valid password." : ""}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
