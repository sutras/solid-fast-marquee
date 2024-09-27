import hljs from "highlight.js";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("xml", xml);

import shell from "highlight.js/lib/languages/shell";
import { createMemo } from "solid-js";
hljs.registerLanguage("shell", shell);

import "highlight.js/styles/atom-one-light.css";

interface SyntaxHighlighterProps {
  language: string;
  children: string;
}

function SyntaxHighlighter(props: SyntaxHighlighterProps) {
  const highlightedCode = createMemo(() => {
    return hljs.highlight(props.children || "", { language: props.language })
      .value;
  });

  return (
    <pre class="theme-atom-one-light">
      <code class="hljs" innerHTML={highlightedCode()}></code>
    </pre>
  );
}

export default SyntaxHighlighter;
