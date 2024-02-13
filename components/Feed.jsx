"use client";

import { useState, useEffect, useMemo } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={() => handleTagClick(post)}
        />
      ))}
    </div>
  );
};

function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (p) =>
        p.prompt.includes(searchText) ||
        p.tag.includes(searchText) ||
        p.creator.username.includes(searchText)
    );
  }, [searchText, posts]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
    return () => {};
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={filteredPosts}
        handleTagClick={(prompt) => {
          setSearchText(prompt.tag);
        }}
      />
    </section>
  );
}

export default Feed;
