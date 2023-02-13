import { getAllPosts , getPostBySlug } from '../../utils/api'
import markdownToHtml from '../../utils/markdownToHtml'
import {Router , useRouter} from 'next/router'

  
  export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
      return <ErrorPage statusCode={404} />
    }
    return (
        <>
            <div>{post.title}</div>
            <div>{post.date}</div>
            <div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
        </>
    )
  }

  export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
      'title',
      'date',
      'slug',
      'author',
      'content',
      'ogImage',
      'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    }
  }
  
  export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
  }
  