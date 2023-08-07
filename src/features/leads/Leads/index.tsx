import { Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import WelcomeMessage from "components/WelcomeMessage";
import AddLeadForm from "features/leads/components/AddLeadForm";
import { useLeadsData } from "features/leads/hooks/useLeadsData";
import { Lead } from "features/leads/model/Lead";

const Leads = () => {
  const onLeadsFetchSuccess = (data: Lead[]) => {
    const numberOfLeads = data.length;

    console.log(`congrats! ${numberOfLeads} fetched`);
  };

  const onLeadsFetchFailure = (error: AxiosError) => {
    console.log(`ow, no! :( ${error.message}`);
  };

  const {
    isLoading,
    data: leadNames,
    isError,
    error,
    refetch
  } = useLeadsData({
    enabled: false,
    onSuccess: onLeadsFetchSuccess,
    onError: onLeadsFetchFailure,
    select: (data: any): string[] => {
      const leadClientNames = data.data.map((lead: Lead) => lead.clientName);

      return leadClientNames as string[];
    }
  });

  const handleFetchButtonClick = () => {
    refetch();
  };

  const renderLeads = () => {
    if (isLoading) {
      return <Typography variant="h2">Loading...</Typography>;
    }

    if (isError) {
      return (
        <Typography variant="h3">{(error as AxiosError).message}</Typography>
      );
    }

    return leadNames?.map((leadClientName: any) => (
      <div key={leadClientName}>{leadClientName}</div>
    ));
  };

  return (
    <>
      <WelcomeMessage message="Hello from the leads page!" />
      <AddLeadForm newId={leadNames ? leadNames.length! + 1 : 0} />
      <Button onClick={handleFetchButtonClick}>
        <Typography>Fetch the leads</Typography>
      </Button>
      {renderLeads()}
    </>
  );
};

export default Leads;
