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
              Ellen G. White, Welfare Ministry, 164
            </p>
          </div>
          <p className="text-orange-500">
            'Intelligent Christian women may use their talents to the very
            highest account …Wives and mothers should in no case neglect their
            husbands and their children, but they can do much without neglecting
            home duties…” May the Lord bless our women in every area of life so
            that they will each fulfill their calling in God, in Jesus Christ
            name.'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
