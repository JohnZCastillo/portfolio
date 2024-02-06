import { Card } from "flowbite-react";
import Github from "../assets/github.svg?react";
import Icon from "./Icon";

export default function Project({
  title,
  img,
  description,
  website,
  repo,
  icons = [],
}) {
  return (
    <>
      <Card className="max-w-sm mx-auto scrollProject"  imgSrc={img} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div>
          <span>
            {website ? (
              <a target="_blank" href="https://blue-muddy-bream.cyclic.app/">
                https://blue-muddy-bream.cyclic.app/
              </a>
            ) : (
              <></>
            )}
          </span>
          <span>
            <Github fill="grey" />
            <a href=" https://github.com/JohnZCastillo/parcel-tracker">
              https://github.com/JohnZCastillo/parcel-tracker
            </a>
          </span>
        </div>
        <div className="flex gap-2">
          {icons.map(({svg,color,name,hover}, index) => {
            return (
              <Icon Svg={svg} color={color} name={name} hover={hover} id={index} />
            );
          })}
        </div>
      </Card>
    </>
  );
}
