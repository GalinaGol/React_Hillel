import {Alert} from "react-bootstrap";

function EmptyList() {
    return (
        <Alert key='info' variant='info' className='text-center'>
            List is empty
        </Alert>
    );
}

export default EmptyList;