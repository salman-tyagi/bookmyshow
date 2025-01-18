import axios from 'axios';

import API_URL from '../../utils/API_URL';

interface IGoogleLoginRes {
  status: string;
  data: { url: string };
}

export const googleLogin = async (): Promise<string | undefined> => {
  try {
    const { data } = await axios.get<IGoogleLoginRes>(
      `${API_URL}/api/v1/auth/google`
    );

    return data.data.url;
  } catch (err) {
    console.log(err);
  }
};

interface UserGoogle {
  status: string;
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  };
}

export const getGoogleUser = async (email: string) => {
  try {
    const { data } = await axios.post<UserGoogle>(
      `${API_URL}/api/v1/auth/google-user`,
      { email }
    );

    if (data.status === 'success') return data.data;
  } catch (err) {
    console.log(err);
  }
};
