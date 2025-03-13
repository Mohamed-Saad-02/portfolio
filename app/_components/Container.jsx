import clsx from "clsx";

function Container({ children, className = "" }) {
  return (
    <div className={clsx("xl:px-[136px] md:px-24 px-4", className)}>
      {children}
    </div>
  );
}

export default Container;
