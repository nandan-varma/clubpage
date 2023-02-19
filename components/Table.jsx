import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import PostPreview from './post-preview'

{/* <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
      <div class="col">
        <div class="service-card">
          <h3>Tracking Lead</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div> */}

  

const Table = ({TableName , posts , category }) => {
  return (
    // <MoreStories posts={posts} />
    <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
    <div class="container">
    <div class="row">
      <div class="section-header text-center">
        <h2 class="fw-bold fs-1">
          {TableName}
        </h2>
      </div>
    </div>
    <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center" data->
      {posts.map((post, i) => (
        <div key={i} class="col event">
        <div class="service-card" style={{backgroundImage : "url("+post.coverImage+")",backgroundSize: 'cover'}}>
        <Link
          as={`/${category}/${post.slug}`}
          href={`/${category}/[slug]`}
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
        </div></div>
      ))}
  </div></div>
  </section>
);
      }

export default Table;
