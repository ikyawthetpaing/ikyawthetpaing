import { HTMLAttributes } from "react";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";

export async function HighlightedCode({
  children,
  ...props
}: HTMLAttributes<HTMLElement>): Promise<JSX.Element> {
  const processedCode = await processCodeBlock(
    children?.toString(),
    props.className
  );

  const sanitizedCode = removeHtmlTags(processedCode);

  return (
    <code dangerouslySetInnerHTML={{ __html: sanitizedCode }} {...props} />
  );
}

async function processCodeBlock(
  children: string | undefined,
  className?: string
): Promise<string> {
  const processedFile = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight, { prefix: "--sh-" })
    .process(
      `<pre><code className="${className}">${children || ""}</code></pre>`
    );
  return String(processedFile.value);
}

function removeHtmlTags(input: string): string {
  const regex = /<\/?(?:pre|code)[^>]*>/gi;
  return input.replace(regex, "");
}
