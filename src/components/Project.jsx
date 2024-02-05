import { Card } from "flowbite-react";
import Github from "../assets/github.svg?react";

export default function Project({ title, img,description, website, repo }) {
  return (
    <>
      <Card className="max-w-sm" imgSrc={img} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div>
          <span>
            <a target="_blank" href="https://blue-muddy-bream.cyclic.app/">
              https://blue-muddy-bream.cyclic.app/
            </a>
          </span>
          <span>
            <Github fill='grey' />
            <a href=" https://github.com/JohnZCastillo/parcel-tracker">
              https://github.com/JohnZCastillo/parcel-tracker
            </a>
          </span>
        </div>
        <div></div>
      </Card>
    </>
  );
}
