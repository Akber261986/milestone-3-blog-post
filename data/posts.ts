// data/posts.ts

export interface Post {
    slug: string;
    image: string;
    title: string;
    category?: string;
    content1?: string;
    content: string;
  }
  
  // Simulated blog posts data
  export const posts: Post[] = [
    {
      slug: "csr",
      image: "/images/image1.png",
      title: "Client Side Rendering (CSR)",
      category: "Dynamic Rendering",
      content1: "In the world of modern web development, Client-Side Rendering (CSR) has become a . . .",
      content: "In the world of modern web development, Client-Side Rendering (CSR) has become a popular technique for building interactive and dynamic applications. While server-side rendering (SSR) has its benefits, CSR shifts the rendering process from the server to the browser, providing a more dynamic user experience. In this post, we'll explore what CSR is, how it works in Next.js, and when you might want to use it.What is Client-Side Rendering Client-Side Rendering (CSR) refers to the process where JavaScript is responsible for building and rendering the content of the webpage in the user's browser, after the initial HTML file is loaded. In a CSR-driven app, the server sends a minimal HTML file, and the browser uses JavaScript to fetch and populate the necessary data."
    },
    {
      slug: "ssr",
      image: "/images/image2.png",
      title: "Server-Side Rendering (SSR)",
      category: "Dynamic Rendering",
      content1: "Server-Side Rendering (SSR) is one of the powerful features that Next.js provides, offering a . . .",
      content: "Server-Side Rendering (SSR) is one of the powerful features that Next.js provides, offering a balance between performance, SEO, and user experience. With SSR, web pages are generated on the server during each request, allowing for faster initial page loads and better SEO performance. In this post, we’ll dive into what SSR is, how it works in Next.js, and when to use it. What is Server-Side Rendering?"
      +

      " Server-Side Rendering (SSR) refers to the process where the server generates the full HTML content of a page for every incoming request. Instead of waiting for JavaScript to render content in the browser, SSR ensures that the user receives a fully rendered HTML page directly from the server. This approach allows for faster initial page loads, which improves user experience and SEO."
    },
    {
      slug: "ssg",
      image: "/images/image3.png",
      title: "Static Site Genration (SSG)",
      category: "Dynamic Rendering",
      content1: "Static Site Generation (SSG) is one of the key features of Next.js, allowing developers . . .",
      content: "Static Site Generation (SSG) is one of the key features of Next.js, allowing developers to pre-render pages at build time. This results in fast, SEO-optimized web pages that don’t rely on server-side processing for each request. In this post, we’ll explore what SSG is, how it works in Next.js, and when to use it for your web applications.What is Static Site Generation (SSG)? Static Site Generation (SSG) refers to the process of pre-rendering web pages into static HTML files during the build phase, rather than dynamically generating them on each request. The key difference between SSG and Server-Side Rendering (SSR) is that with SSG, the HTML pages are generated once at build time and reused for all requests, making it much faster to serve pages to users.Since the HTML is static, no server-side processing is needed after the build, leading to faster performance and improved scalability.",
    },
  ];
  