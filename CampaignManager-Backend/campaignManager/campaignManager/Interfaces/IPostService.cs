using campaignManager.Models;

namespace campaignManager.Interfaces
{
    public interface IPostService
    {
        List<Post> GetPostsList();
        Post GetPostById(int id);
        int CreatePost(Post post);
        Post UpdatePost(int id, Post post);
        bool DeletePost(int id);
    }
}
