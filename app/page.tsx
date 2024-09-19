import Image from 'next/image';
import Link from 'next/link';

import OpenAppBtn from '@/components/OpenAppBtn';
import Address from '@/components/Address';
export default function Home() {
  return (
    <div className="">
      <OpenAppBtn />
      <Address color="white" />
    </div>
  );
}
