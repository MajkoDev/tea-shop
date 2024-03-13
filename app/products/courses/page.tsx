import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { client } from "@/sanity/lib/client";

interface Course {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
}

// Fetching Tea Courses
const getTeaCourses = async (): Promise<Course[]> => {
  const query = `*[_type == "course"]{
    _id, 
    name, 
    "slug": slug.current,
    description, 
    price, 
    currency
  }`;
  const data = await client.fetch(query);
  return data;
};

export default function Page() {
  return (
    <div className="min-h-[66vh]">
      {/* HERO Section */}
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

      {/* PRODUCTS Section */}
      <ListTeaCourses />
    </div>
  );
}

async function ListTeaCourses() {
  const courses = await getTeaCourses();

  return (
    <div className="w-full p-3 flex flex-wrap gap-3">
      {courses.map((course) => (
        <div key={course._id}>
          <CourseProduct course={course} />
        </div>
      ))}
    </div>
  );
}

// Course Card
function CourseProduct({ course }: any) {
  return (
    <Card className="container">
      <CardHeader className="mb-0">
        <CardTitle className="text-lg">{course.name}</CardTitle>
        <CardDescription className="text-slate-500 font-semibold">
          <div className="flex flex-row gap-4">

          <p>27.3.2024</p>
          <p>from 9:00 to 15:00</p>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <h3 className="text-slate-500 font-extrabold text-sm">Description</h3>
        <p className="text-sm">{course.description}</p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">I am interested</Button>
        <Button>Enroll for course</Button>
      </CardFooter>
    </Card>
  );
}
