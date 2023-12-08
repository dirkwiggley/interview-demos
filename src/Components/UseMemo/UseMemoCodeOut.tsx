const UseMemoCodeOut = () => {
  const getText = () => {
    let arr = [
      "import { useMemo, useState } from 'react';",
      "import { initialItems } from './utils';",
      "interface DemoProps { }",
      " ",
      "function UseMemoDemo({ }: DemoProps) {",
      "  const [count, setCount] = useState(0);",
      "  const [items] = useState(initialItems);",
      " ",
      "  // Swap this to show performance with useMemo",
      "  const selectedItem = useMemo(",
      "    () => items.find((item) => item.isSelected),",
      "    [items],",
      "  );",
      "  // Swap this to show bugged version where count value doesn't work",
      "  // Bugged version (note the new find method and the dependency array)",
      "  // const selectedItem = useMemo(",
      "  //   () => items.find((item) => item.id === count),",
      "  //   [items],",
      "  // );",
      "  // Swap this to show perfromance without useMemo",
      "  // const selectedItem = items.find((item) => item.isSelected);",
      " ",
      "  return (",
      "    <>",
      "      <div style={{borderTop: '1px solid black'}}>",
      "        <div style={{marginLeft: 5, marginRight: 5}}>",
      " ",
      "          <h2>Selected Item: {selectedItem?.id}</h2>",
      "        </div>",
      "        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>",
      "          <button onClick={() => setCount(count + 1)} style={{minHeight: '30px', minWidth: '100px', borderRadius: '25px'}}>",
      "            Increment",
      "          </button>",
      "        </div>",
      "      </div>",
      "    </>",
      "  );",
      "}",
      " ",
      "export default UseMemoDemo;"
    ];
    
    const newArr: Array<any> = [];
    arr.forEach((item, index) => {
      newArr.push(<div key={index} style={{ whiteSpace: "pre-wrap" }}>{item}</div>)
    });
    return (
      <>
        {newArr}
      </>
    )
  }


  return (
    <div style={{ borderTop: "2px solid black" }}>
      <div style={{ marginTop: 10, marginBottom: 10, marginLeft: 5, display: "block" }}>
        <pre>
          <code>
            <div>
              Contents of UseMemoDemo.tsx
            </div>
            <hr style={{ marginRight: 5 }} />
            {getText()}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default UseMemoCodeOut;