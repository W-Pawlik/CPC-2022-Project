using campaignManager.Interfaces;
using campaignManager.Models;
using Microsoft.AspNetCore.Mvc;

namespace campaignManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostService _ipostService;

        public PostController(IPostService ipostService)
        {
            _ipostService = ipostService;
        }

        [HttpGet("")]
        public IActionResult GetPosts()
        {
            var posts = _ipostService.GetPostsList();
            return Ok(posts);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetPost(int id)
        {
            var post = _ipostService.GetPostById(id);
            return Ok(post);
        }

        [HttpPost("")]
        public IActionResult CreatePost([FromBody] Post post)
        {
            var id = _ipostService.CreatePost(post);
            return Created($"api/posts/{id}", id);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdatePost([FromRoute] int id, [FromBody] Post post)
        {
            Post updatedPost = _ipostService.UpdatePost(id, post);

            if (updatedPost.Id == post.Id)
                return Ok(updatedPost);
            return NotFound();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeletePost([FromRoute] int id)
        {
            bool isDeleted = _ipostService.DeletePost(id);

            if (isDeleted)
                return Ok(true);

            return NotFound();            
        }
    }
}
