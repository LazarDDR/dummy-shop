import dayjs from "dayjs";
import { useCurrentUser } from "../authentication/useCurrentUser";

function UserProfile() {
  const { currentUser, isLoading } = useCurrentUser();
  const fullName = `${currentUser?.firstName} ${currentUser?.lastName}`;

  if (isLoading) return null;

  const { email, birthDate, phone } = currentUser;
  const formattedBirthDate = dayjs(birthDate).format("DD.MM.YYYY");

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      <div className="profile-row">
        <p className="profile-label">Full name:</p>
        <p className="profile-value">{fullName}</p>
      </div>

      <div className="profile-row">
        <p className="profile-label">Email:</p>
        <p className="profile-value">{email}</p>
      </div>

      <div className="profile-row">
        <p className="profile-label">Birth date:</p>
        <p className="profile-value">{formattedBirthDate}</p>
      </div>

      <div className="profile-row">
        <p className="profile-label">Phone number:</p>
        <p className="profile-value">{phone}</p>
      </div>
    </div>
  );
}

export default UserProfile;
