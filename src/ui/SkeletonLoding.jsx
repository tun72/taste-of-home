import { Country, CountryLayout } from "./Country";

function SkeletonLoding() {
  return (
    <CountryLayout>
      {Array.from({ length: 10 }).map((i, index) => {
        if (i === 0) return null;
        return (
          <Country key={index}>
            <div className="flex h-[100%] w-[100%] animate-pulse flex-col items-center justify-center">
              <div className="mb-3 h-[3rem] w-[60%] rounded-xl bg-slate-300"></div>
              <div className="h-[1rem] w-[60%] rounded-xl bg-slate-300"></div>
            </div>
          </Country>
        );
      })}
    </CountryLayout>
  );
}

export default SkeletonLoding;
