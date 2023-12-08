import { useMemo, useState } from 'react';
import { initialItems } from './utils';
import UseMemoCodeOut from './UseMemoCodeOut';
import { useShowCodeContext } from '../NavLinks/ShowCodeContext';
interface DemoProps { }

function UseMemoDemo({ }: DemoProps) {
  const [showCode] = useShowCodeContext();
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // Swap this to show performance with useMemo
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
  );
  // Swap this to show bugged version where count value doesn't work
  // Bugged version (note the new find method and the dependency array)
  // const selectedItem = useMemo(
  //   () => items.find((item) => item.id === count),
  //   [items],
  // );
  // Swap this to show perfromance without useMemo
  // const selectedItem = items.find((item) => item.isSelected);

  return (
    <>
      <div style={{borderTop: "1px solid black"}}>
        <div style={{marginLeft: 5, marginRight: 5}}>
          <h2>Count: {count}</h2>
          <h2>Selected Item: {selectedItem?.id}</h2>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10}}>
          <button onClick={() => setCount(count + 1)} style={{minHeight: "30px", minWidth: "100px", borderRadius: "25px"}}>
            Increment
          </button>
        </div>
      </div>
      {showCode ? <UseMemoCodeOut /> : null}
    </>
  );
}

export default UseMemoDemo;
