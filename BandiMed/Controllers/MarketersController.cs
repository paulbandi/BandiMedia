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
    public class MarketersController : ControllerBase
    {
        private readonly BandiMedContext _context;

        public MarketersController(BandiMedContext context)
        {
            _context = context;
        }

        // GET: bees / Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Marketer>>> GetMarketer()
        {
            return await _context.Marketer.ToListAsync();
        }

        // GET: api / Clienti / 5
        [HttpGet("{id}")]
        public async Task<ActionResult<Marketer>> GetMarketer(Guid id)
        {
            var marketer = await _context.Marketer.FindAsync(id);

            if (marketer == null)
            {
                return NotFound();
            }

            return marketer;
        }

        // PUT: api / Clienti / 5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMarketer(Guid id, Marketer marketer)
        {
            if (id != marketer.ID)
            {
                return BadRequest();
            }

            _context.Entry(marketer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MarketerExists(id))
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
        public async Task PostMarketer([FromBody] Marketer marketer)
        {
            if (marketer.ID == Guid.Empty)
            {
                marketer.ID = Guid.NewGuid();
            }

            _context.Marketer.Add(marketer);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetClient", new { id = client.ID }, client);
        }

        // DELETE: api / Clienti / 5
        [HttpDelete("{id}")]
        public async Task DeleteMarketer(Guid id)
        {
            Marketer marketer = await _context.Marketer.FindAsync(id);
            if (marketer != null)
            {
                _context.Marketer.Remove(marketer);
                await _context.SaveChangesAsync();
            }

        }

        private bool MarketerExists(Guid id)
        {
            return _context.Client.Any(e => e.ID == id);
        }
    }
}