import Image from 'next/image';

const CustomerService = () => {
  return (
    <div className="w-[88px] h-[88px] rounded flex flex-col gap-y-[6px] items-center justify-center bg-white fixed top-40 right-10 z-10 cursor-pointer">
      <Image
        src="static/images/home/customer-service.png"
        alt="customer-service"
        width={40}
        height={40}
      />
      <span>联系客服</span>
    </div>
  );
};
export default CustomerService;
