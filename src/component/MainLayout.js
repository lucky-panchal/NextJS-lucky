'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{
        backgroundColor: '#333',
        padding: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link 
            href="/" 
            style={{
              color: pathname === '/' ? '#fff' : '#ccc',
              textDecoration: 'none',
              fontWeight: pathname === '/' ? 'bold' : 'normal'
            }}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            style={{
              color: pathname === '/about' ? '#fff' : '#ccc',
              textDecoration: 'none',
              fontWeight: pathname === '/about' ? 'bold' : 'normal'
            }}
          >
            About
          </Link>
          <Link 
            href="/booking" 
            style={{
              color: pathname === '/booking' ? '#fff' : '#ccc',
              textDecoration: 'none',
              fontWeight: pathname === '/booking' ? 'bold' : 'normal'
            }}
          >
            Booking
          </Link>
          <Link 
            href="/booking/flight" 
            style={{
              color: pathname === '/booking/flight' ? '#fff' : '#ccc',
              textDecoration: 'none',
              fontWeight: pathname === '/booking/flight' ? 'bold' : 'normal'
            }}
          >
            Flight
          </Link>
          <Link 
            href="/booking/bus" 
            style={{
              color: pathname === '/booking/bus' ? '#fff' : '#ccc',
              textDecoration: 'none',
              fontWeight: pathname === '/booking/bus' ? 'bold' : 'normal'
            }}
          >
            Bus
          </Link>
        </div>
      </nav>
      <main style={{ padding: '0 1rem' }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;