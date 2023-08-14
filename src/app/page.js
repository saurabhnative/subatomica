'use client';
import { useRouter } from 'next/navigation';
import {
  Client,
  Provider,
  cacheExchange,
  fetchExchange,
  gql,
  useQuery,
} from 'urql';
import Header from './components/Header';
const client = new Client({
  url: 'https://subatomica-main-saurabhnative.grafbase.app/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

const GetBlogs = gql`
  query Contentful {
    contentful {
      subatomicaBlogPostCollection {
        total
        items {
          blogTitle
          blogDescription
          blogImage {
            url
          }
          postnumber
        }
      }
    }
  }
`;

function Home() {
  const router = useRouter();
  const [result, reexecuteQuery] = useQuery({
    query: GetBlogs,
  });
  const { data, fetching, error } = result;
  return (
    <main>
      <Header />
      <section>
        <div class="bg-gray-100 sm:grid grid-rows-1 px-4 py-6 space-y-6 sm:space-y-0 sm:gap-4">
          <div class="h-auto lg:h-96 py-10 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
            <div class="ml-20 w-100">
              <h2 class="text-white text-3xl">What is Subatomica?</h2>
              <p class="text-indigo-100 mt-4 capitalize tracking-wider leading-7 font-normal pr-8">
                Most of us have heard about protons, electrons, and neutrons.
                Have you ever wondered what these particles are themselves made
                up of? <br></br>Welcome to Subatomica: Unveiling the Hidden
                Universe of Elementary Particles! Step into a world where the
                tiniest building blocks hold the key to understanding the
                grandest mysteries of the cosmos. Subatomica is your portal to
                the captivating realm of subatomic particles, where electrons,
                quarks, neutrinos, and their elusive cousins come to life
                through captivating narratives and insightful exploration.
              </p>

              <a
                href="#blogarticles"
                class="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
              >
                get started
              </a>
            </div>
          </div>
        </div>
      </section>
      {fetching ? (
        <div className="flex justify-center">
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="pb-12 bg-gray-100" id="blogarticles">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4">
              {data &&
                data.contentful.subatomicaBlogPostCollection.items.map(
                  (item) => {
                    return (
                      <div class="p-4 md:w-1/3" key={item.postnumber}>
                        <div
                          onClick={() =>
                            router.push(`/blog/${item.postnumber}`)
                          }
                          className="cursor-pointer"
                        >
                          <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                            <img
                              class="lg:h-48 md:h-36 w-full object-contain object-center scale-110 transition-all duration-400 hover:scale-100"
                              src={item.blogImage.url}
                              alt="blog"
                            />
                            <div class="p-6">
                              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                Elementary particle
                              </h2>
                              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                                {item.blogTitle}
                              </h1>
                              <p class="leading-relaxed mb-3 overflow-hidden blog-description">
                                {item.blogDescription}
                              </p>
                              <div class="flex items-center flex-wrap ">
                                <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                  Learn more
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const App = () => (
  <Provider value={client}>
    <Home />
  </Provider>
);

export default App;
