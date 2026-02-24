using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : Controller
    { 
        private readonly ICommentRepository _commentRepo;
        private readonly ApplicationDbContext _context;
        public CommentController(ICommentRepository commentRepo, ApplicationDbContext context)
        {
            _commentRepo = commentRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var comment = _commentRepo.GetAllAsync();

            

            return Ok (comment);
        }
    }
}