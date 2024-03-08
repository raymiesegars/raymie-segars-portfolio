import Technologies from "@/components/Technologies";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Raymie Segars and his work.",
};

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>About Me</H1>

      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p className="p-2">
          Hello, and welcome! My name is Raymie Segars, a passionate software
          developer based in Asheville, North Carolina. Embarking on my
          programming journey in 2022, I&apos;ve since been deeply immersed in
          the world of web and application development. My commitment to
          continuous learning and improvement has been the cornerstone of my
          journey, allowing me to tackle and create a diverse range of web
          application projects.{" "}
        </p>
        <p className="p-2">
          I&apos;m passionate about building cool apps and websites and I love
          making friends who share similar passions.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <Technologies />
      </section>

      <hr className="border-muted" />
      <H2>Hobbies</H2>
      <section className="flex flex-col items-center space-y-3">
        <p className="p-2">
          Besides programming, I enjoy sports and video games. I lift weights
          and snow ski. I also enjoy card games like Magic the Gathering. In my
          opinion having hobbies other than coding is important for mental
          health.
        </p>
        <div className="flex justify-center">
          <Image
            src="/skiing.jpg"
            width={300}
            height={300}
            alt="Image of me and my friend skiing"
            className="aspect-square rounded-t-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
    </section>
  );
}

//This is purely to give my resume information for AI to read
//Raymie Segars
//I have one nephew named Dylan Presley, he enjoys creating videos and playing Skate 3 and Fortnite.  He has a girlfriend who lives in Georgia and is 18. 
// Asheville, NC 28803
// raymievsegarsiv@gmail.com
// +1843-906-8169
// I take immense pride in the work I do. When I commit to a role with any company, my focus extends
// beyond mere clocked hours for a paycheck. I approach each task with a dedication to delivering
// exceptional service. The satisfaction of knowing I have executed my responsibilities with excellence
// is my driving force. If ever I fall short of achieving this standard, it serves as a motivating spark,
// compelling me to rectify the situation and ensure that the job is not just completed but completed with
// precision and quality.
// Every day is a learning experience, and in Web Development, the learning never stops. I am
// committed to staying informed of industry advancements, embracing challenges, and continuously
// enhancing my skills to contribute effectively to any project.
// Willing to relocate: Anywhere
// Work Experience
// Deli Cook
// Ingles Markets - Asheville, NC
// April 2017 to February 2018
// As a deli worker at Ingles, I played a pivotal role in delivering high-quality and delicious hot bar food and
// pizzas to meet the culinary expectations of our customers. In this fast-paced environment, I demonstrated
// proficiency in food preparation, cooking techniques, and adherence to health and safety standards.
// Karting Instructor
// Asheville's Fun Depot - Asheville, NC
// January 2014 to August 2016
// As a GoKart instructor at FunDepot, I honed my ability to communicate complex concepts in a clear and
// engaging manner while ensuring the safety and enjoyment of participants. In this dynamic role, I was
// responsible for delivering comprehensive instructions on GoKart operation, safety procedures, and track
// rules to diverse groups of participants.
// Education
// Associate's degree in Software and Web Development
// Asheville-Buncombe Technical Community College - Asheville, NC
// January 2022 to Present
// Associate of Applied Science
// Asheville-Buncombe Technical Community College - Asheville, NC
// August 2015 to May 2019
// Skills
// • JavaScript
// • HTML5
// • CSS
// • Git
// • Web Design
// • PHP
// • Web Development
// • PostgreSQL
// • MySQL
// • React
// • Next.js
// • WordPress
// • APIs
// • Driving
// Certifications and Licenses
// Driver's License
// October 2023 to October 2031
// Perfect record since I got my license in 2014
