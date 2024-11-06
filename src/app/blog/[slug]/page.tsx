'use client'
import { posts, Post } from '../../../../data/posts';
import { useState } from 'react';

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  // Find the post that matches the slug from the URL
  const post = posts.find((p: Post) => p.slug === slug);

  // Handle the case where no post is found
  if (!post) {
    return <div>Post not found!</div>;
  }

  // State to manage the comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear the input field after adding the comment
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
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
