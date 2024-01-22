using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportApplication.Backend.Database;
using SportApplication.Backend.Entities;
using SportApplication.Backend.Models;

namespace SportApplication.Backend.Controllers;

[ApiController]
[Route("api/trainers")]
public sealed class TrainersController(AppDbContext context, IMapper mapper) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TrainerDto>>> List()
    {
        var trainers = await context.Trainers.ToListAsync();

        var trainerDtos = mapper.Map<IEnumerable<TrainerDto>>(trainers);
        return Ok(trainerDtos);
    }

    [HttpGet("{trainerId}")]
    public async Task<ActionResult<TrainerDto>> GetById([FromRoute] Guid trainerId)
    {
        var trainer = await context.Trainers.FindAsync(trainerId);
        if (trainer == null) return NotFound();

        var trainerDto = mapper.Map<TrainerDto>(trainer);
        return Ok(trainerDto);
    }

    [HttpPost]
    public async Task<ActionResult<TrainerDto>> Create([FromBody] CreateTrainerDto createTrainerDto)
    {
        if (!ModelState.IsValid) return UnprocessableEntity(ModelState);

        var trainer = mapper.Map<Trainer>(createTrainerDto);

        await context.Trainers.AddAsync(trainer);
        await context.SaveChangesAsync();

        var trainerDto = mapper.Map<TrainerDto>(trainer);
        return CreatedAtAction(nameof(GetById), new { trainerId = trainer.Id }, trainerDto);
    }

    [HttpDelete("{trainerId}")]
    public async Task<ActionResult> Delete([FromRoute] Guid trainerId)
    {
        var trainer = await context.Trainers.FindAsync(trainerId);
        if (trainer == null) return NotFound();

        context.Trainers.Remove(trainer);
        await context.SaveChangesAsync();

        return NoContent();
    }
}