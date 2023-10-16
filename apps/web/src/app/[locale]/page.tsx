type Props = { params: { locale: string } };
const Page = ({ params }: Props) => {
  return <div>Locale : {params.locale}</div>;
};

export default Page;
