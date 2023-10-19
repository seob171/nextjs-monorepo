type Props = { params: { locale: string } };
const Page = (props: Props) => {
  const { params } = props;

  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-screen-xl w-full"}>
        <div>
          <span>Locale : {params.locale}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
