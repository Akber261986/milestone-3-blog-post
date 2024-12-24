"use client";

import Image from "next/image";
import { posts } from "../../data/posts";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-8">
      {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Welcome to My Blog
      </h1> */}

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 ">
        {/* Loop through the posts and create a link to each blog post */}
        {posts.map((post) => (
          <li key={post.slug} className=" flex flex-col mb-4 px-6">
            <Card className="flex flex-col border-none p-4 space-y-2">
              <Image
                src={post.image}
                alt="blog Image"
                width={384}
                height={200}
                className="w-[360px] h-[240px] rounded-lg"
              />
              <div className="text-xs py-0.5 px-2 w-fit rounded bg-[#4B6BFB20] text-[#4B6BFB]">{post.category}</div>
              <CardTitle className="text-lg ">
                {post.title}
              </CardTitle>
              <p className="">
                {post.content1}
              </p>
              <Link href={`blog/${post.slug}`}>
                <Button className="w-full">See More</Button>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
