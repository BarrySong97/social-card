import React from "react";
import { toPng } from "html-to-image";
import {
  SkillIconsDocker,
  SkillIconsElectron,
  SkillIconsFastapi,
  SkillIconsNestjsDark,
  SkillIconsNextjsDark,
  SkillIconsReactDark,
  SkillIconsTailwindcssLight,
  SkillIconsTypescript,
} from "./icon";

const StackCard: React.FC = () => {
  return (
    <div
      id="stack-card"
      className="bg-white text-[#222020]  shadow-lg rounded-lg overflow-hidden w-[236px] h-[236px] p-4 flex flex-col "
    >
      <div className="font-bold mb-0.5">技术栈</div>
      <div className="text-sm text-gray-500 mb-4">我熟练掌握的技术</div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-2">
          <SkillIconsReactDark />
          <div>React</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsNextjsDark />
          <div>NextJs</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsNestjsDark />
          <div>NestJs</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsFastapi />
          <div>Fastapi</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsDocker />
          <div>Docker</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsTailwindcssLight />
          <div>Tailwind</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsElectron />
          <div>Electron</div>
        </div>
        <div className="flex items-center gap-2">
          <SkillIconsTypescript />
          <div>Typescript</div>
        </div>
      </div>
    </div>
  );
};
const AboutCard: React.FC = () => {
  return (
    <div
      id="about-card"
      className="bg-white text-[#222020]  shadow-lg rounded-lg overflow-hidden w-[236px] h-[236px] p-4 flex flex-col "
    >
      <div className="font-bold mb-0.5">关于我</div>
      <div className="text-sm text-gray-500 mb-4">Barry Song</div>
      <ul className="space-y-2 pl-4 text-sm">
        <li className="list-disc">全栈工程师</li>
        <li className="list-disc">27岁</li>
        <li className="list-disc">5年工作经验</li>
        <li className="list-disc">自由职业者</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex  gap-4 justify-center items-center bg-gray-100">
      <div
        id="page"
        className="flex flex-col gap-4 items-center p-4 bg"
        style={{
          backgroundColor: "rgb(249, 249, 248)",
        }}
      >
        <div className="flex gap-4">
          <AboutCard />
          <StackCard />
        </div>
        <div className="w-[488px] bg-white text-[#222020]  shadow-lg rounded-lg overflow-hidden  h-[236px]  flex flex-col ">
          <div className="flex sm:p-4  w-full h-full gap-4 cursor-pointer flex-row">
            <div className="flex-1 flex flex-col gap-2 justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src="/favicon.ico"
                  className="w-8 h-8 rounded-md shadow-border bg-white dark:bg-sand-2 flex-shrink-0"
                />
                <div className="text-base truncate">流记</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 leading-relaxed line-clamp-3 md:line-clamp-4">
                  AI驱动复式记账应用
                </div>
                <div className="text-[#006adc] link-color text-sm truncate">
                  www.flowm.cc
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/flowm.png"
                className="object-cover rounded-sm aspect-[1] w-[214px] h-[214px]"
              />
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          更多 https://barrysong4real.cc
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          id="og"
          className="relative w-[446px] h-[234px] bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center bg-white text-[#222020]  shadow-lg  overflow-hidden    flex flex-col p-4"
        >
          <div className="flex items-start justify-end gap-4">
            <div className="text-right">
              <div className="text-white font-bold">Barry Song</div>
              <div className="text-sm text-white">全栈工程师</div>
            </div>
            <img
              src="/self.jpeg"
              alt=""
              className="w-16 h-16 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              toPng(document.getElementById("about-card")!, {
                pixelRatio: 2,
                quality: 1,
              }).then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "business-card.png";
                link.href = dataUrl;
                link.click();
              });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            下载关于我
          </button>
          <button
            onClick={() => {
              toPng(document.getElementById("stack-card")!, {
                pixelRatio: 2,
                quality: 1,
              }).then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "business-card.png";
                link.href = dataUrl;
                link.click();
              });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            下载技术栈
          </button>
          <button
            onClick={() => {
              toPng(document.getElementById("page")!, {
                pixelRatio: 2,
                quality: 1,
              }).then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "business-card.png";
                link.href = dataUrl;
                link.click();
              });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            下载名片
          </button>
          <button
            onClick={() => {
              toPng(document.getElementById("og")!, {
                pixelRatio: 2,
                quality: 1,
              }).then((dataUrl) => {
                console.log(dataUrl);

                const link = document.createElement("a");
                link.download = "business-card.png";
                link.href = dataUrl;
                link.click();
              });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            下载og
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
