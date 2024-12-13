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
            “All who labour in the cause of God in any capacity, should be
            whole-hearted in the work. There is a lesson for us in the
            experience of Gideon’s’ army. Those whose hearts were in the work
            were so earnest that they would not stop to kneel by the brook to
            drink, but dipped up the water in their hands as they hurried to the
            battle, and these are the ones whom God used… The Lord God of Israel
            is watching every worker, to see whether he is earnest. Happy
            Sabbath Beloved Saints of God "
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
