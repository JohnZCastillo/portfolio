import { Card, TextInput } from "flowbite-react";
import Icon from "./Icon";
import { Button } from 'flowbite-react';

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
          <a className="text-gray-700 absolute top-2 right-5" href={repo}>visit repository</a>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div>
            <span>
                <a className="text-black" target="_blank" href={website}>
                <Button color="dark">Visit</Button>
                </a>
            </span>
          </div>

          <div className="flex gap-2 flex-wrap">
            {icons.map(({ svg, color, name, hover }, index) => {
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
