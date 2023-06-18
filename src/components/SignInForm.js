"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MDBInput } from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";

export default function SignInForm({ tab, setTab }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginUser = async (user) => {
    const logIn = async () => {
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });
      if (!res.error) {
        toast("Redirecting...");
        router.replace("/");
      } else {
        // console.log(res);
        throw new Error();
      }
    };

    toast.promise(
      logIn(),
      {
        loading: "Logging In...",
        success: <b>Success!</b>,
        error: <b>Failed!</b>,
      },
      {
        position: "top-center",
      }
    );
  };

  const handIconClick = (e) => {
    e.preventDefault();
    toast("Feature coming soon!", {
      icon: "🧩",
    });
  };
  return (
    <div
      className={`tab-pane fade show ${tab === "login" ? "active" : ""}`}
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form onSubmit={handleSubmit(handleLoginUser)}>
        {/* <div className="text-center mb-3">
          <p>Sign in with:</p>
          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handIconClick}
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handIconClick}
          >
            <i className="fab fa-google" />
          </button>
          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handIconClick}
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handIconClick}
          >
            <i className="fab fa-github" />
          </button>
        </div> */}
        <h1 className="text-center mb-5 text-primary">Login</h1>
        {/* Email input */}
        <div className="form-outline mb-4">
          <MDBInput
            type="email"
            id="loginName"
            // className="form-control"
            label="Email or username"
            {...register("email", { required: true })}
          />
          {/* <label className="form-label" htmlFor="loginName">
            Email or username
          </label> */}
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <MDBInput
            type="password"
            id="loginPassword"
            // className="form-control"
            label="Password"
            {...register("password", { required: true })}
          />
          {/* <label className="form-label" htmlFor="loginPassword">
            Password
          </label> */}
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
            Not a member?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setTab("register");
              }}
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
