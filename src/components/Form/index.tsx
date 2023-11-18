import { yupResolver } from "@hookform/resolvers/yup";
import { FormHTMLAttributes, ReactNode, Ref } from "react";
import {
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm
} from "react-hook-form";
import { AnyObjectSchema } from "yup";

type Props<FormValues extends Record<string, unknown>> = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  "ref" | "onSubmit" | "children"
> & {
  onSubmit: SubmitHandler<FormValues>;
  children: (methods: UseFormReturn<FormValues>) => ReactNode;
  schema: AnyObjectSchema;
  mode?: UseFormProps<FormValues>["mode"];
  defaultValues?: UseFormProps<FormValues>["defaultValues"];
  ref?: Ref<HTMLFormElement> | null;
};

export const Form = <
  FormValues extends Record<string, unknown> = Record<string, unknown>
>({
  onSubmit,
  children,
  schema,
  mode = "all",
  defaultValues,
  ref,
  ...otherProps
}: Props<FormValues>) => {
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
    mode
  });

  return (
    <form ref={ref} onSubmit={methods.handleSubmit(onSubmit)} {...otherProps}>
      {children(methods)}
    </form>
  );
};
