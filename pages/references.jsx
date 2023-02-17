import { Inter } from '@next/font/google'
import { getAllPosts } from '../utils/blogApi'
import Table from '../components/Table'

export default function Events({ allPosts }) {
  return (
    <>
      <Table TableName={'Recent Posts'} posts={ allPosts } />
    </>
  )
}
  export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ])
    return {
      props: { allPosts },
    }
  }