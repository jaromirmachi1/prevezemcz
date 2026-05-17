import { type FormEvent, useId, useState } from "react";
import styled from "styled-components";

type ContactFormProps = {
  source: "homepage" | "kontakt";
  idPrefix?: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const serviceOptions = [
  "Převoz techniky",
  "Přeprava auta",
  "Převoz zboží",
  "Pneuservis",
  "Jiné",
];

async function submitContact(payload: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
    ok?: boolean;
  };

  if (!response.ok) {
    throw new Error(data.error || "Odeslání se nezdařilo.");
  }

  return data;
}

function ContactForm({ source, idPrefix = "contact" }: ContactFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const fieldId = (name: string) => `${idPrefix}-${name}-${formId}`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContact({
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        service: String(formData.get("service") ?? ""),
        message: String(formData.get("message") ?? ""),
        website: String(formData.get("website") ?? ""),
        source,
      });

      form.reset();
      setStatus("success");
      setFeedback("Děkujeme, poptávka byla odeslána. Ozveme se vám co nejdříve.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Odeslání se nezdařilo. Zkuste to prosím znovu.",
      );
    }
  };

  return (
    <FormRoot onSubmit={handleSubmit} aria-label="Kontaktní formulář" noValidate>
      <Honeypot
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        name="website"
      />

      <Field>
        <label htmlFor={fieldId("name")}>Jméno</label>
        <input
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </Field>
      <Field>
        <label htmlFor={fieldId("phone")}>Telefon</label>
        <input
          id={fieldId("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
      </Field>
      <Field>
        <label htmlFor={fieldId("email")}>E-mail</label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </Field>
      <Field>
        <label htmlFor={fieldId("service")}>Typ služby</label>
        <select id={fieldId("service")} name="service" defaultValue="" required>
          <option value="" disabled>
            Vyberte službu
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <FieldFull>
        <label htmlFor={fieldId("message")}>Co potřebujete?</label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          required
          placeholder="Napište odkud, kam, kdy a co povezeme."
        />
      </FieldFull>

      {feedback ? (
        <FormFeedback $variant={status === "success" ? "success" : "error"}>
          {feedback}
        </FormFeedback>
      ) : null}

      <SubmitButton type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Odesílám…" : "Odeslat poptávku"}
      </SubmitButton>
    </FormRoot>
  );
}

export default ContactForm;

const FormRoot = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  padding: clamp(1rem, 2.5vw, 1.6rem);
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.015)
    ),
    rgba(12, 12, 16, 0.84);
  backdrop-filter: blur(12px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Honeypot = styled.input`
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
`;

const Field = styled.div`
  display: grid;
  gap: 0.45rem;

  label {
    color: #ff9f57;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.045);
    color: #fff;
    font: inherit;
    padding: 0.9rem 0.95rem;
    outline: none;
    transition:
      border-color 0.2s ease,
      background 0.2s ease;
  }

  textarea {
    resize: vertical;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: rgba(255, 122, 26, 0.65);
    background: rgba(255, 255, 255, 0.07);
  }

  input:disabled,
  select:disabled,
  textarea:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const FieldFull = styled(Field)`
  grid-column: 1 / -1;
`;

const FormFeedback = styled.p<{ $variant: "success" | "error" }>`
  grid-column: 1 / -1;
  margin: 0;
  padding: 0.85rem 1rem;
  border-radius: 0.8rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${({ $variant }) => ($variant === "success" ? "#dff6e8" : "#ffd8d8")};
  background: ${({ $variant }) =>
    $variant === "success"
      ? "rgba(46, 160, 87, 0.18)"
      : "rgba(220, 60, 60, 0.16)"};
  border: 1px solid
    ${({ $variant }) =>
      $variant === "success"
        ? "rgba(88, 210, 130, 0.35)"
        : "rgba(255, 120, 120, 0.35)"};
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1.35rem;
  background: linear-gradient(130deg, #ff9038, #ff5f00 56%, #e14800);
  color: #fff;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 14px 34px rgba(255, 95, 0, 0.24);
  }

  &:disabled {
    opacity: 0.72;
    cursor: wait;
  }
`;
