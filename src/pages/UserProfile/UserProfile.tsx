import { Outlet, useNavigate } from "react-router-dom";
import { UserProfileHeader, PrimaryButton } from "./UserProfile.styles";

function UserProfile () {

    let navigate = useNavigate();

    return <div>
        <PrimaryButton onClick={() => navigate("/secondary-page")}>Go To Secondary Page</PrimaryButton>
        <PrimaryButton onClick={() => navigate("/secondary-page/password")}>Go To Password Page</PrimaryButton>
        <UserProfileHeader>This is the User Profile page header</UserProfileHeader>
        <Outlet/>
    </div>
}


export default UserProfile;