export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Our birthday",
    year: 2024,
    description:
      "「今日誕生日の人おめでとう！」を形にしたSNS!みんなで誰か知らない人の誕生日を祝うSNSです!",
    url: "https://birthday-dp1.pages.dev/",
  },
  {
    title: "パスワード生成",
    year: 2024,
    description:
      "このプログラムは、pythonによる、パスワード生成プログラムです。こちらをクリックすることでダウンロードが可能です。※pythonがインストールされている環境で実行して下さい",
    url: "https://drive.google.com/file/d/1QsCeLgVbO97ZBsw93eN4jwKyE08obHbX/view?usp=drive_link",
  },
];
