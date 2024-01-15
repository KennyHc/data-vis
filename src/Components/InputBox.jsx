import Form from 'react-bootstrap/Form';
import '../bootstrap.min.css'
import '../App.css'
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const theme = 'dark'
function InputBox() {
    
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3 custom-input" controlId="exampleForm.ControlTextarea1">
                    <h5>Chart Detail Submission</h5>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
            </Form>
            <Button variant="secondary">Submit</Button>
        </Container>
    );
}

export default InputBox;