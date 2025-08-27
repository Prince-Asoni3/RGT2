import styled from 'styled-components';

const QuotationForm = () => {
  return (
    <StyledForm action="https://formspree.io/f/mpwjwazl" method="POST" encType="multipart/form-data">
      <FormGroup>
        <input
          type="text"
          name="fullnames"
          placeholder="Full Names"
          required
        />
      </FormGroup>
      <FormGroup>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </FormGroup>
      <FormGroup>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          name="company"
          placeholder="Company/Organization Name (Optional)"
        />
      </FormGroup>
      <FormGroup>
        <textarea
          name="message"
          placeholder="Descriptive Message"
        />
      </FormGroup>
      <FormGroup>
        <label>Select Service(s)</label>
        <ServiceCheckboxes>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Training"
            />
            Training
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Hosting"
            />
            Hosting
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Mentorship"
            />
            Mentorship
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Partnership"
            />
            Partnership
          </label>
        </ServiceCheckboxes>
      </FormGroup>
      <FormGroup>
        <input
          type="file"
          name="file"
        />
      </FormGroup>
      <SubmitButton type="submit">
        Submit
      </SubmitButton>
    </StyledForm>
  );
};

// Styled Components
const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #f8fafd 60%, #e3f0fa 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.13);
  border: 2.5px solid #0F76BC;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  label {
    color: #0F76BC;
    font-weight: 600;
    margin-bottom: 0.2rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 1.5px solid #F16522;
    border-radius: 7px;
    background: #fff;
    color: #222;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: #0F76BC;
      box-shadow: 0 0 0 2px #e3f0fa;
      outline: none;
    }
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;

const ServiceCheckboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #0F76BC;
    font-weight: 500;
    background: #f8fafd;
    padding: 0.4rem 1rem 0.4rem 0.7rem;
    border-radius: 5px;
    border: 1px solid #e3f0fa;
    cursor: pointer;
    transition: background 0.2s, border 0.2s;

    input[type="checkbox"] {
      accent-color: #F16522;
      margin-right: 0.4rem;
    }

    &:hover {
      background: #e3f0fa;
      border: 1.5px solid #0F76BC;
    }
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  padding: 1rem 0;
  border-radius: 7px;
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  transition: background 0.2s, transform 0.2s;

  &:hover, &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }

  &:disabled {
    background: #cccccc;
    color: #fff;
    cursor: not-allowed;
  }
`;

export default QuotationForm;