export default function RegisterView() {
  return (
    <div className="flex flex-col md:flex-row h-full  text-black mt-10">
      {/* Left side - Register Form */}
      <div className="w-full md:w-1/2 p-6 flex flex-col">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <p className="text-sm text-gray-600 mb-4">Sign up with</p>

          <div className="flex gap-3 mb-4">
            <button className="flex-1 border border-gray-500 py-4 flex justify-center items-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>
            <button className="flex-1 border border-gray-500 py-3 flex justify-center items-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="#000"
                />
              </svg>
            </button>
            <button className="flex-1 border border-gray-500 py-3 flex justify-center items-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.4 19.63 18.64C21.23 16.87 22.18 14.61 22.18 12.28C22.18 6.53 17.68 2.04 12 2.04Z"
                  fill="#1877F2"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="mx-4 text-gray-500">OR</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <form className="space-y-4">
            <h3 className="font-medium">Your Name</h3>
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-black rounded-lg p-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-black  rounded-lg p-3"
              />
            </div>

            <div>
              <h3 className="font-medium mb-2">Gender</h3>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="male"
                    className="w-4 h-4 border-black rounded mr-2"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="female"
                    className="w-4 h-4 border-black rounded mr-2"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="other"
                    className="w-4 h-4 border-gray-300 rounded mr-2"
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
            </div>

            <h3 className="font-medium">Login Details</h3>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-black   rounded-lg p-3"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-black  rounded-lg p-3"
              />
              <p className="text-xs text-gray-600 mt-1">
                Minimum 8 characters with at least one uppercase, one lowercase,
                one special character and a number
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  By clicking Log In you agree to our website KicksClub Terms &
                  Conditions, Kicks Privacy Notice and Terms & Conditions.
                </label>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="keep-logged-reg"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="keep-logged-reg" className="text-gray-700">
                  Keep me logged in - applies to all log in options below.
                  <br />
                  <span className="text-gray-600 text-xs">More info</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white w-full py-3 flex items-center justify-between px-4 rounded"
            >
              REGISTER
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Membership Benefits */}
      <div className="w-full md:w-1/2 p-8 bg-gray-100 flex items-center rounded-4xl h-[500px]">
        <div className="">
          <h2 className="text-2xl font-bold mb-4">
            Join Kicks Club Get Rewarded Today.
          </h2>
          <p className="mb-4">
            As kicks club member you get rewarded with what you love for doing
            what<br></br> you love. Sign up today and receive immediate access to these
            Level 1 benefits:
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li>Free shipping</li>
            <li>A 15% off voucher for your next purchase</li>
            <li>Access to Members Only products and sales</li>
            <li>Access to adidas Running and Training apps</li>
            <li>Special offers and promotions</li>
          </ul>

          <p className="mb-6">
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from adiClub.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded flex items-center justify-between w-full">
            JOIN THE CLUB
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
