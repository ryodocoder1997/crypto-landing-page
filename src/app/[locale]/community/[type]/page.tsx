import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
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

const classes = {
  contentHover: "hover:text-project cursor-pointer",
};

const Page = () => {
  return (
    <div className="w-screen">
      <NavbarIndicator />
      <div className="flex w-2/3 mx-auto my-8">
        {/* List of highlight */}
        <div className="flex flex-col w-1/4 mr-4 border-r-2 py-4 pr-4">
          {listHighlight.map((article) => {
            return (
              <div key={article} className="border-t-2 border-dashed p-4 pl-0">
                <p className={classes.contentHover}>{article}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="font-bold text-5xl">
              Enrolment process for graduate research students
            </h2>
            <p className="text-2xl">
              Continuing graduate research students enrolled in time-based units
              are automatically re-enrolled in their time-based unit at the
              beginning of each enrolment period.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Manual re-enrolment</h3>
            <p>Manual re-enrolment is only necessary if you are:</p>
            <ul className="list-disc list-inside">
              <li data-gc-list-depth="1" data-gc-list-style="bullet">
                required to enrol in HDR Training (HDRT) units, eg seminar units
                and/or additional coursework units as recommended by the Faculty
              </li>
            </ul>
            <p>Or</p>
            <ul className="list-disc list-inside">
              <li data-gc-list-depth="1" data-gc-list-style="bullet">
                enrolled in a combined research/coursework program and required
                to enrol in Higher Degree compulsory coursework (HDCC) units
                and/or other coursework units.
              </li>
            </ul>
            <h3 className="text-xl font-bold">Enrolling in additional units</h3>
            <p>
              Research students who are enrolling in any additional HDRT units
              must have approval for enrolment and such enrolment is processed
              by the&nbsp;
              <a href="https://www.mq.edu.au/research/phd-and-research-degrees/contact-us">
                Graduate Research Academy{" "}
              </a>
              (GRA). Once approved, any additional units can be added to the
              student&apos;s program of study without additional fees (with some
              exceptions), provided such units are essential to the student’s
              research program.
            </p>
            <p>
              Research students are permitted to enrol in only one additional
              four-credit-point coursework unit per semester. All enquiries
              concerning content, availability and timetabling of coursework
              units should be directed to the relevant&nbsp;
              <a
                href="https://students.mq.edu.au/study/graduateresearch/hdr-academic-advice"
                target="_blank"
              >
                Department or Faculty
              </a>{" "}
              of registration.
            </p>
            <p>
              To make change/s to your program you are required to complete
              the&nbsp;HDR Unit Selection for PhD Students Form via{" "}
              <a href="https://student1.mq.edu.au">eStudent</a>.
            </p>
            <p>To submit a HDR Unit Selection for PhD Students Form:</p>
            <ul className="list-disc list-inside">
              <li>
                Log in to&nbsp;
                <a href="https://student1.mq.edu.au" target="_blank">
                  eStudent&nbsp;
                </a>
              </li>
              <li>Click in the Forms tile</li>
              <li>
                Search for the ‘HDR Unit Selection for PhD Students Form&apos;
                form
              </li>
              <li>Complete the form</li>
            </ul>
            <p>
              Once the HDR Unit Selection for PhD Students Form has been
              approved, you will be manually enrolled into these units by GRA,
              and you will receive a notification when the enrolment is
              completed.
            </p>
            <h3 className="text-xl font-bold">Making changes</h3>
            <p>
              Arrange a time well in advance with your principal supervisor or
              academic advisor in your Faculty to discuss any changes to your
              enrolment. Please ensure this is finalised with sufficient time to
              lodge a new HDR Unit Selection via eStudent by the due date.
            </p>
            <p>
              You must settle outstanding debts, including tuition fees or
              library fines, before you make any changes to your enrolment. All
              students are expected to check their Statement of Outstanding
              Charges through &apos;My Finances&apos; via{" "}
              <a
                href="https://student1.mq.edu.au"
                data-gc-link="https://student1.mq.edu.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                eStudent
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
