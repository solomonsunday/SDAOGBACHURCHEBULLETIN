"use clint";
import { useEffect, useState } from "react";
import { BulletinStatusEnum, IBulletin } from "../interfaces";
import { useGetbulletins } from "@/hooks/useGetBulletins";

const useFilteredPublishedBulletin = () => {
  const [publishedData, setPublishedData] = useState<IBulletin>();

  const { fetchBulletins, loading, bulletins } = useGetbulletins();
  console.log(bulletins, "bulletins");

  useEffect(() => {
    fetchBulletins();
  }, []);

  useEffect(() => {
    if (!bulletins) return;
    const publishedBulletin = bulletins.filter(
      (bulletin) => bulletin.status === BulletinStatusEnum.PUBLISHED
    );
    setPublishedData(publishedBulletin[0]);
  }, [bulletins]);

  return {
    loading,
    publishedData,
  };
};

export default useFilteredPublishedBulletin;
