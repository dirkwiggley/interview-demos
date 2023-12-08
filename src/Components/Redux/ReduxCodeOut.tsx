const ReduxCodeOut = () => {
  const getText = () => {
    let arr = [
      "import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';",
      " ",
      "interface CounterState {",
      "  value: number",
      "}",
      " ",
      "const initialState: CounterState = {",
      "  value: 0",
      "},",
      " ",
      "const counterSlice = createSlice({",
      "  name: 'counter',",
      "  initialState,",
      "  reducers: {",
      "    increment: (state) => {",
      "      // this is ok because redux will make a copy of ",
      "      // the original state which is modified there before",
      "      // being updated by Redux itself.",
      "      state.value += 1;",
      "    },",
      "    decrement: (state) => {",
      "      state.value -= 1;",
      "    },",
      "    incrementByAmount: (state, action: PayloadAction<number>) => {",
      "      state.value += action.payload;",
      "    },",
      "  },",
      "  extraReducers: (builder) => {",
      "    builder.addCase(incrementAsync.pending, () => {",
      "      console.log('incrementAsync.pending');",
      "    })",
      "    .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {",
      "      state.value += action.payload;",
      "    });",
      "  }",
      "});",
      " ",
      "export const incrementAsync = createAsyncThunk(",
      "  'counter/incrementAsync',",
      "  async (amount: number) => {",
      "    await new Promise((resolve) => setTimeout(resolve, 1000));",
      "    return amount;",
      "  }",
      ")",
      " ",
      "export const { increment, decrement, incrementByAmount } = counterSlice.actions;",
      " ",
      "export default counterSlice.reducer;"
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
    <div style={{ borderTop: "1px solid black", borderLeft: "1px solid black" }}>
      <div style={{ marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5, display: "block" }}>
        <pre>
          <code>
            <div>
              Contents of ReduxDemoDemo.tsx
            </div>
            <hr />
            {getText()}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ReduxCodeOut;