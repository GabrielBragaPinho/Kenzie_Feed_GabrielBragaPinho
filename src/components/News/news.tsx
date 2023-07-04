import React from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../../providers/NewsContext/NewsContext";
import { useContext } from "react";

interface NewsProps {
  key: number;
  image: string;
  title: string;
  owner: string;
  id: number;
}

function handleNavigateInternPage(
  id: string,
  setCurrentNews: React.Dispatch<React.SetStateAction<string>>
) {
  setCurrentNews(id);
}

export const News: React.FC<NewsProps> = ({ image, title, owner, id }) => {
  const { setCurrentID } = useContext(NewsContext);
  return (
    <div className="flex">
      <li className="w-full max-w-[573px] min-w-250">
        <img src={image} alt="" className="rounded-[1.5rem]  h-284 mb-[12px]" />
        <p className="text-black text-base font-inter font-normal mb-[7px]">
          Por : {owner}
        </p>
        <h3 className="text-black text-lg font-lora font-bold mb-[12px]">
          {title}
        </h3>

        <Link
          onClick={() => handleNavigateInternPage(String(id), setCurrentID)}
          className="text-blue text-base font-inter font-normal"
          to={"/internpage"}
        >
          Leia mais{" "}
        </Link>
      </li>
    </div>
  );
};
