import { Oval } from "react-loader-spinner";
import "./Loader.css";
export const Loader = () => {
  return (
    <div className="loader">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="#2e81f4"
        secondaryColor="lightgray"
      />
      <h3>App is loading</h3>
    </div>
  );
};
