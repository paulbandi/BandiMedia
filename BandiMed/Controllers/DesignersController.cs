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
    public class DesignersController : ControllerBase
    {
        private readonly BandiMedContext _context;

        public DesignersController(BandiMedContext context)
        {
            _context = context;
        }

        // GET: bees / Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Designer>>> GetDesigner()
        {
            return await _context.Designer.ToListAsync();
        }

        // GET: api / Clienti / 5
        [HttpGet("{id}")]
        public async Task<ActionResult<Designer>> GetDesigner(Guid id)
        {
            var designer = await _context.Designer.FindAsync(id);

            if (designer == null)
            {
                return NotFound();
            }

            return designer;
        }

        // PUT: api / Clienti / 5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDesigner(Guid id, Designer designer)
        {
            if (id != designer.ID)
            {
                return BadRequest();
            }

            _context.Entry(designer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DesignerExists(id))
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
        public async Task PostDesigner([FromBody] Designer designer)
        {
            if (designer.ID == Guid.Empty)
            {
                designer.ID = Guid.NewGuid();
            }

            _context.Designer.Add(designer);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetClient", new { id = client.ID }, client);
        }

        // DELETE: api / Clienti / 5
        [HttpDelete("{id}")]
        public async Task DeleteDesigner(Guid id)
        {
            Designer designer = await _context.Designer.FindAsync(id);
            if (designer != null)
            {
                _context.Designer.Remove(designer);
                await _context.SaveChangesAsync();
            }

        }

        private bool DesignerExists(Guid id)
        {
            return _context.Client.Any(e => e.ID == id);
        }
    }
}