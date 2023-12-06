import { useMemo, useState } from 'react';
import { initialItems } from './utils';
interface DemoProps { }

function UseMemoDemo({ }: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // Swap this to show performance with useMemo
  // const selectedItem = useMemo(
  //   () => items.find((item) => item.isSelected),
  //   [items],
  // );
  // Bugged version (note the new find method and the dependency array)
  // const selectedItem = useMemo(
  //   () => items.find((item) => item.id === count),
  //   [items],
  // );
  // Swap this to show perfromance without useMemo
  const selectedItem = items.find((item) => item.isSelected);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <h1>Selected Item: {selectedItem?.id}</h1>
        <div style={{display: "flex", maxWidth: "200px", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
          <button onClick={() => setCount(count + 1)} style={{minHeight: "50px", minWidth: "100px", borderRadius: "25px"}}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default UseMemoDemo;
