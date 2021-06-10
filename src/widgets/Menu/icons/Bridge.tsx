import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 -61 512 512" {...props}>
      <path d="m361 330h151v60h-151zm0 0" />
      <path
        d="m446.152344 0h-380.304688l-64.777344 159.433594-.671874 50.566406h511.601562v-45zm-409 150 38.84375-94.617188 37.851562 94.617188zm61.003906-120h75.6875l-37.839844 94.601562zm60 120 37.84375-94.605469 37.839844 94.605469zm60-120h75.6875l-37.84375 94.609375zm60 120 37.84375-94.605469 37.847656 94.605469zm60-120h75.6875l-37.839844 94.601562zm60 120 37.847656-94.613281 38.84375 94.613281zm0 0" />
      <path d="m30 240h91v60h-91zm0 0" />
      <path d="m0 330h151v60h-151zm0 0" />
      <path d="m391 240h91v60h-91zm0 0" />
    </Svg>
  );
};

export default Icon;
