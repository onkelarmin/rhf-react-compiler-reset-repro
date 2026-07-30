import { useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
  lastName: string;
};

export function TestForm() {
  const { register, reset } = useForm<FormFields>({
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
          reset();
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          reset({
            firstName: "Jane",
            lastName: "Smith",
          });
        }}
      >
        Reset with value
      </button>
    </form>
  );
}
