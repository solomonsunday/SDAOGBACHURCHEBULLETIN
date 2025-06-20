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
              Ellen G. White The Review and Herald, Oct. 9, 1900 Happy Sabbath
            </p>
          </div>
          <p className="text-orange-500">
            "Every Christian family should illustrate to the world the power and
            excellence of Christian influences"
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
