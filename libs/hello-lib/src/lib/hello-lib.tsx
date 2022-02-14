import './hello-lib.module.css';

/* eslint-disable-next-line */
export interface HelloLibProps {}

export function HelloLib(props: HelloLibProps) {
  return (
    <div>
      <h1>Welcome to HelloLib Test!</h1>
    </div>
  );
}

export default HelloLib;
