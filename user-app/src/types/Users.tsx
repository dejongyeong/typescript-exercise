export default interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  company: {
    name: string;
    department: string;
  };
}
