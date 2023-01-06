export interface Data {
  love: string;
  lust: string;
  friendships: string;
  work: string;
}

declare const data: Record<string, Data>;

export default data;