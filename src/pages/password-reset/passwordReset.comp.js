import React from 'react'
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Spinner,
    Alert,
} from "react-bootstrap";

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>

                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
        
                        <Button type="submit">Reset Passwrod</Button>

                    </Form>
					<hr />
                </Col>
            </Row>

            <Row>
				<Col>
                <a href="#/" onClick={() => formSwitcher('login')}>Login Now</a>
				</Col>
			</Row>
			<Row className="py-4">
				<Col>
					Are you new here? <a href="/registration">Register Now</a>
				</Col>
			</Row>
        </Container>
    )
};

ResetPassword.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};
