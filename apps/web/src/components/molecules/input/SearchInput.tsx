import Image from "next/image";
import { ComponentProps } from "react";
import Input from "@/components/atoms/Input";

interface SearchInputProps extends ComponentProps<typeof Input> {}

const SearchInput = ({ ...restProps }: SearchInputProps) => {
  return (
    <div
      className={
        "flex items-center gap-x-3 bg-tertiary-50 py-3 px-4 rounded-full"
      }
    >
      <Image
        src={"/icons/ic_search.svg"}
        alt={"search-icon"}
        width={20}
        height={20}
        className={"icon-filter-tertiary400"}
      />
      <Input
        className={"bg-tertiary-50 placeholder:text-tertiary-600"}
        {...restProps}
      />
    </div>
  );
};

export default SearchInput;
