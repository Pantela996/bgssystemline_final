import { useIntl } from "gatsby-plugin-react-intl";

const t = (stringId: string): string => {
  const { formatMessage } = useIntl();
  return formatMessage({ id: stringId });
};

export default t;
