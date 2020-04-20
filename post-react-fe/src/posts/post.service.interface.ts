import { Post } from "./post.interface";

export interface PostService {
    getPosts(): Promise<Post[]>;
}