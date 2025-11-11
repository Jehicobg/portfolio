import Image from "next/image";

interface ImageHeaderProps {
  src: string;
  alt: string;
}

const ImageHeader = ({ src, alt }: ImageHeaderProps) => {
  return (
    <div className="w-1/3">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={48}
        loading="lazy"
        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      />
    </div>
  );
};

export default ImageHeader;
