// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { HelloLib } from "@nx-workspace/hello-lib";

export function App() {
  return (
    <>
      <HelloLib />
    </>
  );
}

export default App;
