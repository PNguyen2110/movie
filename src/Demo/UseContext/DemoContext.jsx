import { ChildDemoContext } from "./ChildDemoContext";
import UseContext from "./UseContext";

export const DemoContext = () => {
  return (
    <div>
      {/* <UseContext> */}
      DemoContext
      <ChildDemoContext />
      {/* </UseContext> */}
    </div>
  );
};
