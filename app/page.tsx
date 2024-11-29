import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


// Make a RESPONSIVE Hero Section using Nextjs and Tailwind CSS
// Hero Sectoion should consist of two rows
// On to the left side there should be a Heading, a small text and a button  
// On right side there should be and image covering the entire right section
 
export default function Home() {
  return (
    <main className="px-10 py-10 min-h-screen bg-red-200 md:flex">
      <div className="">
        <h1 className="font-extrabold text-green-700 text-3xl">Heading</h1>
        <p className="mt-2 md:text-left">Small Text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ipsum rem adipisci, iure cum beatae, quam mollitia cupiditate, quis similique eveniet totam ipsam enim nesciunt praesentium architecto dolorem qui incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe temporibus sequi quam, atque quidem consequatur impedit earum sint maxime repellat fugiat minima. Nostrum doloribus eos illum sed accusamus sit.</p>
        <button className=" border border-blue-700 bg-orange-200 px-2 mt-4">Button</button>
      </div>

   <div className="ml-5 mt-5">
   <Image src="/imge.jpg" alt="Image" height= {800} width= {800} />
   </div>

    </main>
  );
}
