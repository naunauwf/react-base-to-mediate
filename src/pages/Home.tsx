import { useEffect, useState } from "react";
import Card from "../components/Card";
import Section from "../components/Section";
import type { User } from "../types";

// const users: User[] = [
//   { id: 1, name: "Budi", email: "budi@email.com", role: "user" },
//   { id: 2, name: "Ani", email: "ani@email.com", role: "admin" },
// ];

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        "https://backend-reactts-base-madiate-production.up.railway.app/users",
      );
      const data = (await res.json()) as User[];
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <div >
      <Section title="Gallery">
        {users.map((user) => (
          <Card
            key={user.id}
            title={user.name}
            description={user.description}
            href={user.href}
            image={user.imgUrl}
          />
        ))}
      </Section>
    </div>
  );
};

export default Home;
