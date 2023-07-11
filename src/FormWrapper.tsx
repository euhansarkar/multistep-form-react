import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <div
        className="grid gap-4 sm:gap-2 grid-cols-[auto,minmax(auto,400px)]"
      >
        {children}
      </div>
    </>
  );
}
