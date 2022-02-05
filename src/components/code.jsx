import { useContext } from 'react';
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

//Components
import Editor from "./Editor";
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
        
        height: 60vh;
        display: flex;
        background-color: #060606;

`


const Code = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
    return (
        <>
        <Container>
            <Editor
            heading = 'HTML'
            icon ='/'
            color ='#FF3C41'
            language = 'xml'
            value = {html}
            onChange = {setHtml}
            />
            <Editor
            heading = 'CSS'
            icon ='*'
            color ='#0EBEFF'
            language = 'CSS'
            value = {css}
            onChange = {setCss}
            />
            <Editor
            heading = 'JS'
            icon ='( )'
            color ='#FCD000'
            language = 'javascript'
            value = {js}
            onChange = {setJs}
            />
        </Container>
        </>
    )
}

export default Code;