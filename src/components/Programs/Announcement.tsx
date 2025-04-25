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
            GC Theme for the year 2025: I will go (SDAH 319)
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
            ⁠GC 100 days of prayer program commenced April 4th - July 12th, 2025
            via zoom, Time: 6:30am - 7:00am daily. This has begun and will end
            on the last day of the GC Session.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Post Camp Meeting holds tomorrow 27th April, 2025 at Ogba Church.
            Time is 10:00a.m. Participants: All Pastors, All Elders, Sabbath
            School Superintendent, Youth Leaders, AWM Leaders, AMO Leaders and
            Personal Ministry Leaders.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Ogba Church Singles breakfast fellowship holds tomorrow 27/04/2025
            at the children’s church by 9:00a.m.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Next sabbath is Senior Citizens (age 65yrs and above) Celebration
            Sabbath, lets come prepared to celebrate the Elderly in our midst.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Please support the School (ANPS) Project as we anticipate responses
            to the appeal letters given to members and free will donations
            towards the development of our School.
          </li>{" "}
          <li className="pb-2 border-b border-orange-200">
            LMC AMO one day retreat is May 11th, 2025. Registration is ₦5,000
            with bag, ₦3,000 without bag.
          </li>
          <li className="pb-2 border-b border-orange-200">
            The church leadership is calling for a regular donation of snacks
            and support from members for our children in Baby steps and
            beginners class upstairs.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Keep the Church environment clean. Dispose every trash properly in
            the waste baskets.
          </li>
          <li className="pb-2 border-b border-orange-200">
            GC Session holds July 3rd – 12th, 2025. Special offering for 10/40
            windows areas will be collected next Sabbath 12th April 2025 .
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
