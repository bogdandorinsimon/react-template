import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";
import PageWrapper from "layout/PageWrapper";
import { PageName } from "models/layout";

const HomePage = () => {
  const { translate } = useTranslate();

  return (
    <PageWrapper>
      <WelcomeMessage
        message={translate("welcome", "Hello world!", { page: PageName.HOME })}
      />
    </PageWrapper>
  );
};

export default HomePage;
