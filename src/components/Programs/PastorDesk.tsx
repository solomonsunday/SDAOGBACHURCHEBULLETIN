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
            <p className="dark:text-white"> 2 Chron. 7:14</p>
          </div>
          <p className="text-orange-500">
            'if my people, who are called by my name, will humble themselves and
            pray and seek my face and turn from their wicked ways, then I will
            hear from heaven, and I will forgive their sin and will heal their
            land'
            <br /> May we commit ourselves to fervent and genuine prayers in
            Jesus Christ name. Happy Sabbath
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
