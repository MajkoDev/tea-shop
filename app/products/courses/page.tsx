import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-extralight my-12 text-center">
        Tea Courses
      </h1>
      {/* HERO */}
      {/* PRODUCTS */}
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
