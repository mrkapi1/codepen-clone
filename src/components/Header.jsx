import {AppBar, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";

const Container = styled(AppBar)`
        background: #060606;
        height: 9vh;
        position: static;
`
        
const Header = () => {
    const logo = "https://cdn.dribbble.com/users/299/screenshots/5648722/media/7b1e9811d2244a42ffee0b92c4fe4257.gif";
        return (
        <Container>
            <Toolbar>
                <img src = {logo} alt =" logo " style = {{ width: 65}}   />
                <div class="container">
                <div class="row">
                <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> by | Kapil Chaudhari</h3>
                </div>
                </div>
                </div> 
            </Toolbar>
        </Container>
        )
}
        
    
export default Header;