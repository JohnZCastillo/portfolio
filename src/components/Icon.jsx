import { Tooltip } from "flowbite-react";

export default function Icon({ Svg, name, color, hover }) {
  
  return (
    <Tooltip content={name}>
      <Svg
        fill={color}
        className={hover}
      />
    </Tooltip>
  );
}
