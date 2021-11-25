import Flex from "components/flex";
import styled from "styled-components";

type ITextProps = {
  marginTop?: number;
  marginBottom?: number;
  color?: string;
};

export const Title2 = styled.h2<ITextProps>`
  font-family: Salsa;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 78px;

  color: #3c55f6;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Title3 = styled.h3<ITextProps>`
  font-family: Salsa;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;

  color: ${(p) => (p.color ? p.color : "#3c55f6")};

  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body1 = styled.p<ITextProps>`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: ${(p) => (p.color ? p.color : "#000000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Link = styled.p`
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #000;
  cursor: pointer;
  text-decoration: underline;
`;

export const CaptionText = styled.p<ITextProps>`
  font-family: Telex;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: ${(p) => (p.color ? p.color : "#000000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

type ILinkTextProps = { text: string; link: string; onClick?(): any };

export const LinkText = (props: ILinkTextProps) => {
  const { text, link, onClick = () => console.log("LinkText") } = props;

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <Body1 color="#787878">{text}</Body1> &nbsp;
      <Link onClick={onClick}>{link}</Link>
    </div>
  );
};
