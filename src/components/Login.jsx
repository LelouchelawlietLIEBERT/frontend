import { ThirdPartyEmailPassword } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

const Login = () => {
  return (
    <div className="login-container">
      <ThirdPartyEmailPassword.SignIn />
    </div>
  );
};

export default Login;
