import { Post } from "../posts/post.interface";
import { PostService } from "../posts/post.service.interface";

export class LocalPostService implements PostService {

    private readonly endpoint = 'http://localhost:5000';

    getPosts(): Promise<Post[]> {
        return fetch(`${this.endpoint}/posts`).then((res: Response) => {
            if (!res.ok) {
                return Promise.reject(res);
            }
            return res.json() as Promise<Post[]>;
        });
    }
}