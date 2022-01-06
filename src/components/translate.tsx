// import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
// import { styled } from "@mui/material";
// import { keyframes } from "@mui/system";

const t = (stringId: string): string => {
  const { formatMessage } = useIntl();
  return formatMessage({ id: stringId });
};

// const appearAnimation = keyframes`
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
// const Span = styled("span")(({ theme }) => ({
//   display: "inline-block",
//   opacity: 0,
//   transform: "translateY(1rem)",
//   animation: `${appearAnimation} 300ms forwards`,
// }));

// export const tSpan = (stringId: string): JSX.Element => {
//   return <Span>{t(stringId)}</Span>;
// };

export default t;
