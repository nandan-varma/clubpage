import { Inter } from '@next/font/google'
import { getAllPosts } from '../utils/eventApi'
import EventTable from '../components/EventTable'

export default function Events({ allPosts }) {
  return (
    <>
      <EventTable posts={ allPosts } />
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