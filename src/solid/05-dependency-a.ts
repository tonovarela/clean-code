import { PostService } from "./05-dependency-b";
import { JsonDatabaseService, LocalDataBaseService, WebApiPost } from "./05-dependency-c";



// Main
(async () => {
    const providerJsonDB = new JsonDatabaseService();
    const providerLocalDB = new LocalDataBaseService();
    const providerWebApi = new WebApiPost();
    const postService = new PostService(providerWebApi);
    const posts = await postService.getPosts();
    console.log({ posts })
})();