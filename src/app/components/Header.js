import { useRouter } from 'next/navigation';
import { FaHouse } from 'react-icons/fa6';
function Header() {
  const router = useRouter();
  return (
    <div>
      <header>
        <nav className="shadow">
          <div className="flex justify-between items-center py-6 px-10 container mx-auto">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                Subatomica
              </h1>
            </div>

            <div>
              <div className="hover:cursor-pointer sm:hidden">
                <FaHouse
                  className="text-indigo-600 text-2xl"
                  onClick={() => router.push('/')}
                />
              </div>
              <div className="flex items-center">
                <ul className="sm:flex space-x-4 hidden items-center">
                  <li>
                    <div
                      onClick={() => router.push('/')}
                      className="text-indigo-600 hover:text-green-600 text-md cursor-pointer font-medium"
                    >
                      Home
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
