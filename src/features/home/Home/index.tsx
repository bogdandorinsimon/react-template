import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";

const Home = () => {
  const { translate } = useTranslate();

  return <WelcomeMessage message={translate("hello_text")} />;
};

export default Home;
