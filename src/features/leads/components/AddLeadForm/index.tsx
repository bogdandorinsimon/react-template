import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAddLeadData } from "features/leads/hooks/useLeadsData";

type AddLeadFormValues = {
  clientName: string;
  carName: string;
  year: Optional<number>;
};

type Props = {
  newId: number;
};

const leadFormSchema = yup.object({
  clientName: yup.string().required(),
  carName: yup.string().required(),
  year: yup.number().integer().positive().optional().min(1910)
});

const AddLeadForm = ({ newId }: Props) => {
  const { mutate } = useAddLeadData();

  const form = useForm<AddLeadFormValues>({
    defaultValues: {
      clientName: "",
      carName: ""
    },
    resolver: yupResolver(leadFormSchema)
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleAddButtonClick = (formData: AddLeadFormValues) => {
    mutate({
      id: newId,
      clientName: formData.clientName,
      carName: formData.carName
    });
  };

  return (
    <form onSubmit={handleSubmit(handleAddButtonClick)}>
      <Stack spacing={2}>
        <TextField
          label="Car"
          type="text"
          {...register("carName")}
          error={!!errors.carName}
          helperText={errors.carName?.message}
        />
        <TextField
          label="Client"
          type="text"
          {...register("clientName")}
          error={!!errors.clientName}
          helperText={errors.clientName?.message}
        />
        <TextField
          label="Year"
          type="number"
          {...register("year")}
          error={!!errors.year}
          helperText={errors.year?.message}
        />
      </Stack>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddLeadForm;
