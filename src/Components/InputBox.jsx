import Form from 'react-bootstrap/Form';
import '../bootstrap.min.css'
import '../App.css'
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import chatCompletion from "../api/openai";

const theme = 'dark'
function InputBox({chartConfig, setChartConfig}) {

    const [inputText, setInputText] = useState('');
    const [response,setResponse] = useState('')
    const changeHandler = (e) => setInputText(e.target.value)

    const onSubmit = async ()=> {
        console.log('response sent',response)
        const request = `Given the following Chart.js configuration: ${JSON.stringify(chartConfig)}
         and the following user requirements: "${inputText}"
         DO NOT include any other text other than the configuration object in your response`

        console.log(request)
        chatCompletion(request).then(res=> {
            console.log(res)
            setResponse(res.choices[0].message.content)
            setChartConfig(JSON.parse(res.choices[0].message.content))
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