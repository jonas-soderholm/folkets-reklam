import React from "react";

export default function Footer() {
  return (
    <>
      <div className="card-background pt-[10rem] relative">
        <div class="w-full relative min-h-screen flex items-center justify-center bg-[#489fad]">
          <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full text-7xl font-bold">
              <h1 class="w-full md:w-2/3">Kan vi hjälpa dig?</h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
              <p class="w-full md:w-2/3 text-slate-200">
                To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work
                has been tagged
              </p>
              <div class="w-44 pt-6 md:pt-0">
                <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                  Contact US
                </a>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex mt-24 mb-12 flex-row justify-between">
                <div class=""></div>
                <a class="hidden md:block cursor-pointer text-slate-200 hover:text-white uppercase">About</a>
                <a class="hidden md:block cursor-pointer text-slate-200 hover:text-white uppercase">Services</a>
                <a class="hidden md:block cursor-pointer text-slate-200 hover:text-white uppercase">Why us</a>
                <a class="hidden md:block cursor-pointer text-slate-200 hover:text-white uppercase">Contact</a>
                <div class="flex flex-row space-x-8 items-center justify-between">
                  <a>
                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <hr class="border-gray-600" />
              <p class="w-full text-center my-12 text-slate-200">Copyright © </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
