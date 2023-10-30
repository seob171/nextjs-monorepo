"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NotificationButton = () => {
  const pathname = usePathname();

  const isNotificationPage = pathname.startsWith("/notification");

  return (
    <Link href={`/notification`} className={"flex items-center group"}>
      <Image
        src={`/icons/ic_notification${isNotificationPage ? "_filled" : ""}.svg`}
        alt={"notification-icon"}
        width={24}
        height={24}
        className={
          "icon-filter-tertiary800 group-hover:icon-filter-tertiary900"
        }
      />
    </Link>
  );
};

export default NotificationButton;
