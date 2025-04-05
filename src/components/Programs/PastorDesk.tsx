import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="text-lg font-semibold underline">
            <p className="dark:text-white">Romans 12:-1-2</p>
          </div>
          <p className="text-orange-500">
            “ I beseech you therefore, brethren, by the mercies of God, that you
            present your bodies a living sacrifice, holy acceptable to God,
            which is your reasonable service. And do not be conformed to this
            world, but be transformed by the renewing of your mind, that you may
            prove what is that good and acceptable and perfect will of God.
            Serve God with Spiritual Gifts. Happy Sabbath.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
