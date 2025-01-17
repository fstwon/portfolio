import { ISvg } from "..";
import { ReactComponent as MainLogoSVG } from "./FSTWON.svg";
import classnames from "classnames";

export function MainLogo({className}: ISvg) {
  return (
    <MainLogoSVG className={classnames(className)} />
  )
}