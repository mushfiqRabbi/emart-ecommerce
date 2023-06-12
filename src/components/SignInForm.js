"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInForm({ tab, setTab }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginUser = async (user) => {
    const res = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });
    if (!res.error) {
      router.push("/");
    } else {
      console.log(res);
    }
  };
  return (
    <div
      className={`tab-pane fade show ${tab === "login" ? "active" : ""}`}
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form onSubmit={handleSubmit(handleLoginUser)}>
        <div className="text-center mb-3">
          <p>Sign in with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
        <p className="text-center">or:</p>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            {...register("email", { required: true })}
          />
          <label className="form-label" htmlFor="loginName">
            Email or username
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            {...register("password", { required: true })}
          />
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
        </div>
        {/* 2 column grid layout */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="loginCheck"
                defaultChecked=""
                {...register("rememberMe")}
              />
              <label className="form-check-label" htmlFor="loginCheck">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          login
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
