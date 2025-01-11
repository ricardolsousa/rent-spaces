import LoginForm from "../../../components/authentication/login-form/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <div className="px-4 py-3 sm:px-6 flex flex-col gap-3">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
