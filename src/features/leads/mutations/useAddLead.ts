import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { LEADS_KEYS } from "api/constants";
import { Lead } from "../models/Lead";
import { createLead } from "../services/leadsService";

const useAddLead = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, isSuccess, mutate } = useMutation<
    Lead,
    AxiosError,
    Lead
  >(createLead, {
    // onMutate: async (newLead: Lead) => {
    //   // cancel any refetched so that they don't override the optimistic update
    //   await queryClient.cancelQueries(LEADS_KEYS.all);

    //   // get hold of current data - to rollback in case we fail
    //   const previousLeads = queryClient.getQueryData(LEADS_KEYS.all);

    //   // update the query data
    //   queryClient.setQueriesData(LEADS_KEYS.all, (oldQueryData: any) => {
    //     if (!oldQueryData) {
    //       return undefined;
    //     }

    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, newLead]
    //     };
    //   });

    //   // return in case it fails
    //   return { previousLeads };
    // },
    // onError: (_error, _lead, context: unknown) => {
    //   queryClient.setQueryData(LEADS_KEYS.all, context.previousLeads);
    // },
    // onSettled: () => {
    //   queryClient.invalidateQueries(LEADS_KEYS.all);
    // },
    // or simply invalidate the previous query
    onSuccess: () => {
      queryClient.invalidateQueries(LEADS_KEYS.all);
    }
  });

  return { isLoading, isError, isSuccess, addLead: mutate };
};

export default useAddLead;
