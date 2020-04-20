import { LocalPostService } from "./post.service"

describe('Post service test', () => {

    const postService = new LocalPostService();
    it('Should handle error', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: false }));
        await expect(postService.getPosts()).rejects.toStrictEqual({"ok": false});
    })

    it('Should handle success', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: true, json: () => Promise.resolve([]) }));
        await expect(postService.getPosts()).resolves.toStrictEqual([]);
    })

})