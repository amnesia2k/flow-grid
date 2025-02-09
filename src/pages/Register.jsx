import * as React from "react";
import PageTitle from "../components/PageTitle";
import { Link, Form } from "react-router-dom";
import { logo, signup } from "../assets";
import TextField from "../components/TextField";
import { Button } from "../components/Button";

export default function Register() {
  return (
    <>
      <PageTitle title={"Create an account"} />

      <div className="relative w-screen h-dvh p-2 flex lg:flex-row items-center lg:gap-2">
        <div className="flex flex-col p-4">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              width={70}
              height={95}
              className="max-w-max mb-auto lg:mx-0"
            />
          </Link>

          <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
            <h2 className="text-[36px] leading-[44px] tracking-[0] font-medium text-center">
              Create an account
            </h2>
            <p className="text-base leading-[24px] tracking[0.5px] font-normal mt-1 text-center px-2">
              Register now and have full control of your task task management
            </p>

            <Form method="POST" className="flex flex-col w-full mx-auto gap-4">
              <TextField
                type="text"
                name="name"
                label="Full Name"
                placeholder="Full Name"
                required={true}
                autoFocus={true}
              />

              <TextField
                type="email"
                name="email"
                label="Email Address"
                placeholder="Email Address"
                required={true}
              />

              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter Password"
                required={true}
              />

              <Button type="submit">Create Account</Button>
            </Form>

            <p className="">
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </div>

          <p className="">
            &copy;{new Date().getFullYear()} Ola_the_Dev. All rights reserved.
          </p>
        </div>

        <div className="hidden lg:block">
          <img src={signup} alt="signup-banner" className="img-cover" />

          <p className="">Get started with the best task management board</p>
        </div>
      </div>
    </>
  );
}
