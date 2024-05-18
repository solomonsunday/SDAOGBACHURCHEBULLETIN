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
            <p className="dark:text-white">Psalm 127:3-5</p>
          </div>
          <p className="text-orange-500">
            'Behold, children area a heritage from the Lord, The fruyit of the
            womb is a reward. Like arrows in the hand of a warrior, So are the
            children of one’s Youth. Happy is the man who has his quiver full of
            them; They shall not be ashamed, But shall speak with their enemies
            in the gate Happy Global Adventurer Day'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
