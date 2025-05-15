import React from "react";

interface IconWrapperProps {
  className?: string;
  strokeWidth?: number;
  color?: string;
  children: React.ReactNode;
  viewBox?: string;
}

const IconWrapper = ({
  className = "w-4 h-4",
  strokeWidth = 2,
  color = "currentColor",
  children,
  viewBox = "0 0 32 32",
}: IconWrapperProps) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox={viewBox}
      stroke={color}
    >
      {/* Le pasas los <path> como children */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          : child
      )}
    </svg>
  );
};

export default IconWrapper;
