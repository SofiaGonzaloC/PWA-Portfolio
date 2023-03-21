import { H1 } from "./H1";
import { Body } from "./Body";

export const Home = () => {
  return (
    <>
      <Body id="home">
        <div className="flex flex-col justify-center text-center">
          <H1 text="Sofía González" />
          <img src="/images/divider.gif" alt="divider" className="" />
          <h3 className="text-breaker-bay">Web developer</h3>
        </div>
      </Body>
    </>
  );
};
