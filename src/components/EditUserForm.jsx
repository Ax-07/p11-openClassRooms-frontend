import { useRef } from "react";
import PropTypes from "prop-types";
import { useUpdateUserProfileMutation, useGetUserProfileQuery } from "../services/apis/userApi";
import { useSelector } from "react-redux";


export const EditUserProfileForm = ({isOpen, setIsOpen}) => {
  const token = useSelector((state) => state.auth.token);
  const { data: userdata = [], refetch: refetshUserProfile } = useGetUserProfileQuery({ token: token });
  const user = userdata.body;
  const userProfileFormData = useRef(null);
  const [updateUserProfile] = useUpdateUserProfileMutation();
  console.log(user);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(userProfileFormData.current);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      await updateUserProfile({token, data});
      refetshUserProfile();
      setIsOpen(false);
    }
    catch (err) {
      console.error(err);
    }
  };

  const onCancel = async (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && 
      <form className="edit-form" ref={userProfileFormData} onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName">User name:</label>
          <input type="text" id="userName" name="userName" defaultValue={user?.userName}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" defaultValue={user?.firstName} disabled/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" defaultValue={user?.lastName} disabled/>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="edit-button">
            Save
          </button>
          <button onClick={onCancel} className="edit-button">
            Cancel
          </button>
        </div>
      </form>
      }
    </>
  );
};

EditUserProfileForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  user: PropTypes.object,
};