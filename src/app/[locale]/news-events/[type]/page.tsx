import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import Image from "next/image";
import React from "react";

const listHighlight = [
  "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
  "Hầm chui Nguyễn Văn Linh ngập sau mưa lớn, chủ đầu tư đang khẩn trương xử lý",
  "TP.HCM đón trận mưa trái mùa giữa tháng 2 lớn nhất 20 năm qua",
  "Tài xế không nhường đường cho xe cấp cứu: Chỉ nhắc nhở, không xử phạt",
  "Thi thể nữ không đầu, không chân dạt vào bãi biển là người Đà Nẵng, nghi bị giết",
  "TP.HCM: Học sinh phát hiện ấu trùng sống trong suất ăn bán trú ở trường",
  "Vùng đất Cù lao Phố quy hoạch gần 300ha làm khu đô thị hiện ra sao?",
  "Chi tiết điện đàm của ông Trump với ông Putin và ông Zelensky",
];

const articleMain = {
  title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
  description:
    "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
  src: images.home5,
};

const articleRelated = [
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home9,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home6,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home7,
  },
];

const listArticle = [
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home9,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home6,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home7,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home9,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home6,
  },
  {
    title: "Tổ chức bộ máy viện kiểm sát, tòa án khi bỏ công an huyện ra sao?",
    description:
      "Cần đánh giá kỹ lưỡng mô hình tổ chức chính quyền hiện nay và thể chế hóa quan điểm địa phương quyết, địa phương làm và địa phương chịu trách",
    src: images.home7,
  },
];

const classes = {
  contentHover: "hover:text-project cursor-pointer",
};

 
const Page = async () => {
  // Get current type
  // const { type } = await params;

  return (
    <div className="w-screen">
      <NavbarIndicator />
      {/* Highlight article */}
      <div className="flex w-2/3 mx-auto my-8">
        {/* List of highlight */}
        <div className="flex flex-col w-1/3 mr-4">
          {listHighlight.map((article) => {
            return (
              <div key={article} className="border-t-2 border-dashed p-4 pl-0">
                <p className={classes.contentHover}>{article}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-2/3">
          {/* Main Article */}
          <div className="flex w-full mb-4">
            <div className="w-2/3 h-full flex mr-4 overflow-hidden ">
              <Image
                src={articleMain.src}
                alt="main-article-image"
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 cursor-pointer ease-in-out duration-300"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <h1 className={`font-bold text-2xl mb-4 ${classes.contentHover}`}>
                {articleMain.title}
              </h1>
              <p className="mb-2 font-light text-sm">
                {new Date().toLocaleString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
              </p>
              <p>{articleMain.description}</p>
            </div>
          </div>
          {/* Related Article */}
          <div className="flex flex-wrap w-full">
            {articleRelated.map((article, idx) => {
              return (
                <div
                  className="w-full sm:w-1/2 md:w-1/3 flex flex-col pr-2"
                  key={article.title + idx}
                >
                  <div className="w-full mr-4 overflow-hidden mb-2">
                    <Image
                      src={article.src}
                      alt="main-article-image"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover hover:scale-110 cursor-pointer ease-in-out duration-300"
                    />
                  </div>
                  <h1
                    className={`font-bold text-base mb-2 ${classes.contentHover}`}
                  >
                    {article.title}
                  </h1>
                  <p className="mb-2 font-light text-sm">
                    {new Date().toLocaleString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* List article */}
      <div className="flex flex-col w-full">
        {listArticle.map((article, idx) => {
          return (
            <div
              className="flex w-2/3 mx-auto mt-4 border-t-2 border-dashed pt-4 justify-start"
              key={article.title + "listArticle" + idx}
            >
              <p className="mb-2 font-light text-sm">
                {new Date().toLocaleString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
              </p>
              <div className="w-[15.625rem] h-full mb-6 flex mr-4 overflow-hidden">
                <Image
                  src={article.src}
                  alt="list-article-image"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-110 cursor-pointer ease-in-out duration-300"
                />
              </div>
              <div className="w-full">
                <h1
                  className={`font-bold text-2xl mb-4 ${classes.contentHover}`}
                >
                  {article.title}
                </h1>
                <p>{article.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
