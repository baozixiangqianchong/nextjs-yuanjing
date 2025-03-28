// import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDownCircle } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
// import Link from "next/link";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  // return (
  // 	<motion.section
  // 		initial={{ opacity: 0 }}
  // 		animate={{ opacity: 1 }}
  // 		transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
  // 		className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
  // 	>
  // 		<div className="w-full md:w-1/3 text-left">
  // 			<motion.h1
  // 				initial={{ opacity: 0 }}
  // 				animate={{ opacity: 1 }}
  // 				transition={{
  // 					ease: 'easeInOut',
  // 					duration: 0.9,
  // 					delay: 0.1,
  // 				}}
  // 				className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
  // 			>
  // 				Hi, Iam Yuanjing
  // 			</motion.h1>
  // 			<motion.p
  // 				initial={{ opacity: 0 }}
  // 				animate={{ opacity: 1 }}
  // 				transition={{
  // 					ease: 'easeInOut',
  // 					duration: 0.9,
  // 					delay: 0.2,
  // 				}}
  // 				className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
  // 			>
  // 				A Full-Stack Developer & Design Enthusiast
  // 			</motion.p>
  // 			<motion.div
  // 				initial={{ opacity: 0 }}
  // 				animate={{ opacity: 1 }}
  // 				transition={{
  // 					ease: 'easeInOut',
  // 					duration: 0.9,
  // 					delay: 0.3,
  // 				}}
  // 				className="flex justify-center sm:block"
  // 			>
  // 				<a
  // 					download=""
  // 					href="https://static-1255812373.cos.ap-beijing.myqcloud.com/yuanjing-nav-crx.zip"
  // 					className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
  // 					aria-label="Download Resume"
  // 				>
  // 					<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
  // 					<span className="text-sm sm:text-lg duration-100">
  // 						Download
  // 					</span>
  // 				</a>
  // 			</motion.div>
  // 		</div>
  // 		<motion.div
  // 			initial={{ opacity: 0, y: -180 }}
  // 			animate={{ opacity: 1, y: 0 }}
  // 			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
  // 			className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
  // 		>
  // 			<img
  // 				layout="responsive"
  // 				src={
  // 					activeTheme === 'dark'
  // 						? '/images/developer.svg'
  // 						: '/images/developer-dark.svg'
  // 				}
  // 				alt="Developer"
  // 			/>
  // 		</motion.div>
  // 	</motion.section>
  // );

  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div className=" mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">免费使用</p>
        </div>
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1  dark:text-ternary-light lg:text-7xl text-blue-600 font-bold">
            源境Tab
          </p>
        </div>

        <div className="mt-10 sm:mt-8">
          <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
            源境Tab是一款 Chrome
            插件，让你在新标签页中通过个性化设置，开启探索之旅，发现新兴趣与灵感！
          </h3>
        </div>

        <a
          download=""
          href="https://static-1255812373.cos.ap-beijing.myqcloud.com/yuanjing-nav-crx.zip"
          className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="下载"
        >
          <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
          <span className="text-sm sm:text-lg duration-100">下载</span>
        </a>

        {/* 展示图片 */}
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
              />
            </div>

            <div>
              <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                <div className="mt-8 flow-root sm:mt-16">
                  <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      src="/images/search-way.png"
                      alt="product preview"
                      width={955}
                      height={808}
                      quality={100}
                      className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
              />
            </div>
          </div>
        </div>

        {/* 主页新形态 */}
        <div className="mx-auto w-full max-w-screen-xl ">
          <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
            {/* Intro */}
            <div>
              <div className="mb-6 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-ternary-light">
                    开启主页新形态
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-ternary-light">
                    使用源境，打造属于自己的舒适。
                  </p>
                </div>
              </div>
              {/* steps */}

              <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 text-left">
                <li className="md:flex-1">
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-blue-600">
                      Step 1
                    </span>
                    <span className="text-xl font-semibold dark:text-ternary-light">
                      点击下载
                    </span>
                    <span className="mt-2 text-zinc-700 dark:text-ternary-light">
                      安装文件是一个压缩包
                    </span>
                  </div>
                </li>
                <li className="md:flex-1">
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-blue-600">
                      Step 2
                    </span>
                    <span className="text-xl font-semibold dark:text-ternary-light">
                      安装
                    </span>
                    <span className="mt-2 text-zinc-700 dark:text-ternary-light">
                      打开
                      <span className="text-blue-700 underline underline-offset-2 ">
                        chrome扩展管理页面
                      </span>
                      ，拖拽压缩包进行安装
                    </span>
                  </div>
                </li>
                <li className="md:flex-1">
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-blue-600">
                      Step 3
                    </span>
                    <span className="text-xl font-semibold dark:text-ternary-light ">
                      开始使用
                    </span>
                    <span className="mt-2 text-zinc-700 dark:text-ternary-light">
                      打开新的标签页，开启探索之旅
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
