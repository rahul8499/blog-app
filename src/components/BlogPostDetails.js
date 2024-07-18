import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogPostDetails.css'; // Import the custom CSS file

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts[parseInt(id)];

  if (!post) return <Container><div>Post not found</div></Container>;

  return (
    <Container className="my-4 d-flex justify-content-center">
      <Card className="shadow-sm small-card">
        {post.urlToImage ? (
          <Card.Img variant="top" src={post.urlToImage} className="small-card-img" />
        ) : (
          <div className="card-placeholder d-flex align-items-center justify-content-center bg-light text-muted">
            No Image Available
          </div>
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.content}
          </Card.Text>
          <Button variant="primary" as={Link} to="/" className="mt-auto">Back to list</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPostDetails;
