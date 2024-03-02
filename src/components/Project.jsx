import { Card } from "flowbite-react";
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
          className="max-width-sm mx-auto"
          imgSrc={img}
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div>
            <span>
                <a className="text-black" target="_blank" href="https://blue-muddy-bream.cyclic.app/">
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
