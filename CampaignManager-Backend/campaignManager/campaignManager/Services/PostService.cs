using campaignManager.Interfaces;
using campaignManager.Models;

namespace campaignManager.Services
{
    public class PostService : IPostService
    {
        private readonly DataContext _dataContext;

        public PostService(DataContext dataContext)
        {
            this._dataContext = dataContext;
        }

        public int CreatePost(Post post)
        {
            _dataContext.Posts.Add(post);
            _dataContext.SaveChanges();
            return post.Id;
        }

        public bool DeletePost(int id)
        {
            var PostToDelete = _dataContext.Posts.Find(id);
            if (PostToDelete == null)
                return false;
            _dataContext.Posts.Remove(PostToDelete);
            _dataContext.SaveChanges();
            return true;
        }

        public Post GetPostById(int id)
        {
            var post = _dataContext.Posts.Find(id);
            return post;
        }

        public List<Post> GetPostsList()
        {
            var posts = _dataContext.Posts.ToList();
            return posts;
        }

        public Post UpdatePost(int id, Post post)
        {
            _dataContext.Posts.Find(id).Title = post.Title;
            _dataContext.Posts.Find(id).Title = post.Description;
            _dataContext.SaveChanges();
            return post;
        }
    }
}
