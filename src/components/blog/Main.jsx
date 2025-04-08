import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    excerpt: 'Learn how useState and useEffect simplify your React components and enhance your state management.',
    author: 'Aditya Ranjan',
    date: 'April 8, 2025',
    image: 'https://source.unsplash.com/800x400/?code,react'
  },
  {
    id: 2,
    title: '10 Must-Know JavaScript Tricks',
    excerpt: 'Boost your coding productivity with these lesser-known but powerful JavaScript techniques.',
    author: 'Aditya Ranjan',
    date: 'April 6, 2025',
    image: 'https://source.unsplash.com/800x400/?javascript,developer'
  },
  {
    id: 3,
    title: 'Building Scalable Node.js APIs',
    excerpt: 'Tips and practices for designing performant REST APIs using Express, MongoDB, and JWT.',
    author: 'Aditya Ranjan',
    date: 'April 2, 2025',
    image: 'https://source.unsplash.com/800x400/?nodejs,backend'
  }
]

const Main = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-12 px-6 md:px-16">
      
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800">Welcome to DevInsights</h1>
        <p className="mt-4 text-gray-600 text-lg">Explore tutorials, best practices & tools for modern web development.</p>
      </section>

      {/* Featured */}
      <section className="mb-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
          <img
            src="https://source.unsplash.com/1000x600/?technology,code"
            alt="Featured Post"
            className="md:w-1/2 object-cover h-96 w-full"
          />
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-3">🚀 Featured Post</h2>
            <h3 className="text-2xl font-semibold text-gray-800">Mastering React in 2025</h3>
            <p className="text-gray-600 mt-3">
              Dive into the latest advancements in React including Server Components, Suspense, and new architectural patterns.
            </p>
            <p className="mt-4 text-sm text-gray-400">By Aditya Ranjan • April 1, 2025</p>
            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              Read Full Post
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📚 Recent Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
                <p className="text-gray-400 text-sm mt-3">By {post.author} • {post.date}</p>
                <button className="mt-4 text-blue-600 font-medium hover:underline">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main
