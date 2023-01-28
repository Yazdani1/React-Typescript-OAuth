interface IBase {
  _id: string;
  date: string;
}

export interface UserInfo extends IBase {
  name: string;
  email: string;
  role: string;
}



export interface PostProps extends IBase {
  title: string;
  postedBy: UserInfo
}
