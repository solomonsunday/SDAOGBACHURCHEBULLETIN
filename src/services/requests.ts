import axios from "axios";
import {
  BulletinStatusEnum,
  CreateBulletinDTO,
  IAnnouncement,
  ISignIn,
  ISignUpUser,
} from "@/common/interfaces";
import { getAuthFromLocal } from "./store";

export interface QueryParamDto {
  limit?: number;
  start_date?: Date;
  end_date?: Date;
  search?: string | null;
  next_page_token?: string | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Auth Request
export function httpLogin(authObject: ISignIn) {
  try {
    return axios.post(`${API_URL}/auth/login`, authObject);
  } catch (error) {
    console.log(error);
  }
}
export async function httpRegister(authObject: ISignUpUser) {
  try {
    return await axios.post(`${API_URL}/auth/register`, authObject);
  } catch (error) {
    console.log(error);
  }
}
// Bulletin Request

export async function httpCreateBulletin(featureObj: CreateBulletinDTO) {
  try {
    return axios.post(`${API_URL}/bulletin/create`, featureObj, {
      headers: {
        Authorization: "Bearer " + getAuthFromLocal(),
      },
    });
  } catch (error) {
    console.log(error);
  }
}
export async function httpUpdateBulletinById(
  id: string,
  authObject: CreateBulletinDTO
) {
  try {
    return await axios.patch(`${API_URL}/bulletin/${id}`, authObject);
  } catch (error) {
    console.log(error);
  }
}

export async function httpGetBulettins(query?: QueryParamDto) {
  try {
    const response = await axios.get(`${API_URL}/bulletin`, {
      headers: {
        Authorization: "Bearer " + getAuthFromLocal(),
      },
      params: { ...query },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function httpGetBulletinById(id: string) {
  try {
    return axios.get(`${API_URL}/bulletin/${id}`, {});
  } catch (error) {
    console.log(error, "error");
  }
}

export async function httpDeleteBulletinById(id: string) {
  try {
    return axios.delete(`${API_URL}/bulletin/${id}`, {});
  } catch (error) {
    console.log(error, "error");
  }
}

// Announcement Request

export async function httpCreateAnnouncement(Obj: IAnnouncement) {
  try {
    return axios.post(`${API_URL}/announcement/create`, Obj, {
      // headers: { Authorization: "Bearer " + getAuthFromLocal() },
    });
  } catch (error) {
    console.log(error);
  }
}
export async function httpGetAnnouncements() {
  try {
    return axios.get(`${API_URL}/announcement`, {
      // headers: {
      //   Authorization: "Bearer " + getAuthFromLocal(),
      // },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function httpUpdateAnnouncementById(
  id: string,
  object: IAnnouncement
) {
  try {
    return await axios.patch(`${API_URL}/announcement/${id}`, object);
  } catch (error) {
    console.log(error);
  }
}

export async function httpGetAnnouncementById(id: string) {
  try {
    return axios.get(`${API_URL}/announcement/${id}`, {});
  } catch (error) {
    console.log(error, "error");
  }
}

export async function httpDeleteAnnouncementById(id: string) {
  try {
    return axios.delete(`${API_URL}/announcement/${id}`, {});
  } catch (error) {
    console.log(error, "error");
  }
}

export async function httpPublishBulletin(
  id: string,
  status: BulletinStatusEnum
) {
  try {
    return await axios.patch(
      `${API_URL}/bulletin/${id}/status?status=${status}`
    );
  } catch (error) {
    console.log(error);
  }
}

// async function httpPublishBulletin(setError: (error: ErrorResponse) => void) {
//   try {
//     const res = await fetch(`${API_URL}/users`, httpHeaders);
//     await handleErrors(res);
//     return await res.json();
//   } catch (error) {
//     setError(error as ErrorResponse);
//   }
// }
