import { Inter } from '@next/font/google'
import EventTable from '../components/EventTable'
import { getAllPosts } from '../utils/eventApi'

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