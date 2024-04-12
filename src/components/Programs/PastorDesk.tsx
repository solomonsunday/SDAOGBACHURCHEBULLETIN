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
            <p className="dark:text-white">Isaiah 52:7</p>
          </div>
          <p className="text-orange-500">
            How beautiful on the mountains are the feet of those who bring good
            news, who proclaim peace, who bring good tidings, who proclaim
            salvation, who say to Zion, “Your God reigns!” Let’s join millions
            of others all over the world to proclaim, in every way, that “our
            God reigns”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
