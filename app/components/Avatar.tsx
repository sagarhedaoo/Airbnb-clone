"use client";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="Avatar"
      className="rounded-full"
      height="30"
      width="30"
    />
  );
};

export default Avatar;
