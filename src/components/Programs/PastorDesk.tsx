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
            <p className="dark:text-white">Psalm 100:3-5</p>
          </div>
          <p className="text-orange-500">
            “Know that the Lord, He is God; It is He who has made us, and not we
            ourselves; We are His people and the sheep of His pasture. Enter
            into His gates with thanksgiving, And into His courts with praise.
            Be thankful to Him, and bless His name. For the Lord is good; His
            mercy is everlasting, And His truth endures to all generation."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
