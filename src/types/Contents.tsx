export type Megazine = {
  id: string;
  title: string;
  content: string;
  date: string;
  reco: number;
  repl: number;
};

export type Youtube = {
  id: string;
  title: string;
  contents: string;
  date: string;
  reco: number;
  repl: number;
};

export type Reple = {
  id: string;
  postId: string;
  username: string;
  contents: string;
  re: string | null;
  to: string | null;
};
