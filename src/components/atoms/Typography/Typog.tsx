
import Typography, { TypographyProps } from "@mui/material/Typography";

export interface ItypographyProps extends TypographyProps {
  children: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  className?: string;
  onClick?: () => void;
}

const Typog = (props: ItypographyProps) => {
  return (
    <>
      <Typography
        variant={props.variant}
        className={props.className}
        onClick={props.onClick}
        style={{color:"#03314B"}}
      >
        {props.children}
      </Typography>
    </>
  );
};

export default Typog;
