import { useQuery, useMutation, useQueryClient } from "react-query";
import request from "api/axios-utils";
import { Lead } from "features/leads/model/Lead";

const fetchLeads = (): Promise<Lead[]> => request({ url: "/leads" });

const addLead = (lead: Lead) =>
  request({ url: "/leads", method: "post", data: lead });

export const useLeadsData = (options: any) =>
  useQuery("leads", fetchLeads, options);

export const useAddLeadData = () => {
  const queryClient = useQueryClient();

  return useMutation(addLead, {
    // onSuccess: (data) => {
    // if you want to force a refetch
    // queryClient.invalidateQueries("leads");
    // this is if you want to update the data without and additional request
    //   queryClient.setQueriesData("leads", (oldQueryData: any) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },

    // below is an example of optimistic update
    // before the mutation is fired

    onMutate: async (newLead: Lead) => {
      // cancel any refetched so that they don't override the optimistic update
      await queryClient.cancelQueries("leads");
      // get hold of current data - to rollback in case we fail
      const previousLeads = queryClient.getQueryData("leads");
      // update the query data
      queryClient.setQueriesData("leads", (oldQueryData: any) => {
        if (!oldQueryData) {
          return undefined;
        }

        return {
          ...oldQueryData,
          data: [...oldQueryData.data, newLead]
        };
      });

      // return in case it fails
      return { previousLeads };
    },
    onError: (_error, _lead, context: any) => {
      queryClient.setQueryData("leads", context.previousLeads);
    },
    onSettled: () => {
      // successfull or error
      // refetch the leads
      queryClient.invalidateQueries("leads");
    }
  });
};
