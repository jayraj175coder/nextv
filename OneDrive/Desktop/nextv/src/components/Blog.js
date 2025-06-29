import React, { useState } from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button, Pagination } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Admission Tips', 'College Reviews', 'Career Guidance', 'Exam Preparation', 'Student Life'];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to MHT-CET 2024: Everything You Need to Know",
      excerpt: "Master the MHT-CET exam with our comprehensive guide covering syllabus, preparation strategies, important dates, and expert tips for engineering aspirants.",
      content: "The Maharashtra Common Entrance Test (MHT-CET) is the gateway to engineering colleges in Maharashtra. This comprehensive guide covers everything from registration to result analysis...",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      category: "Exam Preparation",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
      tags: ["MHT-CET", "Engineering", "Admission", "Maharashtra"],
      views: 15420,
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Engineering Colleges in Maharashtra: 2024 Rankings",
      excerpt: "Discover the best engineering colleges in Maharashtra with detailed rankings, placement statistics, and student reviews to help you make the right choice.",
      content: "Choosing the right engineering college is crucial for your career. Our comprehensive analysis of Maharashtra's top engineering institutions includes placement records, infrastructure, and student satisfaction...",
      author: "Prof. Rajesh Kumar",
      date: "2024-01-12",
      category: "College Reviews",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
      tags: ["COEP", "VJTI", "SPIT", "Rankings"],
      views: 12850,
      featured: true
    },
    {
      id: 3,
      title: "How to Prepare for College Interviews: A Student's Guide",
      excerpt: "Ace your college interviews with our proven strategies, common questions, and expert advice to make a lasting impression on admission committees.",
      content: "College interviews can be nerve-wracking, but with proper preparation, you can turn them into opportunities to showcase your potential. This guide covers everything from dressing appropriately to handling difficult questions...",
      author: "Ms. Anjali Desai",
      date: "2024-01-10",
      category: "Admission Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      tags: ["Interview", "Admission", "Preparation", "Tips"],
      views: 9870,
      featured: false
    },
    {
      id: 4,
      title: "Computer Engineering vs Information Technology: Which to Choose?",
      excerpt: "Confused between Computer Engineering and IT? Our detailed comparison will help you understand the differences and choose the right path for your career.",
      content: "Both Computer Engineering and Information Technology are excellent career choices, but they have distinct focuses and career paths. This article breaks down the curriculum, job opportunities, and future prospects...",
      author: "Dr. Amit Patel",
      date: "2024-01-08",
      category: "Career Guidance",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
      tags: ["Computer Engineering", "IT", "Career Choice", "Comparison"],
      views: 11230,
      featured: false
    },
    {
      id: 5,
      title: "Student Life at COEP: What to Expect in Your First Year",
      excerpt: "Get an insider's view of student life at College of Engineering, Pune - from academics and extracurricular activities to hostel life and campus culture.",
      content: "COEP is not just about academics; it's a complete college experience. From technical festivals to cultural events, sports competitions to research opportunities, discover what makes COEP special...",
      author: "COEP Alumni",
      date: "2024-01-05",
      category: "Student Life",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400",
      tags: ["COEP", "Student Life", "Campus", "Experience"],
      views: 8760,
      featured: false
    },
    {
      id: 6,
      title: "Understanding College Cutoffs: How to Predict Your Chances",
      excerpt: "Learn how college cutoffs work, factors affecting them, and how to realistically assess your chances of getting into your dream college.",
      content: "College cutoffs are more complex than just marks. This article explains how cutoffs are calculated, historical trends, and how to use this information to make informed decisions about your college applications...",
      author: "Prof. Meera Iyer",
      date: "2024-01-03",
      category: "Admission Tips",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      tags: ["Cutoffs", "Admission", "Analysis", "Prediction"],
      views: 13450,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

  return (
    <div className="blog-page">
      <NavBar />
      
      <Container className="blog-container">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="blog-title">📚 College Admission Blog</h1>
            <p className="blog-subtitle">Expert insights, tips, and guides for engineering aspirants</p>
          </Col>
        </Row>

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col lg={8} md={12} className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button variant="primary" className="search-btn">
                🔍 Search
              </Button>
            </InputGroup>
          </Col>
          <Col lg={4} md={12}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Featured Posts */}
        {currentPage === 1 && (
          <Row className="mb-4">
            <Col>
              <h3 className="section-title">⭐ Featured Articles</h3>
            </Col>
          </Row>
        )}

        {currentPage === 1 && (
          <Row className="mb-4">
            {blogPosts.filter(post => post.featured).map(post => (
              <Col lg={6} md={12} key={post.id} className="mb-4">
                <Card className="featured-post-card">
                  <div className="featured-badge">Featured</div>
                  <Card.Img variant="top" src={post.image} className="post-image" />
                  <Card.Body>
                    <div className="post-meta">
                      <Badge bg="primary" className="category-badge">{post.category}</Badge>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <Card.Title className="post-title">{post.title}</Card.Title>
                    <Card.Text className="post-excerpt">{post.excerpt}</Card.Text>
                    <div className="post-footer">
                      <div className="author-info">
                        <span className="author">By {post.author}</span>
                        <span className="date">{formatDate(post.date)}</span>
                      </div>
                      <div className="post-stats">
                        <span className="views">👁️ {formatViews(post.views)}</span>
                      </div>
                    </div>
                    <div className="post-tags">
                      {post.tags.map(tag => (
                        <Badge key={tag} bg="light" text="dark" className="tag-badge">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* All Posts */}
        <Row className="mb-4">
          <Col>
            <h3 className="section-title">
              {currentPage === 1 ? '📖 All Articles' : `Page ${currentPage}`}
            </h3>
          </Col>
        </Row>

        <Row>
          {currentPosts.map(post => (
            <Col lg={4} md={6} key={post.id} className="mb-4">
              <Card className="post-card">
                <Card.Img variant="top" src={post.image} className="post-image" />
                <Card.Body>
                  <div className="post-meta">
                    <Badge bg="primary" className="category-badge">{post.category}</Badge>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <Card.Title className="post-title">{post.title}</Card.Title>
                  <Card.Text className="post-excerpt">{post.excerpt}</Card.Text>
                  <div className="post-footer">
                    <div className="author-info">
                      <span className="author">By {post.author}</span>
                      <span className="date">{formatDate(post.date)}</span>
                    </div>
                    <div className="post-stats">
                      <span className="views">👁️ {formatViews(post.views)}</span>
                    </div>
                  </div>
                  <div className="post-tags">
                    {post.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} bg="light" text="dark" className="tag-badge">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        {totalPages > 1 && (
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Pagination>
                <Pagination.First 
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev 
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                ))}
                
                <Pagination.Next 
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last 
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Col>
          </Row>
        )}

        {/* Newsletter Signup */}
        <Row className="mt-5">
          <Col>
            <Card className="newsletter-card">
              <Card.Body className="text-center">
                <h4>📧 Stay Updated!</h4>
                <p>Get the latest college admission tips and updates delivered to your inbox.</p>
                <Row className="justify-content-center">
                  <Col md={6}>
                    <InputGroup>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        className="newsletter-input"
                      />
                      <Button variant="primary" className="newsletter-btn">
                        Subscribe
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default Blog; 