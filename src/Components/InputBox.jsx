import Form from 'react-bootstrap/Form';
import '../bootstrap.min.css'
import '../App.css'
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import chatCompletion from "../api/openai";

const theme = 'dark'
function InputBox({setChartData}) {

    const [inputText, setInputText] = useState('');
    const [response,setResponse] = useState('')
    const changeHandler = (e) => setInputText(e.target.value)

    const onSubmit = async ()=> {
        console.log('response sent',response)
        chatCompletion(inputText).then(res=> {
            setResponse(res.choices[0].message.content)
        })
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3 custom-input" controlId="exampleForm.ControlTextarea1">
                    <h5>Chart Detail Submission</h5>
                    <Form.Control as="textarea" rows={5} onChange={changeHandler} />
                </Form.Group>
            </Form>
            <p>{response}</p>
            <Button variant="secondary" onClick={onSubmit}>Submit</Button>
        </Container>
    );
}

export default InputBox;