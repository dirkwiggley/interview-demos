import { memo } from 'react';

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log('Search rendered!');

  return (
    <input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
      style={{minHeight: "25px"}}
    />
  );
}

// Usually doesn't rerender when parent rerenders 
// as long as props haven't changed, not guaranteed though
export default memo(Search);