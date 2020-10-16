import { DetailedHTMLProps, FunctionComponent, HTMLAttributes, HtmlHTMLAttributes, ReactElement } from 'react';

interface Props {
  htmlAttributes: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
  headComponents: ReactElement[];
  bodyAttributes: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  preBodyComponents: ReactElement[];
  body: string;
  postBodyComponents: ReactElement[];
}

const HTML: FunctionComponent<Props> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default HTML;
