const Title = ({ enTitle, title }: { enTitle: string; title: string }) => {
  return (
    <div className="text-center">
      <div className="mb-[22px] text-text-gray text-[40px] leading-[40px]">
        {enTitle}
      </div>
      <div className="text-[46px] leading-[40px]">{title}</div>
    </div>
  );
};
export default Title;
