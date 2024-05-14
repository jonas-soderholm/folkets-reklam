import React from "react";

export default function Footer() {
  return (
    <>
      <div className="pt-[0rem] relative bg-[#e1e1e1]">
        <footer className="bg-white shadow dark:bg-neutral-800 ">
          <div className="w-full p-4 md:py-8">
            <div className="flex flex-col gap-6 items-center justify-center">
              <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img className="logo w-[2rem] mr-4 mx-auto" src="/pink_logo.png" alt="" />
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="/om" className="hover:underline me-4 md:me-6">
                    Om oss
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="hover:underline me-4 md:me-6">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="" className="hover:underline">
                Folkets reklam
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
