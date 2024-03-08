import React from "react";

export default function Page() {
  return (
    <div className="min-h-[66vh]">
      {/* HERO */}

      <div className="flex flex-col gap-2 mb-12">
        <h1 className="text-3xl font-extralight mt-12 mb-2 text-center">
          Tea Courses
        </h1>
        <h2 className="text-center text-xl font-bold">
          Learn the Art of Tea Preparation!
        </h2>
        <p className="text-md text-center font-extralight">
          Are you passionate about tea and eager to master the art of brewing
          the perfect cup? Join us for our upcoming Tea Courses where we'll
          delve into the right manner and method of preparing tea.
        </p>
        <p className="text-md text-center font-light text-slate-600">
          Whether you're a tea enthusiast or a beginner looking to elevate your
          tea-making skills, our courses offer a comprehensive exploration of
          tea culture, etiquette, and techniques. From selecting the finest
          leaves to mastering brewing temperatures and steeping times, you'll
          learn everything you need to know to create exquisite teas.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="flex flex-col gap-4">
        <div className="w-full bg-slate-100 rounded-xl flex flex-col gap-2 p-4">
          <div className="flex flex-col items-center">
            <h1 className="text-center font-bold text-xl">Tea Essentials</h1>
            <div className="flex flex-row gap-4 text-slate-500 font-semibold">
              <p>27.3.2024</p>
              <p>from 9:00 to 15:00</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-3">
              <div className="flex-1 text-sm">
                <h3 className="text-slate-500">Description</h3>
                <p>
                  Join us for "Tea Essentials," a course designed for beginners
                  and enthusiasts alike to discover the fundamentals of tea
                  preparation. Learn about the origins of tea, the various
                  types, and the essential tools for brewing the perfect cup.
                </p>
                <ol className="divide-y divide-gray-200 mt-4 mb-2">
                <li className="text-xs py-1">
                    Introduction to tea varieties: green, black, oolong, and
                    herbal.
                  </li>
                  <li className="text-xs py-1">
                    Hands-on experience in selecting and measuring tea leaves.
                  </li>
                  <li className="text-xs py-1">
                    Understanding water temperature and steeping times for
                    different types of tea.
                  </li>
                </ol>

                <p className="font-semibold">
                  In this course, participants will gain a deeper appreciation
                  for tea culture and develop the skills needed to brew a
                  delightful cup of tea from start to finish.
                </p>
              </div>
             <div className="flex-1">

             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseProduct() {
  return (
    <article>
      <h1>type of course</h1>
      <h2>time, date and place of event</h2>
      <div>
        <p>description</p>
      </div>
    </article>
  );
}
