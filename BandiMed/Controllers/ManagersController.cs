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
    public class ManagersController : ControllerBase
    {
        private readonly BandiMedContext _context;

        public ManagersController(BandiMedContext context)
        {
            _context = context;
        }

        // GET: bees / Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Manager>>> GetManager()
        {
            return await _context.Manager.ToListAsync();
        }

        // GET: api / Clienti / 5
        [HttpGet("{id}")]
        public async Task<ActionResult<Manager>> GetManager(Guid id)
        {
            var manager = await _context.Manager.FindAsync(id);

            if (manager == null)
            {
                return NotFound();
            }

            return manager;
        }

        // PUT: api / Clienti / 5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutManager(Guid id, Manager manager)
        {
            if (id != manager.ID)
            {
                return BadRequest();
            }

            _context.Entry(manager).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ManagerExists(id))
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
        public async Task PostManager([FromBody] Manager manager)
        {
            if (manager.ID == Guid.Empty)
            {
                manager.ID = Guid.NewGuid();
            }

            _context.Manager.Add(manager);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetClient", new { id = client.ID }, client);
        }

        // DELETE: api / Clienti / 5
        [HttpDelete("{id}")]
        public async Task DeleteManager(Guid id)
        {
            Manager manager = await _context.Manager.FindAsync(id);
            if (manager != null)
            {
                _context.Manager.Remove(manager);
                await _context.SaveChangesAsync();
            }

        }

        private bool ManagerExists(Guid id)
        {
            return _context.Client.Any(e => e.ID == id);
        }
    }
}