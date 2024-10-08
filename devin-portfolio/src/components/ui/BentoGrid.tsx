import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    id,
    title,
    description,
    className,
    imgClassName,
    titleClassName,
    img,
    spareImg,
}: {
    id?: number
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    className?: string;
    imgClassName?: string;
    titleClassName?: string;
    img?: string;
    spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 col-span-3 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-10",
        className
      )}
      style={{
        background: 'rgb(27,150,105)',
        backgroundColor: 'gradient...'
      }}
    >

      <div className="group-hover/bento:translate-x-2 transition duration-200">

        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div>
          {img}
        </div>
      </div>
    </div>
  );
};
