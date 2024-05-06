using HotelBE.Models;
using Microsoft.AspNetCore.Mvc;

namespace HotelBE.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ReservationController : ControllerBase
  {

    private readonly ILogger<ReservationController> _logger;
    private readonly IDataService _dataService;

    public ReservationController(ILogger<ReservationController> logger,
       IDataService dataService)
    {
      _logger = logger;
      _dataService = dataService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ReservationModel>>> GetAsync()
    {
      var data = await _dataService.GetListAsync();

      return Ok(data);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<ReservationModel>>> GetAsync(Guid id)
    {
      var data = await _dataService.GetByIdAsync(id);

      return Ok(data);
    }

    [HttpPost]
    public async Task<ActionResult> PostAsync([FromBody] ReservationModel payload)
    {
      payload.Id = Guid.NewGuid();
      await _dataService.AddData(payload);

      return Created();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAsync(Guid id)
    {
      await _dataService.DeleteData(id);

      return Created();
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> DeleteAsync(Guid id, [FromBody] ReservationModel newModel)
    {
      await _dataService.UpdateData(id, newModel);

      return Created();
    }
  }
}
