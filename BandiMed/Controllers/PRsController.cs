using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BandiMed.Data;
using BandiMed.Models;

namespace BandiMed.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PRsController : ControllerBase
    {
        private readonly BandiMedContext _context;

        public PRsController(BandiMedContext context)
        {
            _context = context;
        }

        // GET: bees / Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PR>>> GetPR()
        {
            return await _context.PR.ToListAsync();
        }

        // GET: api / Clienti / 5
        [HttpGet("{id}")]
        public async Task<ActionResult<PR>> GetPR(Guid id)
        {
            var pr = await _context.PR.FindAsync(id);

            if (pr == null)
            {
                return NotFound();
            }

            return pr;
        }

        // PUT: api / Clienti / 5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPR(Guid id, PR pr)
        {
            if (id != pr.ID)
            {
                return BadRequest();
            }

            _context.Entry(pr).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PRExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: bees / Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task PostPR([FromBody] PR pr)
        {
            if (pr.ID == Guid.Empty)
            {
                pr.ID = Guid.NewGuid();
            }

            _context.PR.Add(pr);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetClient", new { id = client.ID }, client);
        }

        // DELETE: api / Clienti / 5
        [HttpDelete("{id}")]
        public async Task DeletePR(Guid id)
        {
            PR pr = await _context.PR.FindAsync(id);
            if (pr != null)
            {
                _context.PR.Remove(pr);
                await _context.SaveChangesAsync();
            }

        }

        private bool PRExists(Guid id)
        {
            return _context.Client.Any(e => e.ID == id);
        }
    }
}