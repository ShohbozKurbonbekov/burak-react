import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = `${this.path}/member/top-users`;
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log("Error, getTopUsers", error);
      throw error;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = `${this.path}/member/restaurant`;
      const result = await axios.post(url);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log("Error in getRestaurant", error);
      throw error;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = `${this.path}/member/signup`;
      const result = await axios.post(url, input, { withCredentials: true });
      const member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("Error: in signup: ", error);
      throw error;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = `${this.path}/member/login`;
      const result = await axios.post(url, input, { withCredentials: true });

      const member = result.data.member;
      console.log("member: ", member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("Error: in login: ", error);
      throw error;
    }
  }
  public async logout(): Promise<void> {
    try {
      const url = `${this.path}/member/logout`;
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("logout result :", result);
      localStorage.removeItem("memberData");
    } catch (error) {
      console.log("Error: in logout: ", error);
      throw error;
    }
  }
}

export default MemberService;
