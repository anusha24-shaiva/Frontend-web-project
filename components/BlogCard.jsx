function BlogCard({ title, category, description }) {
  return (
    <article className="blog-card">

      <span className="category">
        {category}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>

      <button>Read More</button>

    </article>
  );
}

export default BlogCard;