import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import getTextColor from '../utils/dynamicTextColor'
// type Props = {
//   title: string
//   coverImage: string
//   date: string
//   excerpt: string
//   author: Author
//   slug: string
// }

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <div>
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="text-3xl mb-3 leading-snug">
        {/* <Link
          as={`/event/${slug}`}
          href="/event/[slug]"
          className="hover:underline"
        > */}
          {title}
        {/* </Link> */}
      </h3>
      <div className="mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  )
}

export default PostPreview
