import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const Form = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
    </form>
  );
};

export default Form;
