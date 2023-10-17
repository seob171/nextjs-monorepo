type Props = { params: { locale: string }; searchParams: { domain: string } };
const Page = (props: Props) => {
  const { params, searchParams } = props;

  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-screen-xl w-full"}>
        <div>
          <span>Locale : {params.locale}</span>
        </div>
        <div>
          <span>Domain : {searchParams.domain}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
