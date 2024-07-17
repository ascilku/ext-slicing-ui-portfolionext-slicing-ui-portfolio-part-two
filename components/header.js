import IconImage from "@/public/images/iconImage";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="fixed w-full">
        <div className="flex justify-between mt-10 mx-[90px] items-center">
          <div className="flex space-x-[50px] items-center">
            <Link href="/">
              <IconImage />
            </Link>
            <nav>
              <ul className="flex text-1rem space-x-[30px] text-text-200">
                <Link href="">
                  <li className="">Featured</li>
                </Link>
                <Link href="">
                  <li>How It Work</li>
                </Link>
                <Link href="">
                  {" "}
                  <li>Pricing</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div>
            <Link href="ss">
              <button className="hover:bg-brand px-8 py-3 hover:text-text-500 rounded-md font-medium">
                Contact Us
              </button>
            </Link>
            <Link href="ss">
              <button className="bg-brand px-8 py-3 rounded-md text-text-500 font-medium">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
