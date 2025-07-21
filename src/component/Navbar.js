// import { usePathname } from "next/navigation"     
import Link from 'next/link';



const Navbar = () => {
  return (
    <div>
        <Link href='/'>Home</Link>
        <br/>
        <Link href='/about'>About</Link>
         <br/>
        <Link href='/booking'>Booking</Link>
         <br/>
        <Link href='/booking/flight'>Flight Booking</Link>
         <br/>
        <Link href='/booking/bus'>Bus Booking</Link>
         <br/>


    </div>
  )
}

export default Navbar