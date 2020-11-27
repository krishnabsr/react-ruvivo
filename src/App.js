import "./App.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Container, Row, Col, Card, CardHeader, CardText } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <h4>Create Candidate Profile</h4>
          <h5> Sourced.ai </h5>
        </div>
      </header>
      <Card>
        <ListGroup>
          <ListGroupItem> Create your profile to get Sourced! </ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem active> Personal Details </ListGroupItem>
        </ListGroup>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Date of Birth</Label>
                <Input
                  type="date"
                  name="dateofbirth"
                  id="exampleEmail"
                  placeholder="eg. Jul 02 1993"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="examplePassword"
                  placeholder=" location"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="exampleEmail"
                  placeholder="Select a strong password"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter password again"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card>
        <ListGroup>
          <ListGroupItem active>Work Experience </ListGroupItem>
        </ListGroup>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Job Title</Label>
                <Input
                  type="text"
                  name="jobtitle"
                  id="exampleEmail"
                  placeholder="Eg: Frontend Engineer"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Eg: Ruvivo"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Start Date</Label>
                <Input
                  type="date"
                  name="startdate"
                  id="startdate"
                  placeholder="eg. Jul 05 2018"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleEmail">Date of Birth</Label>
                <Input
                  type="date"
                  name="dateofbirth"
                  id="exampleEmail"
                  placeholder="eg. Jul 02 1993"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />I currently work here
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="exampleEmail">Description</Label>
                <Input
                  type="textarea"
                  name="dateofbirth"
                  id="exampleEmail"
                  placeholder="Eg: I lead the frontend team and was the scrum master"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginLeft: "50%" }}>
              <Button color="primary"> +Add More </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card>
        <ListGroup>
          <ListGroupItem active>Job Preference </ListGroupItem>
        </ListGroup>
        <Form>
          <label>Industry</label>
          <Row form>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Software
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Automation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Aviation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  IT
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Software
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Automation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Aviation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  IT
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Software
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Automation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Aviation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  IT
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Software
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Automation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Aviation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  IT
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Software
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Automation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Aviation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  IT
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <label>Position Type</label>
          <Row form>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Full time
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Part time
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Internship
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Co-founder
                </Label>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="exampleEmail"> Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Eg: New York, NY"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card>
        <Row>
          <Col>
            <br>
            </br>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginLeft: "50%" }}>
            <Button color="primary">  Create Profile </Button>{" "}
          </Col>
        </Row>
        
      </Card>
    </div>
  );
}

export default App;
