"use client"; 

import Image from 'next/image';
import { posts } from '../../data/posts';
import { Card, CardTitle, CardContent } from '@/components/ui/card';

export default function HomePage() {

  return (
      <div className="min-h-screen flex flex-col items-center mt-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Welcome to My Blog</h1>
      
      <ul>
        {/* Loop through the posts and create a link to each blog post */}
        {posts.map((post) => (
          <li key={post.slug} className=" flex flex-col items-center mb-4 ">
            <Card
              className="flex flex-col items-center w-1/2 space-y-2 border-none"
              >
              <Image 
              src={post.image}
              alt='blog Image'
              width={384}
              height={200}
              className='rounded-lg'
              />
              <CardTitle 
              className='text-2xl text-center mb-6 mt-2'
              >
                {post.title}
              </CardTitle>
              <CardContent
              className='text-justify'
              >
                {post.content}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>    
  );
}
