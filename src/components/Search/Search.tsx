import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'components/Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

export const Search = ({ hasError, onSubmit}: SearchProps) => {

  const [search, setSearch] = useState<string>('');

  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // const text = event.currentTarget.username.value;

    // if (text.trim()) {
    //   onSubmit(text);
    //   event.currentTarget.reset();
    // }

    if (search) {
      onSubmit(search);
      setSearch('');
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (text.trim()) {
      setSearch(text);
    }
  }

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <SearchIcon />
      </label>
      <input
        ref={searchRef}
        type="text"
        value={search}
        className={styles.textField}
        id="search"
        name="username"
        onChange={handleChange}
        placeholder="Search GitHub username..."
      />
      {hasError && (
        <div className={styles.error}>
          No result
        </div>
      )}
      <Button>Search</Button>
    </div>
  </form>
)};
