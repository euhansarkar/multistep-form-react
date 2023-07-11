import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert("Successful Account Creation");
  }

  return (
    <div className="relative bg-white border border-black p-8 m-4 rounded-lg font-sans max-w-max">
      <form onSubmit={onSubmit}>
        <div className="absolute top-2 right-20">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="mt-4 flex gap-2 justify-end">
          {!isFirstStep ? (
            <button 
              type="button"
              onClick={back}
              className="bg-sky-700 px-2 py-1 rounded-lg text-white"
              >
              Back
            </button>
          ) : (
            <button
            className="bg-slate-500 px-2 py-1 rounded-lg text-white"
              disabled
              type="button"
              onClick={back}
            >
              Back
            </button>
          )}
          <button
            className="bg-amber-700 px-2 py-1 rounded-lg text-white"
            type="submit"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
