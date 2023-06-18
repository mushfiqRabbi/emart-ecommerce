"use client";
import { useForm } from "react-hook-form";
import { registerUser } from "../app/actions";
import { MDBInput } from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";

export default function SignUpForm({ tab, setTab }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterUser = async (data) => {
    if (data.password === data.repeatPassword) {
      const register = async () => {
        const response = await registerUser(data);
        if (response.type === "success") {
          setTab("login");
        } else {
          // console.log(response.message);
          throw new Error();
        }
        return;
      };
      toast.promise(register(), {
        loading: "Registering...",
        success: "Registration Completed!",
        error: "Registration Failed!",
      });
    } else {
      toast.error("Passwords do not match!", { position: "top-center" });
    }
  };

  const handIconClick = (e) => {
    e.preventDefault();
    toast("Feature coming soon!", {
      icon: "🧩",
    });
  };

  return (
    <div
      className={`tab-pane fade show ${tab === "register" ? "active" : ""}`}
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register"
    >
      <form action={handleSubmit(handleRegisterUser)}>
        {/* <div className="text-center mb-3">
          <p>Sign up with:</p>
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
        <h1 className="text-center text-primary mb-5">Register</h1>
        {/* Name input */}
        <div className="form-outline mb-4">
          <MDBInput
            type="text"
            id="registerName"
            // className="form-control"
            label="Name"
            {...register("name", { required: true })}
          />
          {/* <label className="form-label" htmlFor="registerName">
            Name
          </label> */}
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <MDBInput
            type="email"
            id="registerEmail"
            // className="form-control"
            label="Email"
            {...register("email", { required: true })}
          />
          {/* <label className="form-label" htmlFor="registerEmail">
            Email
          </label> */}
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <MDBInput
            type="password"
            id="registerPassword"
            // className="form-control"
            label="Password"
            {...register("password", { required: true })}
          />
          {/* <label className="form-label" htmlFor="registerPassword">
            Password
          </label> */}
        </div>
        {/* Repeat Password input */}
        <div className="form-outline mb-4">
          <MDBInput
            type="password"
            id="registerRepeatPassword"
            // className="form-control"
            label="Repeat Password"
            {...register("repeatPassword", { required: true })}
          />
          {/* <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label> */}
        </div>
        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue=""
            id="registerCheck"
            defaultChecked=""
            aria-describedby="registerCheckHelpText"
            {...register("agreement", { required: true })}
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-3">
          register
        </button>
      </form>
    </div>
  );
}
