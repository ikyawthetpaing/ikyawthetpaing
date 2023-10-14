/** Originally from `t3-env-docs`
 * @link https://github.com/t3-oss/t3-env/blob/main/docs/src/components/mdx/code-block.tsx
 */
import { CopyButton } from "@/components/mdx/copy-button";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type CodeBlockProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  raw?: string;
};

export function CodeBlock({ children, raw, ...props }: CodeBlockProps) {
  return (
    <>
      <CopyButton value={raw} />
      <pre
        className="relative mb-4 mt-6 max-h-[640px] overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm font-semibold text-muted-foreground"
        {...props}
      >
        {children}
      </pre>
    </>
  );
}