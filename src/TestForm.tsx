import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
  lastName: string;
};

export function TestForm() {
  const { register, reset, getValues } = useForm<FormFields>({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
    },
  });

  return (
    <form>
      <input {...register("firstName")} type="text" />

      <input {...register("lastName")} type="text" />

      <button
        type="button"
        onClick={() => {
          console.log(getValues());
          reset();
          console.log(getValues());
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(getValues());
          reset({
            firstName: "Jane",
            lastName: "Smith",
          });
          console.log(getValues());
        }}
      >
        Reset with value
      </button>
    </form>
  );
}
