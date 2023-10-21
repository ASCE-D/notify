import React from "react";
import {
  BiPhoneCall,
  BiLogoWhatsapp,
  BiLogoGmail,
  BiMessage,
} from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="intrdoction md:w-3/5 p-8 text-center mx-auto">
        <br />
        <br />
        <h1 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
          Welcome to Notify
        </h1>
        <p className="text-lg text-gray-600 leading-7">
          At Notify, we believe that taking control of your health
          should be simple and stress-free. We understand that managing
          medications can be a challenging task, especially when life gets busy.
          That's why we're here to make your health journey more manageable, one
          pill at a time. Our mission is clear: to empower you to stay on top of
          your medication regimen and improve your overall well-being. We offer
          a user-friendly platform designed to remind you when to take your
          medications, ensuring that you never miss a dose. Here, you'll find a
          range of tools and features to help you organize and track your
          medications, set personalized reminders, and gain insights into your
          adherence. Our goal is to make medication management effortless and
          reliable, so you can focus on what matters most—your health and peace
          of mind. Join us on this journey toward better health and medication
          adherence. Say goodbye to missed doses and hello to a healthier,
          happier you. Welcome to Notify, where we're committed to
          simplifying your health management.
        </p>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="md:flex justify-center">
            <div className="text-center md:w-1/2 md:p-4 mb-4">
              <h1 className="text-4xl md:text-5xl text-gray-800 font-bold">
                Did you know?
              </h1>{" "}
              <br />
              <p className="text-lg text-gray-600 leading-7">
                A 2017 study found that adults were much more likely to take
                their medication, and to take it on time, after receiving daily
                text message reminders. Over 2 weeks, the percentage of people
                who forgot their medications dropped from 46% to 5%. The
                percentage who had medication delays dropped from 85% to 18%.
                Another study in 2019 found that patients using medication
                reminder apps have better medication adherence after 3 months
                than those who didn’t use these apps.
              </p>
            </div>
            <br /><br /><br />
            <div className="bg-green-300 rounded-lg p-7 shadow-md w-full md:w-1/2 mb-4">
              <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-bold">
                Set a Reminder
              </h2>
              <br />
              <form>
                <div className="mb-4">
                  <label className="block font-bold text-gray-800">
                    Medication name :
                  </label>
                  <input
                    name="medicationname"
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-gray-800">
                    Set time :
                  </label>
                  <div className="flex items-center">
                    <input
                      name="remindehr"
                      type="number"
                      min="0"
                      max="23"
                      className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
                    />
                    <span className="mx-2">:</span>
                    <input
                      name="remindemin"
                      type="number"
                      min="0"
                      max="59"
                      className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                  <br />
                  <div className="mb-4">
                    <label className="block font-bold text-gray-800 mb-2">
                      Notification Method :
                    </label>
                    <div className="w-4/5 mx-auto">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center ">
                        <input type="checkbox" name="whatsapp"/>
                        <span className="ml-2 text-lg">
                          <BiLogoWhatsapp className=" inline text-3xl text-gray-600" />WhatsApp
                        </span>
                      </label>

                      <label className="flex items-center">
                        <input type="checkbox" name="gmail" />
                        <span className="ml-2 text-lg">
                          <BiLogoGmail className=" inline text-3xl text-gray-600" /> Gmail
                        </span>
                      </label>
                      </div>
                      <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" name="sms"/>
                        <span className="ml-2 text-lg">
                          <BiMessage className=" inline text-3xl text-gray-600" /> Short Message
                          Service
                        </span>
                      </label>

                      <label className="flex items-center">
                        <input type="checkbox" name="phone"/>
                        <span className="ml-2 text-lg">
                          <BiPhoneCall className=" inline text-3xl text-gray-600" /> Phone Call
                        </span>
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 w-full"
                >
                  Submit
                </button>
              </form>
            </div>
            <br /><br /><br />

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
