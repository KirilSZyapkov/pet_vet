// components/Navbar.jsx
import Link from 'next/link';
// import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';


export default function Navbar() {
  // const { user, logout } = useAuth();
  const user = null; // Replace with actual user state
  const logout = () => { }; // Replace with actual logout function

  return (
    <nav className="w-full bg-primary text-primary-foreground shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold flex  items-center gap-2">VetCare <Activity /></Link>

        <div className="space-x-4 flex items-center">
          <Link href="/services">Услуги</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/team">Екип</Link>
          <Link href="/contact">Контакт</Link>

          {user ? (
            <>
              <Link href="/profile">Профил</Link>
              <Button variant="secondary" onClick={logout}>Изход</Button>
            </>
          ) : (
            <>

              <Button variant="secondary" asChild>
                <Link href="/login">Вход</Link>
              </Button>


              <Button variant="default" asChild>
                <Link href="/register">Регистрация</Link>
              </Button>

            </>
          )}
        </div>
      </div>
    </nav>
  );
}
