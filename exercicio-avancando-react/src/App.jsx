import UserDetails from "./components/UserDetails";

function App() {
  const peoples = [
    { id: 1, name: "Caio", age: 24, job: "Desenvolvedor" },
    { id: 2, name: "João", age: 30, job: "Designer" },
    { id: 3, name: "Maria", age: 28, job: "Gerente" },
    { id: 4, name: "Ana", age: 16, job: "Estudante" },
  ];

  return (
    <>
      {peoples.map((people) => (
        <UserDetails
          key={people.id}
          name={people.name}
          age={people.age}
          job={people.job}
        />
      ))}
    </>
  );
}

export default App;
