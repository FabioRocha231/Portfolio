import { CssIcon } from "./Css";
import { ExpoIcon } from "./ExpoIcon";
import { ExpressIcon } from "./ExpressIcon";
import { GitIcon } from "./Git";
import { HtmlIcon } from "./Html";
import { JsIcon } from "./Js";
import { MongoIcon } from "./MongoIcon";
import { NextIcon } from "./NextIcon/Index";
import { NodeIcon } from "./NodeIcon/Index";
import { PostgresIcon } from "./PostgresIcon";
import { TsIcon } from "./Ts";
import { TsNodeIcon } from "./Ts/TsNodeIcon";

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
