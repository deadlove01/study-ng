namespace HotelBE.Models;

public class ReservationModel
{
  public Guid? Id { get; set; }
  public DateTimeOffset CheckInDate { get; set; }
  public DateTimeOffset CheckOutDate { get; set; }
  public string GuestName { get; set; }
  public string GuestEmail { get; set; }
  public int RoomNumber { get; set; }
}
