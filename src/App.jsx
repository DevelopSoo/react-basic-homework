import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // 2. + 버튼 클릭 시 숫자를 1 증가시킨다.
  const addCount = () => {
    setCount(count + 1);
  };

  // 3. - 버튼 클릭 시 숫자를 1 감소시킨다.
  const minusCount = () => {
    setCount(count - 1);
  };

  // 4. reset 버튼 클릭 시 숫자를 다시 0으로 변경한다.
  const reset = () => {
    setCount(0);
  };

  return (
    // 1. 숫자(초기값: 0)와 +, -, reset 버튼을 만든다.
    // 6. 태그 최상단에 Fragment를 추가해본다. <>도 가능
    <Fragment>
      {/* 3. - 버튼 클릭 시 숫자를 1 감소시킨다. */}
      <button className="btn" onClick={minusCount}>
        -
      </button>
      Count: {count}
      {/* 2. + 버튼 클릭 시 숫자를 1 증가시킨다. */}
      <button className="btn" onClick={addCount}>
        +
      </button>
      {/* 4. reset 버튼 클릭 시 숫자를 다시 0으로 변경한다. */}
      <button className="btn" onClick={reset}>
        reset
      </button>
    </Fragment>
  );
}

export default App;
