import { DialogHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import BackLink from "@/components/common/BackLink";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { LinkProps } from "next/link";

const DialogVariant = cva(
  `fixed w-full z-modal inset-0 overflow-y-hidden bg-gray-700 bg-opacity-80`,
  {
    variants: {},
    defaultVariants: {},
  },
);

const DialogButtonVariant = cva(`grid mt-4 empty:hidden`, {
  variants: {
    buttonDirection: {
      vertical: "grid-flow-row auto-rows-fr",
      horizontal: `grid-flow-col auto-cols-fr`,
    },
  },
  defaultVariants: {
    buttonDirection: "horizontal",
  },
});

interface DialogProps
  extends DialogHTMLAttributes<HTMLDialogElement>,
    VariantProps<typeof DialogVariant>,
    VariantProps<typeof DialogButtonVariant> {
  confirm?: ReactNode;
  cancel?: ReactNode;
  closeIcon?: boolean;
  closeLink?: LinkProps["href"];
}

const Dialog = ({
  children,
  className,
  buttonDirection,
  confirm,
  cancel,
  closeIcon = true,
  closeLink,
  ...restProps
}: DialogProps) => {
  const backLinkClassName = "absolute top-4 right-4 p-1 -m-1 cursor-pointer";

  return (
    <dialog
      className={twMerge(DialogVariant({ className }))}
      aria-modal={true}
      {...restProps}
    >
      <div
        className={"flex items-center justify-center min-h-screen text-center"}
      >
        <BackLink
          href={closeLink}
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        />
        <div
          className={
            "relative inline-block bg-white rounded-lg p-4 overflow-hidden shadow-xl transform transition-all"
          }
        >
          <BackLink className={backLinkClassName} href={closeLink}>
            <Image
              src={"/icons/ic_close.svg"}
              alt={"close-icon"}
              width={24}
              height={24}
            />
          </BackLink>
          {children}
          <div className={DialogButtonVariant({ buttonDirection })}>
            {cancel && <div className={"w-full empty:hidden"}>{cancel}</div>}
            {confirm && <div className={"w-full empty:hidden"}>{confirm}</div>}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
