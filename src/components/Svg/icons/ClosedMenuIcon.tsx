import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M176.792 0H59.208C26.561 0 0 26.561 0 59.208v117.584C0 209.439 26.561 236 59.208 236h117.584C209.439 236 236 209.439 236 176.792V59.208C236 26.561 209.439 0 176.792 0zM196 176.792c0 10.591-8.617 19.208-19.208 19.208H59.208C48.617 196 40 187.383 40 176.792V59.208C40 48.617 48.617 40 59.208 40h117.584C187.383 40 196 48.617 196 59.208v117.584zM452 0H336c-33.084 0-60 26.916-60 60v116c0 33.084 26.916 60 60 60h116c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm20 176c0 11.028-8.972 20-20 20H336c-11.028 0-20-8.972-20-20V60c0-11.028 8.972-20 20-20h116c11.028 0 20 8.972 20 20v116zM176.792 276H59.208C26.561 276 0 302.561 0 335.208v117.584C0 485.439 26.561 512 59.208 512h117.584C209.439 512 236 485.439 236 452.792V335.208C236 302.561 209.439 276 176.792 276zM196 452.792c0 10.591-8.617 19.208-19.208 19.208H59.208C48.617 472 40 463.383 40 452.792V335.208C40 324.617 48.617 316 59.208 316h117.584c10.591 0 19.208 8.617 19.208 19.208v117.584zM452 276H336c-33.084 0-60 26.916-60 60v116c0 33.084 26.916 60 60 60h116c33.084 0 60-26.916 60-60V336c0-33.084-26.916-60-60-60zm20 176c0 11.028-8.972 20-20 20H336c-11.028 0-20-8.972-20-20V336c0-11.028 8.972-20 20-20h116c11.028 0 20 8.972 20 20v116z" />
    </svg>
  );
}

export default SvgComponent;
