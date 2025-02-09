import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createUser, signIn } from "../lib/appwrite";
import { toast } from "sonner";

export default function Auth() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleStatus = () => {
    navigate(type === "sign-in" ? "/auth/sign-up" : "/auth/sign-in");
  };

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      toast.error("Please fill out all fields");
      return;
    }

    setIsSubmitting(true);

    if (type === "sign-in") {
      try {
        const res = await signIn(form.email, form.password);

        navigate("/tasks");
      } catch (error) {
        toast.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      try {
        const res = await createUser(form.email, form.username, form.password);

        navigate("/tasks");
      } catch (error) {
        toast.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  // const formAction = async (formData) => {
  //   const userData = {
  //     username: formData.get("username"),
  //     password: formData.get("password"),
  //   };

  //   console.log(userData);

  //   setIsSubmitting(true);

  //   if (type === "sign-in") {
  //     try {
  //       const res = await signIn(userData.username, userData.password);

  //       navigate("/tasks");
  //     } catch (error) {
  //       toast.error("Error:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   } else {
  //     try {
  //       const res = await createUser(userData.username, userData.password);

  //       navigate("/tasks");
  //     } catch (error) {
  //       toast.error("Error:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };

  return (
    <>
      <div>
        <h3>
          {type === "sign-in" ? "Login to continue" : "Create a new account"}
        </h3>
        <form>
          {/* create a div that shows or hide dynamically if there is an error from zod */}
          {type === "sign-in" ? (
            <div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                  value={form.username}
                />
                <label htmlFor="">Username</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={form.password}
                />
                <label htmlFor="">Password</label>
              </div>

              <h3>
                Don&apos;t have an account?
                <Link to={"/auth/sign-up"}>{""}Sign up</Link>
              </h3>

              <button className="cursor-pointer" onClick={submit}>
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </div>
          ) : (
            <div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                  value={form.username}
                />
                <label htmlFor="">Username</label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={form.email}
                />
                <label htmlFor="">Email Address</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={form.password}
                />
                <label htmlFor="">Password</label>
              </div>

              <h3>
                Have an account?
                <Link to={"/auth/sign-in"}>{""}Login</Link>
              </h3>

              <button className="cursor-pointer" onClick={submit}>
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </div>
          )}
        </form>
        {/* {type === "sign-up" ? (
        <div>
          <h3>Sign Up</h3>
          <button onClick={handleStatus} className="cursor-pointer">
            Sign In
          </button>
        </div>
      ) : (
        <div>
          <h3>Sign In</h3>
          <button onClick={handleStatus} className="cursor-pointer">
            Sign Up
          </button>
        </div>
      )} */}
      </div>
    </>
  );
}
