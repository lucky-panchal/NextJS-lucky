'use client'
import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation';
const page=()=>{
    const {slug} = useParams();
    const router = useRouter();
    return(
        <>
        <div>
            <h1>Dynamic Routing</h1>
            <p>Flight Slug: {slug}</p>
            {/* <Link href="/booking/flight">Back</Link> */}
            <button onClick={()=>router.push("/booking/flight")}>Back</button>
        </div>
        </>
    )
}

export default page;