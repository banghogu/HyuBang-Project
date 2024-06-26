import { cn } from "@/utils/cn";

const SelectLayoutContainer = ({ children, additionalClass, ...props }) => {
  return (
    <div
      className={cn("w-[600px] h-auto p-4 m-5 ", additionalClass)}
      {...props}>
      {children}
    </div>
  );
};

export { SelectLayoutContainer };
