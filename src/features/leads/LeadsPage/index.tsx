import { Button, Typography } from "@mui/material";
import WelcomeMessage from "components/WelcomeMessage";
import AddLeadForm from "features/leads/components/AddLeadForm";
import { useTranslate } from "hooks/useTranslate";
import useLeadNames from "../queries/useLeadNames";

const LeadsPage = () => {
  const { translate } = useTranslate();

  const { leads, isLoading, isError, error, refetch } = useLeadNames();

  const handleFetchButtonClick = () => {
    refetch();
  };

  const renderLeads = () => {
    if (isLoading) {
      return (
        <Typography variant="h2">
          {translate("app.loading", "Loading...")}
        </Typography>
      );
    }

    if (isError) {
      return (
        <Typography variant="h3">
          {error
            ? error.message
            : translate(
                "app.error",
                "An error has occurred, please retry later!"
              )}
        </Typography>
      );
    }

    if (!leads || !leads.length) {
      return null;
    }

    return leads.map((leadClientName: string) => (
      <Typography key={leadClientName}>{leadClientName}</Typography>
    ));
  };

  return (
    <>
      <WelcomeMessage
        message={translate("welcome.leads", "Hello from the leads page!")}
      />
      <AddLeadForm newId={leads ? leads.length! + 1 : 0} />
      <Button onClick={handleFetchButtonClick}>
        <Typography>{translate("leads.fetch", "Fetch the leads")}</Typography>
      </Button>
      {renderLeads()}
    </>
  );
};

export default LeadsPage;
