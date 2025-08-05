// components/Modal.js
import { useState } from 'react';

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-2xl mx-auto">
            {/* Modal content */}
            <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-2xl font-bold text-black"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <a
                href="https://rzp.io/l/ADFreedom"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Image with slightly larger size */}
                <img
                  src="/banner 1;1.png"
                  alt="Fundamental Analysis 3.0"
                  className="w-[300px] sm:w-[500px] h-auto mx-auto rounded-xl"
                />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
