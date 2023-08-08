import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { LEADS_KEYS } from "api/constants";
import { Lead } from "../models";
import { getLeads } from "../services";

const useLeadNames = () => {
  const {
    data: leads,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery<Lead[], AxiosError, string[]>(LEADS_KEYS.all, () => getLeads(), {
    enabled: false,
    onSuccess: (leadNames: string[]) => {
      const numberOfLeads = leadNames.length;

      console.log(`congrats! ${numberOfLeads} fetched`);
    },
    onError: (fetchError: AxiosError) => {
      console.log(`ow, no! :( ${fetchError.message}`);
    },
    select: (fetchedLeads: Lead[]): string[] => {
      return fetchedLeads.map((lead: Lead) => lead.clientName);
    }
  });

  return { leads, isLoading, isError, error, refetch };
};

export default useLeadNames;
