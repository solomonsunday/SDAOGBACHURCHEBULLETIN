"use clint";
import { useEffect, useState } from "react";
import { BulletinStatusEnum, IBulletin } from "../interfaces";
import { useGetbulletins } from "@/hooks/useGetBulletins";
import { useGetBulletinById } from "@/hooks/useGetBulletinById";

const useFilteredPublishedBulletin = () => {
  const [publishedData, setPublishedData] = useState<IBulletin>();
  const [publishedBulletinId, setPublishedBulletinId] = useState<string>("");

  const { fetchBulletins, loading, bulletins } = useGetbulletins();
  const { fetchBulletinById, bulletin, isLoading } = useGetBulletinById();

  console.log(bulletins, "bulletins");

  const currentDate = new Date().toISOString();

  useEffect(() => {
    fetchBulletins({ current_date: currentDate });
  }, []);

  useEffect(() => {
    if (bulletins.length === 0) return;

    const publishedBulletin = bulletins.filter(
      (bulletin) => bulletin.status === BulletinStatusEnum.PUBLISHED
    );
    const bulletin = publishedBulletin[0];
    if (bulletin) {
      // setPublishedBulletinId(bulletinId);
      setPublishedData(bulletin);
    }
  }, [bulletins]);

  // useEffect(() => {
  //   fetchBulletinById(publishedBulletinId);
  //   setPublishedData(bulletin);
  // }, [publishedBulletinId]);

  return {
    loading,
    isLoading,
    publishedData,
  };
};

export default useFilteredPublishedBulletin;
