import { DialogHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import BackLink from "@/components/common/BackLink";

const DialogVariant = cva(
  `fixed w-full z-modal inset-0 overflow-y-hidden bg-slate-700 bg-opacity-80`,
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
}

const Dialog = ({
  children,
  className,
  buttonDirection,
  confirm,
  cancel,
  ...restProps
}: DialogProps) => {
  return (
    <dialog
      className={DialogVariant({ className })}
      aria-modal={true}
      {...restProps}
    >
      <div
        className={"flex items-center justify-center min-h-screen text-center"}
      >
        <BackLink
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        />
        <div
          className={
            "inline-block bg-white rounded-lg p-4 overflow-hidden shadow-xl transform transition-all"
          }
        >
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
