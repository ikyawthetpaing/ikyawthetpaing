import Link from "next/link";
import { IconName, SocialMediaShare } from "@/types";

import { Icon } from "@/components/icons";

interface Props {
  url: string;
  title: string;
  description: string;
}

export function SharePost(props: Props) {
  const shareLinks = generateSocialMediaShares(props);
  return (
    <ul className="flex gap-4">
      {shareLinks.map(({ iconName, shareLink, platformName }, index) => (
        <Link href={shareLink} target="_blank" key={index}>
          <li className="bg-muted text-muted-foreground hover:text-foreground rounded-xl p-2 transition-all duration-150">
            <Icon
              name={iconName}
              className="size-4"
              aria-label={platformName}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

function generateSocialMediaShares(props: Props) {
  const { title, description, url } = props;
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
