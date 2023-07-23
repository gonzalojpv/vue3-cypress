<template>
  <div class="container mx-auto mt-28 flex justify-between">
    <div>
      <h1 class="font-montserrat text-6xl text-dark-gray">Let's collaborate</h1>
      <a
        href="mailto:gonzalojpv@gmail.com"
        class="color-gray block text-base hover:text-gray-dark"
        >gonzalojpv@gmail.com</a
      >
      <div class="mt-10 flex justify-between">
        <div>
          <span class="mb-2 block">Find us</span>
          <ul class="grid grid-cols-4 gap-4">
            <li class="inline-block">
              <a
                href="#"
                class="text-base font-light text-gray hover:text-gray-dark"
                >FB</a
              >
            </li>
            <li>
              <a
                href="#"
                class="color-gray text-base font-light hover:text-gray-dark"
                >IG</a
              >
            </li>
            <li>
              <a
                href="#"
                class="color-gray text-base font-light hover:text-gray-dark"
                >BE</a
              >
            </li>
            <li>
              <a
                href="#"
                class="color-gray text-base font-light hover:text-gray-dark"
                >IN</a
              >
            </li>
          </ul>
        </div>
        <div>
          <span class="mb-2 block">Bahlum Code</span>
          <small
            class="block text-base font-light text-gray hover:text-gray-dark"
            >+52 (0) 2836361354</small
          >
        </div>
      </div>
    </div>
    <div>
      <h3 class="mb-6 text-3xl font-medium text-dark-gray">Say hello</h3>
      <form action="" class="font-montserrat">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          <div>
            <label
              for=""
              class="block text-sm font-medium uppercase leading-6 text-dark-gray"
              >Name</label
            >
            <input
              type="text"
              placeholder="Your name"
              class="hover:border-dak-gray focus:border-dak-gray hover:border-b-1 focus:border-b-1 border-b-1 block w-full border-x-0 border-t-0 border-white px-0 text-base font-light text-dark-gray shadow-sm ring-0 ring-inset ring-inherit placeholder:text-gray focus:ring-0 focus:ring-inset"
            />
          </div>
          <div>
            <label
              for=""
              class="block text-sm font-medium uppercase leading-6 text-dark-gray"
              >Subject</label
            >
            <input
              type="text"
              placeholder="Choose subject"
              class="hover:border-dak-gray focus:border-dak-gray hover:border-b-1 focus:border-b-1 border-b-1 block w-full border-x-0 border-t-0 border-white px-0 text-base font-light text-dark-gray shadow-sm ring-0 ring-inset ring-inherit placeholder:text-gray focus:ring-0 focus:ring-inset"
            />
          </div>
          <div>
            <label
              for=""
              class="block text-sm font-medium uppercase leading-6 text-dark-gray"
              >Company</label
            >
            <input
              type="text"
              placeholder="Choose subject"
              class="hover:border-dak-gray focus:border-dak-gray hover:border-b-1 focus:border-b-1 border-b-1 block w-full border-x-0 border-t-0 border-white px-0 text-base font-light text-dark-gray shadow-sm ring-0 ring-inset ring-inherit placeholder:text-gray focus:ring-0 focus:ring-inset"
            />
          </div>
          <div>
            <label
              for=""
              class="block text-sm font-medium uppercase leading-6 text-dark-gray"
              >Email</label
            >
            <input
              type="email"
              placeholder="Choose subject"
              class="hover:border-dak-gray focus:border-dak-gray hover:border-b-1 focus:border-b-1 border-b-1 block w-full border-x-0 border-t-0 border-white px-0 text-base font-light text-dark-gray shadow-sm ring-0 ring-inset ring-inherit placeholder:text-gray focus:ring-0 focus:ring-inset"
            />
          </div>
          <div class="col-span-2">
            <label
              for=""
              class="block text-sm font-medium uppercase leading-6 text-dark-gray"
              >Message</label
            >
            <textarea
              id=""
              name=""
              placeholder="Start typing here"
              class="hover:border-dak-gray focus:border-dak-gray hover:border-b-1 focus:border-b-1 border-b-1 block w-full border-x-0 border-t-0 border-white px-0 text-base font-light text-dark-gray shadow-sm ring-0 ring-inset ring-inherit placeholder:text-gray focus:ring-0 focus:ring-inset sm:leading-6"
            ></textarea>
          </div>
          <div class="col-span-2">
            <button
              type="submit"
              class="font-base font-light underline decoration-solid"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
