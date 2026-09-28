import React from "react";

const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <ul>
        <li>
          Nome: {name}, Idade: {age}, Profissão: {job},
          {age >= 18 ? " Pode tirar a carteira" : " Não pode tirar a carteira"}
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
