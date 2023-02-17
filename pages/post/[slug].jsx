import { getAllPosts , getPostBySlug } from '../../utils/blogApi'
import markdownToHtml from '../../utils/markdownToHtml'
import {Router , useRouter} from 'next/router'
import ErrorMessage from '../../components/ErrorMessage'
import Head from 'next/head'

  
  export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
      return <ErrorMessage>404 : Cant find the required page</ErrorMessage>
    }
    return (
        <>
            <Head><title>{post.title}</title></Head>
            <div className='d-flex justify-content-between'>
            <h1 className='p-3'>{post.title}</h1>
            <div className='p-5'>{post.date}</div>
            </div>
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
  