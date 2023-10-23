import React , {useContext} from 'react';
import '../styles/contact.css'
import { Context} from '../main';

import { Navigate } from 'react-router-dom';

const Contact = () => {
  const { isAuthenticated } = useContext(Context);
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-green-300 rounded-lg p-7 contact-box">
        <div className="md:flex ">
          <div className="md:w-full  p-6">
            <h2 className="text-4xl md:text-4xl text-center mb-4 text-gray-800 font-bold">
              Contact Information
            </h2>
            <br />

            <p className="mb-2 text-md">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:ashishpandey46209@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                ashishpandey46209@gmail.com
              </a>
            </p>
            <p className="mb-2 text-md">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/ash1sh-pandey"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                LinkedIn profile
              </a>
            </p>
            <p className="mb-2 text-md">
              <strong>Instagram:</strong>{' '}
              <a
                href="https://www.instagram.com/gamersenpai69/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                Instagram profile
              </a>
            </p>
            <p className="mb-2 text-md">
              <strong>Twitter:</strong>{' '}
              <a
                href="https://twitter.com/Ashishp7774"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                Twitter profile
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
