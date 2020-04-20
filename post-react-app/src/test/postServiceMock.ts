import { PostService } from "../posts/post.service.interface";

export const postServiceMock: PostService = { getPosts: () => Promise.resolve([{ id: 1, title: 'test', content: 'test' }]) };
