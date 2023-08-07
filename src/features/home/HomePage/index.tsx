import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";

const HomePage = () => {
  const { translate } = useTranslate();

  return (
    <WelcomeMessage message={translate("welcome_message", "Hello world!")} />
  );
};

export default HomePage;
