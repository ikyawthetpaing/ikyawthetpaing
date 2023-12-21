import { allPosts, allProjects } from "@/.contentlayer/generated";
import { SocialMediaFollowLink, SocialMediaShare } from "@/types";
import { compareDesc } from "date-fns";

export const projects = allProjects.sort((a, b) => a.index - b.index);
export const posts = allPosts.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
});

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

export function generateSocialMediaShares(
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

  const shares: SocialMediaShare[] = [
    {
      iconName: "facebook",
      platformName: "Facebook",
      shareLink: facebookShareLink,
    },
    {
      iconName: "twitter",
      platformName: "Twitter",
      shareLink: twitterShareLink,
    },
    {
      iconName: "linkedin",
      platformName: "LinkedIn",
      shareLink: linkedInShareLink,
    },
    { iconName: "mail", platformName: "Email", shareLink: emailShareLink },
  ];

  return shares;
}

export function generateSocialMediaFollowLinks(username: string) {
  const followLinks: SocialMediaFollowLink[] = [
    {
      platformName: "LinkedIn",
      followLink: `https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=${username}`,
    },
    {
      platformName: "Twitter",
      followLink: `https://twitter.com/intent/follow?screen_name=${username}`,
    },
  ];
  return followLinks;
}
