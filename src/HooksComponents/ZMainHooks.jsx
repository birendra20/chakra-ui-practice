import React from "react";
import ParentUsecallbackEg1 from "./useCallback/useCallbackEg1/Parent";
import ParentPropDrill from "./useContext/0.propDrilling/Parent";
import ParentContext from "./useContext/1.example/Parent";
import UseMemoEg1 from "./useMemo/UseMemoEg1";

import Counter from "./useReducer/Counter";
import UseRefEg from "./useRef/1.eg";

const MainHooks = () => {
  return (
    <div>
      {/* <Adding />
    
      <FetchBook />
      <CounterFnSetState />
      <BasicEffect />
      <ArrayDepMount /> */}
      {/* <Counter /> */}
      {/* with propdrilling */}
      {/* <ParentPropDrill /> */}
      {/* <ParentContext /> */}
      {/* <UseRefEg /> */}
      {/* <UseMemoEg1 /> */}
      <ParentUsecallbackEg1 />
    </div>
  );
};

export default MainHooks;
