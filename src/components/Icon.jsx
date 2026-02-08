import { Tooltip } from "flowbite-react";
import { useState } from "react";

export default function Icon({ Svg, name, color, hover, width = "24px", height="24px" }) {
  
  const [isHovered,setHovered] = useState(false);

  return (
    <Tooltip content={name}>
        <div 
          onMouseEnter={()=>setHovered(true)} 
          onMouseLeave={()=>setHovered(false)} style={{
          maskImage: `url(${Svg})`,
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
          backgroundColor: isHovered ? hover : color,
          width: width,
          height: height,
        }}>
        </div>
    </Tooltip>
  );
}
