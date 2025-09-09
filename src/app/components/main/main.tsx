   "use client";
import React from "react";
import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import Image from "next/image";
import About from "../about/about";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Projects } from "../projects/projects";
import resume from '../..//../../public/resume.png'


export default function Main() {
  return (
   <>
   <Header />
   <About />
   <Projects />
   <Footer />

    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(calsans.className, "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.url && (
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                </Link>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

   </>
  );
}

const dummyContent = [
  {
    title: "Resume Builder",
    url: "resume-builder-ten-rust.vercel.app",
    description: (
      <>
        <p>
          A simple and interactive Resume Builder website built with JavaScript.
          Users can create, customize, and download their resumes in a
          professional format with ease.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <ul>
          <li>
            Create a resume with personal, educational, and professional details
          </li>
          <li>Add multiple skills, experiences, and projects dynamically</li>
          <li>Live preview of the resume as you type</li>
          <li>Download resume as PDF</li>
          <li>Responsive UI with clean design</li>
        </ul>
      </>
    ),
    badge: "React",
    image: resume,
  },
];

