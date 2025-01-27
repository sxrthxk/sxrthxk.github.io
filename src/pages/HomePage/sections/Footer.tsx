import Contacts from "@/components/Contacts";
import { LuMapPin } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <div className="w-full mx-auto h-[0.5px] mb-2 mt-6 bg-white opacity-20"></div>
      <footer className=" text-white pb-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex gap-4 my-4">
              <Contacts />
            </div>
            <div>
              <LuMapPin className="inline mr-2" />
              <span>GMT+530 / Bangalore / Indore</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
