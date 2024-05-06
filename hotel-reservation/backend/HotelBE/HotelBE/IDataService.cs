using HotelBE.Models;

namespace HotelBE;

public interface IDataService
{
  Task AddData(ReservationModel model);
  Task<IEnumerable<ReservationModel>> GetListAsync();
  Task<ReservationModel> GetByIdAsync(Guid id);

  Task DeleteData(Guid id);
  Task UpdateData(Guid id, ReservationModel newModel);
}
