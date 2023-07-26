import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>

              <Img
                src={"/1.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/1.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project{" "}
                </span>

                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Cartify
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">CARTIFY</span> is a
                  remarkable cross-platform E-commerce app developed using{" "}
                  <span className="text-AAsecondary">React Native</span> during
                  January 2023 to February 2023. This app boasts a stunning user
                  interface, ensuring a delightful shopping experience for
                  users. By seamlessly integrating with{" "}
                  <span className="text-AAsecondary">RESTful API</span>, I
                  enabled efficient communication between the app and the
                  backend, facilitating smooth data retrieval and updates. With
                  skills in{" "}
                  <span className="text-AAsecondary">React Native</span> and
                  working with{" "}
                  <span className="text-AAsecondary">REST APIs</span>, I
                  successfully delivered a versatile and user-friendly
                  E-commerce application, providing a seamless shopping platform
                  for customers across various devices.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">Expo</span>
                <span className="pr-4 z-10">Payment Integration</span>
                <span className="pr-4 z-10">Api Integration</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/aum1618/cartify" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>
              <Img
                src={"/a.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/a.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>

                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Tiketi
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Tiketi</span> is a
                  captivating{" "}
                  <span className="text-AAsecondary">React Native</span> project
                  completed between May 2023 and June 2023. This bus ticket
                  booking app boasts a beautiful UI and seamless integration
                  with a <span className="text-AAsecondary">CodeIgniter</span>{" "}
                  backend, utilizing{" "}
                  <span className="text-AAsecondary">REST APIs</span>. To
                  enhance user experience, I integrated{" "}
                  <span className="text-AAsecondary">PayPal</span> for secure
                  and convenient payments. With skills in{" "}
                  <span className="text-AAsecondary">PayPal Integration</span>,{" "}
                  <span className="text-AAsecondary">React Native</span>, and{" "}
                  <span className="text-AAsecondary">REST APIs</span>, I
                  successfully delivered a functional and user-friendly mobile
                  application for ticket booking.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">Google authentication</span>
                <span className="pr-4 z-10">Api</span>
                <span className="pr-4 z-10">Ticket Booking</span>
                <span className="pr-4 z-10">Paypal</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/aum1618/ticketi" />
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>

              <Img
                src={"/2.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/2.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  GupShup
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary">Gupshup</span> is an
                  exciting{" "}
                  <span className="text-AAsecondary">React Native</span> project
                  developed during March 2023 to April 2023. As a real-time chat
                  app, Gupshup caters to both Android and iOS users. I
                  integrated <span className="text-AAsecondary">Firebase</span>{" "}
                  for seamless OTP verification, real-time chatting
                  functionality, and{" "}
                  <span className="text-AAsecondary">Cloud Firestore</span> for
                  efficient user data storage. With expertise in{" "}
                  <span className="text-AAsecondary">React Native</span>,{" "}
                  <span className="text-AAsecondary">Cloud Firestore</span>,
                  phone authentication, and OTP implementation using{" "}
                  <span className="text-AAsecondary">Firebase</span>, I
                  successfully delivered an engaging and efficient real-time
                  chat application for both platforms.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">Websockets</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Push Notifications</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/aum1618/gupshup" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>
              <Img
                src={"/b.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/b.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  MealsToGo
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">MealsToGo</span> is an
                  innovative restaurant locator app crafted using{" "}
                  <span className="text-AAsecondary">React Native</span> in
                  February 2023. Developed in association with Zero To Mastery
                  Academy, this app seamlessly integrates{" "}
                  <span className="text-AAsecondary">Firebase</span> and{" "}
                  <span className="text-AAsecondary">Google Maps API</span> to
                  provide users with a comprehensive dining experience. With
                  MealsToGo, users can effortlessly locate restaurants in their
                  vicinity, making dining decisions a breeze. Through expertise
                  in <span className="text-AAsecondary">Google Maps API</span>,{" "}
                  <span className="text-AAsecondary">Firebase</span>, and{" "}
                  <span className="text-AAsecondary">React Native</span>, I
                  successfully delivered an efficient and user-friendly
                  restaurant locator app, empowering users to explore culinary
                  delights with ease.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">Google Maps API</span>
                <span className="pr-4 z-10">Push Notifications</span>
                <span className="pr-4 z-10">ZTM ACADEMY</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/aum1618/MealsToGo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
