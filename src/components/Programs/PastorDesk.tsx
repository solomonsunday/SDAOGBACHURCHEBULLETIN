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
            <p className="dark:text-white">
             Romans 12:9-11(ESV)
            </p>
          </div>
          <p className="text-orange-500">
            “Let love be genuine. Abhor what is evil; hold fast to what is good. Love one another with brotherly affection. Outdo one another in showing honor. Do not be slothful in zeal, be fervent in spirit, serve the Lord."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
