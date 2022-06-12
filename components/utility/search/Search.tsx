import { useState } from 'react';
import { useRouter } from 'next/router';


export interface ISearch {
 
}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/results?search=${searchTerm}`);
      }}
      className="flex flex-col items-center gap-y-5"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3"
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button
          type="submit"
          className="btn-primary"
          onClick={() => alert('FEATURE COMING SOON!')}
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
