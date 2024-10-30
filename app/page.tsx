import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="./emikawa.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hello everyone!! 
      </h1>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        My name is Asakiti Emikawa.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          数学、物理、化学、プログラミングなど、理系科目全般が好きな、オタクです!!
        </p>
        <p>
          激弱エンジニアなため、プログラミングでは、普段からしょうもないものを数多く作っています。
        </p>
        <p>
          基本的にtwitter(旧:X)にて生息しております。
        </p>
        <p>
          最近は低浮上
        </p>
        <p>
          巷では、高専生と称されているが、真実は高校生であるが、真相は不確かである
        </p>
        <p>
          すべてのことを忘れて、とりあえず寝る
        </p>
      </div>
    </section>
  );
}
