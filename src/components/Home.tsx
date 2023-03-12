import { H1 } from "./H1";

export const Home = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto flex justify-center max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col justify-center text-center">
            <H1 text="Sofía González" />
            <img
              src="/images/divider.gif"
              alt="divider"
              className=""
            />
            <h3 className="text-breaker-bay">Web developer</h3>
          </div>
        </div>
      </div>
    </>
  );
};
