import React from 'react';
import classname from 'classnames';

// require("icons/tag.svg");
// require("icons/money.svg");
// require("icons/line-chart.svg");

// require 整个目录 安装@types/webpack-env包解决__WebpackModuleApi声明报错
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name?: string;
} & React.SVGAttributes<SVGElement>;

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={classname('icon', className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  );
};
export default Icon;
