import { TextField } from "@mui/material";
import { useState } from "react";
import "./index.css";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then((res) => console.log(res))
      .catch((error) => alert(error));
  };

  const handleChange = (e: any) => {
    const { value, name } = e;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="layout">
      <form
        style={{
          background: "white",
          width: "80%",
        }}
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="name"
            label="name"
            variant="outlined"
            aria-required
            aria-label="name"
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

// export default class ContactForm extends React.Component {
//   render() {
//     const { name, email, message, showModal } = this.state;
//     return (
//       <div className="mx-auto lg:w-8/12 text-center">
//         <H2>Interested in collaborating on a project?</H2>
//         <StyledForm>
//           <InputGroup>
//             <Input
//               id="full-name"
//               type="text"
//               name="name"
//               aria-label="Full Name"
//               aria-required="true"
//               value={name}
//               onChange={(e) => this.handleChange(e)}
//               required
//               title="Please enter your name"
//               placeholder=" "
//             />
//             <Label htmlFor="full-name">Name</Label>
//           </InputGroup>
//           <InputGroup>
//             <Input
//               id="Email"
//               aria-label="Email"
//               aria-required="true"
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => this.handleChange(e)}
//               required
//               title="Please enter your email"
//               placeholder=" "
//             />
//             <Label htmlFor="Email">Email</Label>
//           </InputGroup>
//           <InputGroup>
//             <Input
//               id="Message"
//               aria-label="Message"
//               aria-required="true"
//               placeholder=" "
//               name="message"
//               value={message}
//               onChange={(e) => this.handleChange(e)}
//               required
//             />
//             <Label htmlFor="Message">Message</Label>
//           </InputGroup>
//           <Button type="submit">Submit</Button>
//           {showModal && <Modal closeModal={this.closeModal} />}
//         </StyledForm>
//       </div>
//     );
//   }
// }
