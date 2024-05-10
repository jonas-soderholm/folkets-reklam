import React from "react";

export default function Footer() {
  return (
    <>
      <div className="pt-[10rem] relative bg-[#e1e1e1]">
        <footer class="bg-white shadow dark:bg-neutral-800 ">
          <div class="w-full p-4 md:py-8">
            <div class="flex items-center justify-between">
              <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img className="logo w-[2rem] mr-4" src="/pink_logo.png" alt="" />
                <div className="md:text-3xl text-1xl text-slate-200">Folkets reklam</div>
              </a>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="/om" class="hover:underline me-4 md:me-6">
                    Om
                  </a>
                </li>
                <li>
                  <a href="/kontakt" class="hover:underline me-4 md:me-6">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="" class="hover:underline">
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
