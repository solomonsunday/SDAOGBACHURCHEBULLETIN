import React from "react";

const Announcement = () => {
  return (
    <section className="pt-10 " id="announcement">
      <div className="dark:text-orange-400 font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Combined Announcement
      </div>
      <div className="space-y-4 dark:text-white">
        <ol className="space-y-4 list-decimal">
          <li className="pb-2 border-b border-orange-200 font-extrabold text-orange-400">
            GC Theme for the year 2025: Chosen for Mission
          </li>
          <li className="pb-2 font-bold border-b border-orange-200">
            Members are encouraged to use the barcode at the entrance of the
            church to get the e-bulletin .
            <span className="font-bold text-orange-200">
              {" "}
              Please Note: On the e-bulletin app, you will find links to join
              both the midweek prayer and early morning prayers.
            </span>{" "}
            The hard copy in limited quantity is only for the Elderly ones who
            are not tech savvy or those without a smart phone.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Online Midweek service holds 8:00pm - 9:00pm on Wednesdays, Online
            prayer meeting / morning devotion holds every Sunday and Wednesday
            morning (5:00a.m -6:00a.m) via zoom. Zoom link to be shared on the
            church’s WhatsApp, Facebook and Instagram platforms, you can also
            find the Zoom links on the e-bulletin app
          </li>
          <li className="pb-2 border-b border-orange-200">
            We are celebrating Ogba Church Students’ Sabbath of Thanksgiving and
            prayers. Theme: for the Love of True and Holistic higher Education.
            Oh that man would praise the Lord
          </li>
          <li className="pb-2 border-b border-orange-200">
            Annual 10 Days of Prayer Program commences January 8th – 18th, 2025.
            Please plan to attend with your family.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Pastors Ordination: There will be ordination service on February 1,
            2025 for the following Pastors: Adekanye S.A., Babalola V.A, Happy
            Kona and Majolagbe T.C. Congratulations.
          </li>
          <li className="pb-2 border-b border-orange-200">
            There will be an All Night of Prayer program on January 18th, 2025.
            Please plan to attend.
          </li>
          <li className="pb-2 border-b border-orange-200">
            ICT Department: We thank you for your tremendous support and
            commitment to the media ministry of this church in the past year,
            pleased to announced the purchase of a beautiful Camera for the
            church to the glory of God.
          </li>
          <li className="pb-2 border-b border-orange-200">
            WAD Impact Advisory for all Pastors, First Elders and Personal
            Ministry leaders @ Ede. Date is Jan. 29- Feb. 1, 2025.
          </li>
          <li className="pb-2 border-b border-orange-200">
            WAD impact evangelism holds next year, March 2 - 15 2025 Ogba
            District now has 2 centers, Members are encouraged to support this
            program..
          </li>
          <li className="pb-2 border-b border-orange-200">
            Keep the Church environment clean. Dispose every trash properly in
            the waste baskets.{" "}
          </li>
          <li className="pb-2 border-b border-orange-200">
            There’s a call for ground breakers for the upcoming WAD Impact
            Evangelism. Please contact the Pastor or your Church Personal
            Ministry Leader if the Lord convicts your work in this area for Him.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Support the Church projects for this year a. Empowerment of members
            b. Oke Ira evangelism project c. Renovation and beautification of
            the Fence d. Construction of more toilets facilities e. Raising of
            the Church school to Standard.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Return your faithful tithes and give generous offerings. Send your
            tithes, offerings and other donations to the church account{" "}
            <span className="text-orange-400 font-bold">
              2020086453 First Bank Seventh-day Adventist Church Ogba.
            </span>{" "}
            Call or Whatsapp 07036586617 to share or seek more details about
            giving.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Announcement;
