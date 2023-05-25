import Link from "next/link";
import Image from "next/image";

const DownloadButton = ({ href, rel, image, text }) => {
  return (
    <Link
      href={href} target="_blank" rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} 
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 16px',
        gap: '10px',
        height: '52px',
        background: '#0E0F10',
        borderRadius: '8px',
      }}
    >
      <Image
        src={image}
        width={28}
        height={28}
        alt="btn-icon"
      />
      <div className="text-h3-l font-h3 leading-none text-white">{text}</div>
    </Link>
  )
}

export default DownloadButton
