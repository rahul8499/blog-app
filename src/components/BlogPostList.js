import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(4); // Default limit to 10 posts per page


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=40fe7c2561d44cf29e119b6768fa7cfe&page=${currentPage}&pageSize=${limit}`);
      setPosts(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / limit));
    };

    fetchPosts();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
    <h1 className="text-center my-4">Blog Posts</h1>
    <Row>
      {posts.map((post, index) => (
        <Col md={6} lg={4} key={index} className="mb-4">
          <Card className="h-100 d-flex flex-column">
          {post.urlToImage ? (
                <Card.Img variant="top" src={post.urlToImage} />
              ) : (
                <div className="card-placeholder d-flex align-items-center justify-content-center">
                  No Image Available
                </div>
              )}            <Card.Body className="d-flex flex-column">
              <Card.Title className="card-title">{post.title}</Card.Title>
              <Card.Text className="card-text">{post.description}</Card.Text>
              <Card.Text className="text-muted">
                <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
              </Card.Text>
              <Link to={`/post/${index}`} className="btn btn-primary mt-auto">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <div className="d-flex justify-content-between my-4">
      <Button  onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button  onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  </Container>
  );
};

export default BlogPostList;
