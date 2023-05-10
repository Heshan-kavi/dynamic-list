import { Outlet, useNavigate } from "react-router-dom";
import { PasswordHeader, PrimaryButton } from "./Password.styles";


function Password () {

    let navigate = useNavigate();

    return <div>
        <PrimaryButton onClick={() => navigate("/secondary-page")}>Go To Secondary Page</PrimaryButton>
        <PrimaryButton onClick={() => navigate("/secondary-page/user-profile")}>Go To User Profile Page</PrimaryButton>
        <PasswordHeader>This is the Password page header</PasswordHeader>
        <Outlet/>
    </div>
}


export default Password;