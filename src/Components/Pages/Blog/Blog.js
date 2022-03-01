import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "./Blogs/blogInfo";
import { motion } from "framer-motion";
import "./styles.css";

function Blogs() {
  const [filtered, setFiltered] = useState(blogs);
  const options = ["Life", "Work", "Projects", "Hobbies", "School"];
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "linear" }}
      className="Blogs"
    >
      <section className="select">
        <select
          defaultValue="default"
          name="blogs"
          id="blogs"
          onChange={(e) =>
            setFiltered(blogs.filter((blog) => blog.type === e.target.value))
          }
        >
          <option value="default" disabled hidden />
          {options.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </section>
      <section className="content">
        {filtered.map((blog, i) => {
          return (
            <Link
              key={i}
              to={`/blog/${blog.type.toLowerCase()}/${blog.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <section>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
                <hr />
              </section>
            </Link>
          );
        })}
      </section>
    </motion.div>
  );
}
export default Blogs;
