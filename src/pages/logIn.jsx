import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import log_in  from '/images/log_in.png'
import ScrollTop from "../Hooks/ScrollTop";
import { useMood } from "../Context/TemplateMoodContext";
export default function Login() {
ScrollTop()
const {Darkmood} = useMood()
  const getemail = useRef();
  const [Errors, setErrors] = useState([]);
  const {
    continueWithGoogle,
    continueWithGithub,
    forgetpassword,
    auth,
    signout,
    SignIn,
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};
  const handleWithGoogle = async () => {
    try {
      await continueWithGoogle();
      toast.success(`${auth.currentUser?.displayName} log in SuccessFully`);
      navigate(`${Vpath ? Vpath : "/"}`);
    } catch (err) {
      console.log(err);
    }
  };

  //  const handleWithGithub = async () =>{
  //   try{
  //       await continueWithGithub()
  //       navigate("/")
  //   }
  //   catch(err){
  //    console.log(err);
  //   }
  //  }

  const handelesubmit = async (form) => {
    form.preventDefault();
    let email = form.target.email.value;
    let password = form.target.password.value;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const err = [];

    if (password.trim() === "") {
      err.push("Password is required");
    } else if (!passwordPattern.test(password)) {
      err.push(
        "Password should include one uppercase , one lowercase , one special  character and length should 6 character"
      );
    }
    if (email.trim() === "") {
      err.push("Email is required");
    } else if (!emailPattern.test(email)) {
      err.push("Please provide verified email");
    }
    setErrors(err);

    if (err.length === 0) {
      try {
        await SignIn(email, password);
        toast.success(`${auth.currentUser?.displayName} log in SuccessFully`);
        navigate(`${Vpath ? Vpath : "/"}`);
        // if(auth.currentUser.emailVerified){
        //   await SignIn(email,password)

        // }
        // else{
        //   signout()
        //   setErrors((old)=> [...old,"Please first verify your email"])
        // }
      } catch (err) {
        setErrors((old) => [
          ...old,
          err.message.split("/")[1].replace(/-\)|-/g, " ").replace(").", " "),
        ]);
      }
    }
  };

  // const handleForget = async () =>{
  //   if(getemail.current.value.trim() === ""){
  //     setErrors((old)=>[...old , "First type your email in email field then click Forget password"])
  //   }
  //   else{
  //    try{
  //     await forgetpassword(getemail.current.value);
  //     alert("Please check you mail we give a link for forget password")
  //     setErrors([])
  //    }
  //    catch(err){
  //     setErrors((old)=>[...old , err.message.split("/")[1].replace(/-\)|-/g, " ").replace(").", " ") ])
  //    }
  //   }
  // }

  return (
    <>
      <Pagetitle>log in - TechNoWorld</Pagetitle>
      {/* Same as */}
      <ToastContainer />
      <div
        style={{
          backgroundImage:
            `url()`,
        }}
        className="hero  pb-40 min-h-screen mt-40   "
      >
        <div className="hero-content flex container justify-between">
          <div className="flex-1 lg:block hidden"><img src={log_in} alt="" /></div>
          <div className={`card flex-1 flex justify-stretch md:w-[500px]   shadow-2xl  ${Darkmood ? "bg-base-300" : "bg-sky-100"}`}>
            <div className="card-body">
              <div className="text-center"><h1 className="text-4xl font-bold">Log in</h1>
              <h3 className="text-xl mt-2">Log into your account</h3>
              </div>
              <form onSubmit={handelesubmit}>
                {Errors.length > 0 && (
                  <div className="erorrs text-red-600 bg-red-200 p-4 mb-5 rounded-lg">
                    <ul className="list-disc">
                      {Errors.map((ele, ind) => {
                        return (
                          <li key={ind} className="ml-4">
                            {ele}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    ref={getemail}
                    type="text"
                    placeholder="email"
                    name="email"
                    className="w-full input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="w-full input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    {/* <span onClick={handleForget} className="label-text cursor-pointer text-sky-500 underline">Forget Password</span> */}
                  </label>
                </div>
                <div className="form-control mt-3 md:mt-6">
                  <button type="submit" className="btn btn-neutral">
                    Sign IN
                  </button>
                </div>

                <div className="form-control text-center ">
                  <p className="py-2 mt-5 ">
                    Don't have an account?{" "}
                    <Link
                      state={{ Vpath: Vpath ? Vpath : null }}
                      to="/signup"
                      className="text-pink-400"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
              <div className=" flex md:flex-row flex-col gap-4 md:mt-6">
                <button
                  onClick={handleWithGoogle}
                  className="flex-1 btn btn-neutral"
                >
                  Sign in with <i className="text-xl fa-brands fa-google"></i>
                </button>
                {/* onClick={handleWithGithub} */}
                <button disabled className="flex-1 btn btn-neutral">
                  Sign in with <i className="text-xl fa-brands fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
