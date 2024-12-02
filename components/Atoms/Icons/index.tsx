import CssIcon from "./Css";
import ExpoIcon from "./Expo";
import ExpressIcon from "./Express";
import GitIcon from "./Git";
import HtmlIcon from "./Html";
import JsIcon from "./Js";
import MongoIcon from "./Mongo";
import NextIcon from "./Next/Index";
import NodeIcon from "./Node/Index";
import PostgresIcon from "./Postgres";
import TsIcon from "./Ts";
import TsNodeIcon from "./Ts/TsNodeIcon";

export const IconsArray: React.ComponentType[] = [
  () => <HtmlIcon />,
  () => <CssIcon />,
  () => <JsIcon />,
  () => <GitIcon />,
  () => <TsIcon />,
  () => <NodeIcon />,
  () => <NextIcon />,
  () => <TsNodeIcon />,
  () => <ExpressIcon />,
  () => <MongoIcon />,
  () => <PostgresIcon />,
  () => <ExpoIcon />,
];
