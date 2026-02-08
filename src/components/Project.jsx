import { Card, TextInput } from "flowbite-react";
import Icon from "./Icon";

import Github from '../assets/github.svg?react';
import Link from '../assets/link.svg?react';


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
        <Card
          className="relative max-width-sm mx-auto"
          imgSrc={img}
          horizontal
        >
          {/* <a className="text-gray-700 absolute top-2 right-5" href={repo}>visit repository</a> */}
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div className="flex gap-2 items-center">
              {website && (
                <span>
                    <a className="flex items-center gap-2 rounded-md bg-gray-800 p-2" target="_blank" href={website}>
                    <Link fill="gray" />
                    <span className="text-white text-sm">Live Preview</span>
                    </a>
                </span>
              )}

               {repo && (
                <span>
                    <a className="flex items-center gap-2 rounded-md bg-gray-800 p-2" target="_blank" href={repo}>
                    <Github fill="gray" />
                    <span className="text-white text-sm">Repository</span>
                    </a>
                </span>
              )}
          </div>

          <div className="flex gap-2 flex-wrap border-t pt-2">
            {icons.map(({ svg, color, name, hover}, index) => {
              return (
                <Icon
                  Svg={svg}
                  color={color}
                  name={name}
                  hover={hover}
                  id={index}
                />
              );
            })}
          </div>
        </Card>
    </>
  );
}
