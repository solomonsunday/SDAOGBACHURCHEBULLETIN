// import { ICompany } from "@/features/companyInterface";
import axios from "axios";
import { getAuthFromLocal } from "./store";
import { ISignUpUser } from "@/common/interfaces";

const API_URL = "https://sib21vymqk.execute-api.us-east-1.amazonaws.com/api";
export function login(authObject: { username: string; password: string }) {
  return axios.post(API_URL, authObject);
}

export async function httpRegister(authObject: ISignUpUser) {
  try {
    return await axios.post(`${API_URL}/auth/register`, authObject);
  } catch (error) {
    console.log(error);
  }
}
// async function httpGetGithubUsers(setError: (error: ErrorResponse) => void) {
//   try {
//     const res = await fetch(`${API_URL}/users`, httpHeaders);
//     await handleErrors(res);
//     return await res.json();
//   } catch (error) {
//     setError(error as ErrorResponse);
//   }
// }

export async function getBulettin() {
  return axios.get(API_URL, {
    headers: {
      Authorization: "Bearer " + getAuthFromLocal(),
    },
  });
}

export async function getBulletinById(id: string) {
  return axios.get(API_URL + "/" + id, {
    headers: {
      Authorization: "Bearer " + getAuthFromLocal(),
    },
  });
}

export async function createBulletin(featureObj: {
  name: string;
  value: number;
  companyId: string;
}) {
  // https://implementationtools.lightspeeddev.com/api/companies/749983/features/add
  return axios.post(
    `https://implementationtools.lightspeeddev.com/api/companies/${featureObj.companyId}/features/add`,
    {
      value: {
        value: featureObj.value,
        feature: featureObj.name,
        companyid: featureObj.companyId,
      },
    },
    {
      headers: {
        Authorization: "Bearer " + getAuthFromLocal(),
      },
    }
  );
}

export async function deleteBulletin(companyId: string, name: string) {
  // https://implementationtools.lightspeeddev.com/api/companies/749983/features/electronic_signature/delete
  console.log(name, "name");
  return axios.delete(
    `https://implementationtools.lightspeeddev.com/api/companies/${companyId}/features/${name}/delete`,
    {
      headers: {
        Authorization: "Bearer " + getAuthFromLocal(),
      },
    }
  );
}