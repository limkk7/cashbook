import React from "react";

// require("icons/tag.svg");
// require("icons/money.svg");
// require("icons/line-chart.svg");

// require 整个目录 安装@types/webpack-env包解决__WebpackModuleApi声明报错
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}
try {
  importAll(require.context('icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

type Props = {
  name: string;
};

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      {props.name && <use xlinkHref={"#" + props.name} />}
    </svg>
  );
};
export default Icon;
