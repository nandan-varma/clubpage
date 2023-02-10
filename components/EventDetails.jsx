import { useRouter } from 'next/router'
import eventData from '../utils/eventData';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'reactstrap';

const EventTable = () => {

    const router = useRouter()
    const pageData = eventData[router.query?.pid];
    return (
        <>
            <h2 data->{pageData.title}</h2>
            <p className="lead" data->{pageData.description}</p>
            <Image src={pageData.image} alt='event image' width='540' height='360' data-/>
            <hr/>
            <Link href={pageData.link} className="m-3 p-3 btn btn-primary btn-margin registerlink">
                Register
            </Link>
        </>
    )
}

export default EventTable;