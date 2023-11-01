"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NotificationButton = () => {
  const pathname = usePathname();

  const isNotificationPage = pathname.startsWith("/notification");

  return (
    <Link
      href={`/notification`}
      className={"flex items-center group min-w-[20px] w-5 h-5"}
    >
      <Image
        src={`/icons/ic_bell${isNotificationPage ? "_solid" : ""}.svg`}
        alt={"notification-icon"}
        width={20}
        height={20}
        className={
          "icon-filter-tertiary800 group-hover:icon-filter-tertiary900"
        }
      />
    </Link>
  );
};

export default NotificationButton;
