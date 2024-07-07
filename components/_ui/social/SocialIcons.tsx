import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

interface SocialMedia {
  title: string;
  path: string;
  icon: React.ElementType;
  url: string;
}

const socialMedia: SocialMedia[] = [
  { title: 'Facebook', path: 'facebook', icon: TiSocialFacebook, url: 'https://www.facebook.com' },
  { title: 'Twitter', path: 'twitter', icon: TiSocialTwitter, url: 'https://www.twitter.com' },
  { title: 'Pinterest', path: 'pinterest', icon: TiSocialPinterest, url: 'https://www.pinterest.com' },
  { title: 'Instagram', path: 'instagram', icon: IoLogoInstagram, url: 'https://www.instagram.com' },
];

function SocialIcons() {
  return (
    <div className="flex items-center space-x-3">
      {socialMedia.map((media, index) => (
        <Link key={index} href={media.url} target="_blank">
          <media.icon className="w-10 h-10 text-gray-gray7 rounded-full hover:bg-primary-primary hover:text-white" />
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;
