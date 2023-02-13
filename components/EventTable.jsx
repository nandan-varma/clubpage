import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import PostPreview from './post-preview'


  

const EventTable = ({ posts }) => {
  return (
    // <MoreStories posts={posts} />
  <div className="next-steps my-5" data->
    <h2 className="my-5 text-center" data->
      Events
    </h2>
    <Row className="r-flex " data->
      {posts.map((post, i) => (
        <Col key={1} md={5} className="me-5 mb-5 event">
        <Link
          as={`/event/${post.slug}`}
          href="/event/[slug]"
          className="hover:underline"
        >
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          </Link>
        </Col>
      ))}
    </Row>
  </div>
);
      }

export default EventTable;
