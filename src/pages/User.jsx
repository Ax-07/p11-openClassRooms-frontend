import { EditUserProfileForm } from "../components/EditUserForm";
import { useGetUserProfileQuery } from "../services/apis/userApi";
import { Account } from "../templates/Account";
import PropTypes from "prop-types";
import { useState } from "react";

const accountData = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

export const User = ({ token }) => {
  const { data: userdata = [] } = useGetUserProfileQuery({ token: token });
  const user = userdata.body;
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="main bg-dark">
      <div className="header">
        {isOpen ? (
          <h1>Edit user info</h1>
        ) : (
          <h1>
            Welcome back
            <br />
            {user?.firstName} {user?.lastName}
          </h1>
        )}
        {!isOpen && (
          <button className="edit-button" onClick={() => setIsOpen(true)}>
            Edit Name
          </button>
        )}
        <EditUserProfileForm isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
};

User.propTypes = {
  token: PropTypes.string,
};
