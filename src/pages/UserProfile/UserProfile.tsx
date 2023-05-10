import { Outlet, useNavigate } from "react-router-dom";
import { GridDiv, PrimaryButton } from "./UserProfile.styles";

function UserProfile () {

    let navigate = useNavigate();

    return <div>
        <PrimaryButton onClick={() => navigate("/secondary-page")}>Go To Secondary Page</PrimaryButton>
        <PrimaryButton onClick={() => navigate("/secondary-page/password")}>Go To Password Page</PrimaryButton>
        <GridDiv>
            {
                ['one','two','three','four','five','six','seven'].map(row => <>
                    <div style={{border:"1px solid grey"}}>
                        {row}
                        <img height="300px" width="400px" src="https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80"></img>
                    </div>
                </>)
            }
        </GridDiv>
        <Outlet/>
    </div>
}


export default UserProfile;