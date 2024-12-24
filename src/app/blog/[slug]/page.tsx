'use client'
import { Button } from '@/components/ui/button';
import { posts, Post } from '../../../../data/posts';
import { useState } from 'react';

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const { slug } = params;
  const post = posts.find((p: Post) => p.slug === slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); 
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-8">{post.content}</p>

      {/* Comment Section */}
      <div className="comments-section">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <ul className="mb-6">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2 border p-2 rounded">
              {comment}
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="border rounded p-2 w-full mb-4"
        />
        <Button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
}
