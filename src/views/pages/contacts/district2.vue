<template>
  <div class="container mx-auto mt-28 flex justify-between">
    <div>
      <h2 class="font-montserrat text-6xl">Let's collaborate</h2>
      <small>link</small>
      <div class="flex justify-between">
        <div>
          <span class="mb-2 block">Find us</span>
          <ul class="grid grid-cols-4 gap-4">
            <li class="inline-block">
              <a href="#" class="color-gray text-sm font-light">FB</a>
            </li>
            <li>
              <a href="#" class="color-gray text-sm font-light">IG</a>
            </li>
            <li>
              <a href="#" class="color-gray text-sm font-light">BE</a>
            </li>
            <li>
              <a href="#" class="color-gray text-sm font-light">IN</a>
            </li>
          </ul>
        </div>
        <div>
          <span class="mb-2 block">Bahlum Code</span>
          <small class="color-gray block font-light">+52 (0) 2836361354</small>
        </div>
      </div>
    </div>
    <div>
      <h3>Say hello</h3>
      <form action="" class="font-montserrat">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          <div>
            <label
              for=""
              class="text-gray-900 block text-sm font-medium leading-6"
              >Name</label
            >
            <input
              type="text"
              placeholder="Your name"
              class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              for=""
              class="text-gray-900 block text-sm font-medium leading-6"
              >Subject</label
            >
            <input
              type="text"
              placeholder="Choose subject"
              class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              for=""
              class="text-gray-900 block text-sm font-medium leading-6"
              >Company</label
            >
            <input
              type="text"
              placeholder="Choose subject"
              class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              for=""
              class="text-gray-900 block text-sm font-medium leading-6"
              >Email</label
            >
            <input
              type="text"
              placeholder="Choose subject"
              class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div class="col-span-2">
            <label
              for=""
              class="text-gray-900 block text-sm font-medium leading-6"
              >Message</label
            >
            <textarea
              id=""
              name=""
              cols="30"
              rows="10"
              class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <div class="col-span-2">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
