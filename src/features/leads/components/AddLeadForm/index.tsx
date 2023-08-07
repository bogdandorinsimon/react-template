import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AddLeadFormValue from "features/leads/models/AddLeadFormValue";
import useAddLead from "features/leads/mutations/useAddLead";
import { useTranslate } from "hooks/useTranslate";

type Props = {
  newId: number;
};

const leadFormSchema = yup.object({
  clientName: yup.string().required(),
  carName: yup.string().required(),
  year: yup.number().integer().positive().optional().min(1910)
});

const AddLeadForm = ({ newId }: Props) => {
  const { translate } = useTranslate();
  const { addLead } = useAddLead();

  const form = useForm<AddLeadFormValue>({
    defaultValues: {
      clientName: "",
      carName: ""
    },
    resolver: yupResolver(leadFormSchema)
  });
  const { register, handleSubmit, formState } = form;
  const { errors: formErrors } = formState;

  const handleAddButtonClick = (formData: AddLeadFormValue) => {
    addLead({
      id: newId,
      clientName: formData.clientName,
      carName: formData.carName
    });
  };

  return (
    <form onSubmit={handleSubmit(handleAddButtonClick)}>
      <Stack spacing={2}>
        <TextField
          label={translate("lead.form.car", "Car")}
          type="text"
          {...register("carName")}
          error={!!formErrors.carName}
          helperText={formErrors.carName?.message}
        />
        <TextField
          label={translate("lead.form.client", "Client")}
          type="text"
          {...register("clientName")}
          error={!!formErrors.clientName}
          helperText={formErrors.clientName?.message}
        />
        <TextField
          label={translate("lead.form.year", "Year")}
          type="number"
          {...register("year")}
          error={!!formErrors.year}
          helperText={formErrors.year?.message}
        />
      </Stack>
      <Button type="submit">{translate("lead.form.add", "Add")}</Button>
    </form>
  );
};

export default AddLeadForm;
