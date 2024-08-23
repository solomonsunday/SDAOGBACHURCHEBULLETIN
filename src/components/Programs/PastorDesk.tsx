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
            <p className="dark:text-white"> Proverbs 31:30,31</p>
          </div>
          <p className="text-orange-500">
            'Charm is deceptive, and beauty is fleeting; but a woman who fears
            the LORD is to be praised. Honor her for all that her hands have
            done, and let her works bring her praise at the city gate.' HAPPY
            SABBATH
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
