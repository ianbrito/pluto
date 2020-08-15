import React from "react";
import { Avatar } from "react-native-elements";
import { ProfileWrapper } from "./styles";
import { Colors } from "~/config/color";

export const Profile = () => {
  return (
    <ProfileWrapper>
      <Avatar rounded title="IB" titleStyle={{ color: Colors.primaryText }} />
    </ProfileWrapper>
  );
};
