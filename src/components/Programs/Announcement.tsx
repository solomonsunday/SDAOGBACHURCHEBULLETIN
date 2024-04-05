import React from "react";

const Announcement = () => {
  return (
    <section className="pt-10 " id="announcement">
      <div className="dark:text-orange-400 font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Combined Announcement
      </div>
      <div className="space-y-4 dark:text-white">
        <ol className="space-y-4 list-decimal">
          <li className="pb-2 font-bold border-b border-orange-200">
            Members are encouraged to use the barcode at the entrance of the
            church to get the e-bulletin as the hard copy in limited quantity is
            only for the Elderly ones who are not tech savvy or those without a
            smart phone.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Drop your prayer requests in the prayer box provided at the entrance
            of the church auditorium anytime, the Pastor and the Elders will
            interceed for you.
          </li>
          <li className="pb-2 border-b border-orange-200">
            All Night Prayer holds today by 11:00p.m .
          </li>
          <li className="pb-2 border-b border-orange-200">
            Glory be to God for the safe completion of the just concluded LMC
            Children Convention here in Ogba Church and a big thank you to the
            parents and entire church for your supports.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Thank God for the success of Sister Grace Adebisi’s surgery within
            the week, we pray for swift recovery as she is recuperating. Thank
            you for your support and prayers.
          </li>
          <li className="pb-2 border-b border-orange-200">
            SOP/Publishing Impact Week of prayer holds 13th -19th April, 2024
          </li>
          <li className="pb-2 border-b border-orange-200">
            Remnant Federation Boot Camp/Pathfinder Funfair comes up April 17th
            – 21st , 2024. Venue is Ogba Church. Features: Craft display, Drill,
            Tent making, Camp Fire, Camp Furniture, Group games and Sports
            Fiesta. Registration is ₦4,000. For enquiry call the Pathfinder
            Director or the Deputies.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Single’s Breakfast Fellowship comes up on 28/4/2024 by 9:00a.m here
            in Ogba Church.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Registration for AWM National Convention at Babcock University is
            ongoing, ₦30,000 till April 30th. Late registration is ₦35,000.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Lagos Evangelism Summit: Mission to the City of Lagos organized by
            the Western Nigeria Union Conference in collaboration with WAD.
            Date: 28/04/2024 by 10:00a.m. Venue: SDA Church Maryland. Those to
            attend: All Officers, Directors, Pastors, Elders, Personal Ministry
            Leaders Church & District, Sabbath School Superintendents, Youth
            Leaders and all that is interested in Evangelism.
          </li>

          {/* <li className="pb-2 border-b border-orange-200">
            The Church Generator: The church leadership is thanking all members
            for your contributions/pledges we have received so far. Based on
            this, we have reached out to the vendor and awaiting him to provide
            us one for inspection.
          </li> */}
          <li className="pb-2 border-b border-orange-200">
            Limited copies of the Book “The Great Controversy are now available
            at ₦1,500 per copy. Pick a copy for your family and friends today.
          </li>
          <li className="pb-2 border-b border-orange-200">
            The WAD 2024 devotional reading with the theme “Complete wellness”
            is available, Price is 2,900. Grab a copy for your family and
            friends
          </li>
          <li className="pb-2 border-b border-orange-200">
            We encourage you to give generously as an expression of your
            worship, devotion to God, support and love for the Church and her
            mission. Send your tithes, offerings and other donations to our
            account: 2020086453 First Bank, Seventh-day Adventist Church, Ogba.
            Call or WhatsApp 07036586617 to share or seek more details about
            giving
          </li>
          <li className="pb-2 border-b border-orange-200">
            Please donate towards the acquisition of a permanent camp site.
            Let’s support this project with our generous donations and pledges.
            Account to donate to is LMC AMO Multipurpose Cooperative Society.
            A/c No: 0727284995, GTBank.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Announcement;
