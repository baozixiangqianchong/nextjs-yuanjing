import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="block sm:flex sm:gap-5 mt-10 sm:mt-20 mb-100 sm:mb-100">
      <div className="w-full sm:w-1/6 mb-7 sm:mb-0 ml-6">
        <Image
          src="/images/logo.png"
          width={120}
          height={120}
          className="rounded-lg"
          alt="团队"
        />
      </div>

      <div className="font-general-regular w-full sm:w-4/5 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
