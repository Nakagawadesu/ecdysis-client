import {
  sessionToken,
  userPreference,
  userProfile,
} from "..//types/storageData";

export function isSessionToken(data: any): data is sessionToken {
  return (data as sessionToken)?.token !== undefined;
}

export function isUserPreference(data: any): data is userPreference {
  return (
    (data as userPreference)?.theme !== undefined &&
    (data as userPreference)?.fontSize !== undefined
  );
}

export function isUserProfile(data: any): data is userProfile {
  return (
    (data as userProfile)?.name !== undefined &&
    (data as userProfile)?.email !== undefined &&
    (data as userProfile)?.password !== undefined &&
    (data as userProfile)?.birth !== undefined
  );
}
