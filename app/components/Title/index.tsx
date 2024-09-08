const Title = ({ enTitle, title }: { enTitle: string; title: string }) => {
  return (
    <div className="text-center">
      <div className="text-[0.24rem] leading-[0.24rem] mb-[0.24rem] text-text-gray sm:mb-[22px] sm:text-[40px] sm:leading-[40px]">
        {enTitle}
      </div>
      <div className="text-[0.3rem] leading-[0.3rem] sm:text-[46px] sm:leading-[46px]">
        {title}
      </div>
    </div>
  );
};
export default Title;
