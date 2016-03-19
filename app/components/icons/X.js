/* eslint max-len: 0 */
import React, { PropTypes } from 'react';

const X = ({ className, size = 20, fill = '#ccc', opacity = 0.5, rotation = 45, onClick }) => (
  <svg className={className} width={`${size}px`} height={`${size}px`} viewBox={`0 0 ${size} ${size}`} version="1.1" onClick={onClick}>
    <g stroke="none" strokeWidth="1" fill={fill} opacity={opacity} transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
      <rect x={size / 2.5} y="0" width={size / 5} height={size}></rect>
      <rect x="0" y={size / 2.5} width={size} height={size / 5}></rect>
    </g>
  </svg>
);

X.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  fill: PropTypes.string,
  opacity: PropTypes.number,
  onClick: PropTypes.func,
};

export default X;
