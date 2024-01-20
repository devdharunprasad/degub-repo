import React from "react";
import Link from "next/link"
function JoinOurTeam(props) {
    return (
      <div className=" bg-primary py-10">
      <div className="justify-between items-center flex gap-5 px-4 py-3 center-section">
        <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-white text-3xl font-semibold leading-10 max-md:max-w-full">
          Join our team
          </div>{" "}
          <div className="text-white text-base leading-6 mt-3 w-[630px]">
          We believe in fostering a dynamic and inclusive work environment, where innovation thrives. Discover exciting opportunities and join our talented team today.
          </div>
        </div>{" "}
        <Link
          href="/contact-us"
          className="text-black bg-white text-base mr-20 leading-6 whitespace-nowrap justify-center items-stretch border self-center my-auto px-5 py-2 border-solid border-white"
        >
       Explore now
        </Link>
      </div>
    </div>

    );
}

export default JoinOurTeam;