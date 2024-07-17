"use client";
import Header from "@/components/header";
import AndroidStore from "@/public/images/androidStore";
import AppsStore from "@/public/images/appsStore";
import IconImage from "@/public/images/iconImage";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <main className="flex w-screen h-screen bg-background">
          {/* headline */}
          <div className="w-7/12  items-center flex flex-row ">
            <div className="mx-[90px]">
              <div>
                <p className="flex items-center text-brand font-medium text-lg">
                  <span className="w-5 h-0.5 block bg-brand mr-[6px]" />
                  Future Investment
                </p>
                <h3 className="flex flex-col font-bold text-17rem leading-[70px] text-text-200 mt-3">
                  <span>Manage Your</span>
                  <span>Finances Every Day</span>
                  <span className="text-brand">Very Easily</span>
                </h3>
                <p className="text-lg mt-5 text-text-400 flex flex-col">
                  <span>
                    Manage & develop your finances well for the future to come.
                    Download now
                  </span>
                  <span>on your smartphone</span>
                </p>
                <div className="flex space-x-[30px] mt-[60px]">
                  <AppsStore />
                  <AndroidStore />
                </div>
              </div>
            </div>
          </div>
          {/* hero */}
          <div className="rounded-l-[30px] w-5/12 bg-green"></div>
        </main>
      </div>
    </>
  );
}
