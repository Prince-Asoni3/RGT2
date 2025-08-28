import styled from "styled-components";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const QuotationForm = () => {
  const { register, handleSubmit, reset } = useForm();

 const onSubmit = async (data) => {
  try {
    await emailjs.send(
      "service_m5ybf7g",
      "template_21d5fur",
      {
        from_name: data.fullnames,
        from_email: data.email,
        phone: data.phone,
        company: data.company || "",
        message: data.message || "",
        services: data.services?.join(", ") || "",
      },
      "OsAb3dmtEpXTK9gjp"
    );
    toast.success("Quotation request sent successfully!");
    reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    toast.error("Failed to send. Please try again!");
  }
};


  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <input type="text" placeholder="Full Names" {...register("fullnames")} required />
      </FormGroup>
      <FormGroup>
        <input type="email" placeholder="Email Address" {...register("email")} required />
      </FormGroup>
      <FormGroup>
        <input type="tel" placeholder="Phone Number" {...register("phone")} required />
      </FormGroup>
      <FormGroup>
        <input type="text" placeholder="Company/Organization Name (Optional)" {...register("company")} />
      </FormGroup>
      <FormGroup>
        <textarea placeholder="Descriptive Message" {...register("message")} />
      </FormGroup>
      <FormGroup>
        <label>Select Service(s)</label>
        <ServiceCheckboxes>
          <label>
            <input type="checkbox" value="Training" {...register("services")} /> Training
          </label>
          <label>
            <input type="checkbox" value="Hosting" {...register("services")} /> Hosting
          </label>
          <label>
            <input type="checkbox" value="Mentorship" {...register("services")} /> Mentorship
          </label>
          <label>
            <input type="checkbox" value="Partnership" {...register("services")} /> Partnership
          </label>
        </ServiceCheckboxes>
      </FormGroup>
      <FormGroup>
        <input type="file" {...register("file")} />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
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