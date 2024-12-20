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
              Ellen G. White Testimonies for the Church p 387
            </p>
          </div>
          <p className="text-orange-500">
            “But those who hope in the Lord will renew their strength. They will
            soar on wings like eagles; they will run and not grow weary, they
            will walk and not be faint. You shall finish this year strong and
            strengthened for greater exploits of faith in Jesus Christ name."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
