import { allPosts, allProjects } from "@/.contentlayer/generated";
import { Share } from "@/types";
import { compareDesc } from "date-fns";

export function generateMediaShares(
  url: string,
  title: string,
  description: string
) {
  const facebookShareLink = `https://web.facebook.com/sharer.php?t=${encodeURIComponent(
    description
  )}&u=${encodeURIComponent(url)}&_rdr`;
  const twitterShareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    description || ""
  )}&url=${encodeURIComponent(url)}`;
  const linkedInShareLink = `https://www.linkedin.com/shareArticle?title=${encodeURIComponent(
    description
  )}&url=${encodeURIComponent(url)}`;
  const emailShareLink = generateEmailShareLink(title, url, description);

  const shares: Share[] = [
    { iconName: "facebook", mediraName: "Facebook", link: facebookShareLink },
    { iconName: "twitter", mediraName: "Twitter", link: twitterShareLink },
    { iconName: "linkedin", mediraName: "LinkedIn", link: linkedInShareLink },
    { iconName: "mail", mediraName: "Email", link: emailShareLink },
  ];

  return shares;
}

function generateEmailShareLink(
  title: string,
  url: string,
  description: string
) {
  const emailBody = `
Dear [Recipient's Name],

I hope this email finds you well. I wanted to share an interesting article with you titled "${title}". You can read it at the following link:

${url}

Here is a brief summary:
${description}

Best regards,
[Your Name]
`;

  return `mailto:?cc=cc&bcc=bcc&subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(emailBody)}`;
}

export const projects = allProjects.sort((a, b) => a.index - b.index);
export const posts = allPosts.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
});
