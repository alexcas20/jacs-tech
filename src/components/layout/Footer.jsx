import logo from "../../assets/logo/logo-jacs.png";
export const Footer = () => {
  return (
    <footer
      className="bg-slate-900 flex flex-col items-center justify-between text-slate-50 py-4 px-5 
      lg:flex-row lg:items-center"
    >
      <div className="md:w-[200px] flex justify-center items-center gap-8 pb-1 md:pb-0">
        <img
          src={logo}
          alt="logo jacs tech"
          className="w-[180px] md:w-[120px] object-cover"
        />
       
      </div>

      <div className="w-[80%] md:w-[50%]">
      <p className="text-xs md:text-md text-slate-400 pb-8 md:p-0 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nobis at ad ipsum consectetur possimus magnam, ipsam libero quisquam, maiores saepe obcaecati iusto tenetur id eos excepturi optio quos est.
        </p>
      </div>
     
     
      <h3 className="capitalize tracking-widest opacity-60 font-semibold text-center pb-5 md:pt-6 lg:hidden ">follow me</h3>
      <div className="flex flex-col justify-between h-[100px]">
     
        {/* From Uiverse.io by shubhamshahane1234 */}
        <div className="flex items-center justify-center gap-4">
          <div className="social-button">
            <a
              href="https://github.com/alexcas20"
              target="_blank"
              rel="noopener noreferrer "
            >
              <button className="relative w-12 h-12 rounded-full group">
                <div className="floater w-full h-full absolute top-0 left-0 bg-green-600 rounded-full duration-300 group-hover:-left-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-600 rounded-full">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:fill-[#ffffff] fill-white duration-300"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
          <div className="social-button">
            <a
              href="https://www.linkedin.com/in/jorge-calvillo-salas-29032523b"
              target="_blank"
              rel="noopener noreferrer "
            >
              <button className="relative w-12 h-12 rounded-full group">
                <div className="floater w-full h-full absolute top-0 left-0 bg-cyan-600 rounded-full duration-300 group-hover:left-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-cyan-600 rounded-full">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:fill-[#ffffff] fill-white duration-300"
                      d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <h3 className="tracking-widest">Made with ❤️ by Jacs </h3>
      </div>
    </footer>
  );
};
