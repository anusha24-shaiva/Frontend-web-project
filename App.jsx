import { useState } from "react";

import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";

import posts from "./data/posts.json";

import "./App.css";

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category))
  ];

  const filteredPosts = posts.filter((post) => {

    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      <main className="container">

        <h2 className="section-title">
          Latest Blog Posts
        </h2>

        <div className="controls">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        <div className="blog-container">

          {filteredPosts.length > 0 ? (

            filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                category={post.category}
                description={post.description}
              />
            ))

          ) : (

            <p className="no-posts">
              No blog posts found.
            </p>

          )}

        </div>

      </main>
    </>
  );
}

export default App;