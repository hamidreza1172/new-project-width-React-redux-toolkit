import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Logotitle from "../component/Logotitle";


// SCIMA FOR RESOLVERS
const schema = yup.object({
  Email: yup.string().email().required(),
  Password: yup.string().required(),
}).required();


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema)});

const onFormSubmit=()=>{
  alert("form submited")
}
  return (
    <React.Fragment>
      <div className="d-block d-lg-flex my-lg-5">
        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
          <Logotitle />
        </div>

        <div className="col-12 col-lg-8">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="input-group rounded-1" id="group-for-email">
                <HiOutlineMail className="my-1 mx-2" />
                <input
                  type="text"
                  className="input-email"
                  placeholder="Enter Your Email"
                  {...register("Email")} 
                />
              </div>
                {errors.Email && <span className="text-danger">{errors.Email?.message}</span>}
              <div className="input-group my-4 rounded-1" id="group-for-email">
                <RiLockPasswordLine className="my-1 mx-2" />
                <input
                  type="text"
                  className="input-email"
                  placeholder="Enter Your password"
                  {...register("Password")} 
                  />
              </div>
                  {errors.Password && <span className="text-danger">{errors.Password?.message}</span>}
              <input type="submit" value={"Sign In"} className="sublog" />
              <h5 className="or-parent">
                <span className="or-titr">OR</span>
              </h5>
              <div
                className="input-group rounded-1 py-2 mb-3"
                id="group-for-email"
              >
                <FcGoogle className="my-1 mx-2" size={25} />
                <Link className="text-muted fw-bolder text-decoration-none ms-5">
                  login with google
                </Link>
              </div>
              <Link className="h6 text-info text-decoration-none text-center fw-bolder my-2">
                Forgot Password?
              </Link>
              <div className="d-flex mb-5">
                <p>Don’t have a account? </p>
                <Link className="h6 text-info text-decoration-none fw-bolder">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
