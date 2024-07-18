import React, { useState , useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=40fe7c2561d44cf29e119b6768fa7cfe`);
      setPosts(response.data.articles);
    };

    fetchPosts();
  }, []);
  return (
    <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
      </Routes>
  );
}

export default App;
