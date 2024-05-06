using HotelBE.Models;

namespace HotelBE;

public class DataService : IDataService
{
  private List<ReservationModel> _reservationModels;

  public DataService()
  {
    _reservationModels = new List<ReservationModel>
    {
      new ReservationModel
      {
        Id = Guid.NewGuid(),
        CheckInDate = DateTimeOffset.Now,
        CheckOutDate = DateTimeOffset.Now.AddDays(3),
        GuestEmail = "test1@email.com",
        GuestName = "test1",
        RoomNumber = 1
      },
      new ReservationModel
      {
        Id = Guid.NewGuid(),
        CheckInDate = DateTimeOffset.Now,
        CheckOutDate = DateTimeOffset.Now.AddDays(5),
        GuestEmail = "test2@email.com",
        GuestName = "test2",
        RoomNumber = 2
      }
    };
  }

  public async Task AddData(ReservationModel model)
  {
    _reservationModels.Add(model);
  }

  public async Task<IEnumerable<ReservationModel>> GetListAsync()
  {
    return _reservationModels.AsEnumerable();
  }

  public async Task<ReservationModel?> GetByIdAsync(Guid id)
  {
    return _reservationModels.FirstOrDefault(x => x.Id == id);
  }

  public async Task DeleteData(Guid id)
  {
    var existed = _reservationModels.FirstOrDefault(x => x.Id == id);
    if (existed is not null)
    {
      _reservationModels.Remove(existed);
    }
  }

  public async Task UpdateData(Guid id, ReservationModel newModel)
  {
    var existed = _reservationModels.FirstOrDefault(x => x.Id == id);
    if (existed is not null)
    {
      existed.GuestEmail = newModel.GuestEmail;
      existed.GuestName = newModel.GuestName;
      existed.RoomNumber = newModel.RoomNumber;
    }
  }
}
