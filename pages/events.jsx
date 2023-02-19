import { Inter } from '@next/font/google'
import { getAllPosts } from '../utils/eventApi'
import Table from '../components/Table'

export default function Events({ allPosts }) {
  return (
    <>
      <Table TableName={'Events'} posts={ allPosts } category={'event'} />
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