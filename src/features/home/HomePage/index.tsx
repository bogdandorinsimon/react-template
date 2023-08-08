import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";
import PageWrapper from "layout/PageWrapper";

const HomePage = () => {
  const { translate } = useTranslate();

  return (
    <PageWrapper>
      <WelcomeMessage message={translate("welcome_message", "Hello world!")} />
    </PageWrapper>
  );
};

export default HomePage;
