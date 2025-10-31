import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3 text-center">
          <div className="text-lg font-semibold underline">
            <p className="dark:text-white">
              Testimonies for the Church, Vol. 5, pg.578
            </p>
          </div>
          <p className="text-orange-500">
            "We may not see the path before us, but we can trust the one who
            holds the future in His hands Testimonies for the Church, Vol. 5,
            pg.578 Happy Sabbath
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
