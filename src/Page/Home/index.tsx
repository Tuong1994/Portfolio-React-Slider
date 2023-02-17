import React from "react";
import * as Components from "../../Components";
import * as customHooks from "../../Hooks";
import useLangStore from "../../Store/Lang";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const titleMode = customHooks.useMode("title__text");
  const contentMode = customHooks.useMode("content__inner");
  const titleTheme = customHooks.useTheme("title__text");
  const homeTheme = customHooks.useTheme("home");
  const downloadBtnTheme = customHooks.useTheme("content__download");

  const textList = [
    "Front End Developer",
    "Back End Developer",
    "Web Designer",
  ];

  return (
    <div className={`home ${homeTheme}`}>
      <div className="home__content">
        <h1 className="content__title">
          <span className={`title__text ${titleMode}`}>
            {langs?.pages.home.greeting}
          </span>
          <span className={`title__text ${titleTheme}`}>TƯỜNG</span>
        </h1>

        <div className={`content__inner ${contentMode}`}>
          {langs?.pages.home.content}
        </div>

        <Components.TypingText textList={textList} />

        <a
          href="/assets/file/CV.pdf"
          download={"CV Nhâm Bổn Tường"}
          className={`content__download ${downloadBtnTheme}`}
        >
          <span className="download__text">{langs?.pages.home.download}</span>
          <Components.Icons.IconDownload className="download__icon" />
        </a>
      </div>

      <div className="home__image">
        <img
          className="image__view"
          src="assets/images/avatar.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;
