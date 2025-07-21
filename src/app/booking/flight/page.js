import Link from 'next/link';


const page = () => {
    return (
        <>
    <div>Flight Booking</div>
    <Link href="/booking/flight/airIndia">Air India</Link>
    <br/>
<Link href="/booking/flight/indigo">Indigo</Link>
    <br/>
    <Link href="/booking/flight/qatarairways">Qatar Airways</Link>
    <br/>
    </>
    )}

    export default page;