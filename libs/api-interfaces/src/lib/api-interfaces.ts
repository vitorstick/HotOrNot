export interface Message {
  message: string;
}

export interface Person {
  id: number;
  name: string;
  upvotes?: number;
  downvotes?: number;
  url?: string;
}

export interface Vote {
  personId: number;
  upvote: boolean;
  downvote: boolean;
}
