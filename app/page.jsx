
import Link from "next/link";

export default function Home() {
  return (
   <div>
<div className=" h-16 bg-slate-600 w-full">

</div>

    <h1>this is main route</h1>
    <Link href="/products/skiller123" className=" bg-black text-white px-3 py-2  rounded-md mx-2 shadow-md">get user</Link>

    <Link href="/products/kitchen" className=" bg-black text-white px-3 py-2  rounded-md mx-2 shadow-md">get kitchen</Link>
   </div>
  );
}
