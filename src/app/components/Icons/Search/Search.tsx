import type { SVGProps } from "react";
import * as React from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export function IconSearch({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      {...props}
      aria-labelledby={titleId}
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M23.7067 22.5675L16.8818 15.7425C18.2038 14.1095 18.9998 12.0345 18.9998 9.77449C18.9998 4.53649 14.7378 0.274475 9.49986 0.274475C4.26192 0.274475 0 4.53644 0 9.77444C0 15.0124 4.26197 19.2745 9.49991 19.2745C11.7599 19.2745 13.8349 18.4785 15.4678 17.1565L22.2928 23.9815C22.4878 24.1765 22.7437 24.2745 22.9998 24.2745C23.2558 24.2745 23.5118 24.1765 23.7068 23.9815C24.0978 23.5905 24.0978 22.9585 23.7067 22.5675ZM9.49991 17.2744C5.36394 17.2744 1.99999 13.9105 1.99999 9.77444C1.99999 5.63843 5.36394 2.27444 9.49991 2.27444C13.6359 2.27444 16.9998 5.63843 16.9998 9.77444C16.9998 13.9105 13.6358 17.2744 9.49991 17.2744Z"
        fill="#CBCBCB"
      />
    </svg>
  );
}
