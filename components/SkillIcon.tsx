import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSharp,
  SiTypescript,
} from "react-icons/si";
import {
  DiDatabase,
  DiIllustrator,
  DiMsqlServer,
  DiPhotoshop,
} from "react-icons/di";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  SQL: DiDatabase,
  "C#": SiSharp,
  Postman: SiPostman,
  MongoDB: SiMongodb,
  "SQL Server": DiMsqlServer,
  Figma: SiFigma,
  "Adobe Illustrator": DiIllustrator,
  Photoshop: DiPhotoshop,
};

type SkillIconProps = {
  name: string;
  className?: string;
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const Icon = iconMap[name];
  if (!Icon) {
    return null;
  }
  return <Icon className={className} />;
}
