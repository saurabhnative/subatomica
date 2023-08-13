import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();
  return (
    <div>
      <header>
        <nav class="shadow">
          <div class="flex justify-between items-center py-6 px-10 container mx-auto">
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                Subatomica
              </h1>
            </div>

            <div>
              <div class="hover:cursor-pointer sm:hidden">
                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
              </div>
              <div class="flex items-center">
                <ul class="sm:flex space-x-4 hidden items-center">
                  <li>
                    <div
                      onClick={() => router.push('/')}
                      class="text-gray-700 hover:text-indigo-600 text-md cursor-pointer"
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
