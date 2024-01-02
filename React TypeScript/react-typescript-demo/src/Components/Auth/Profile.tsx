import React from "react";

export type ProfileProps = {
  name: string;
};
const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h4>Private Profile Component Name is: {name}</h4>
    </div>
  );
};

export default Profile;
