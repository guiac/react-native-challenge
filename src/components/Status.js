import React from "react";
import PropTypes from "prop-types";
import { Subtitle } from "material-bread";
import colors from "../constants/colors";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { View, StyleSheet } from "react-native";

function Status({ online, loading }) {
  const color = loading
    ? colors.warning
    : online
    ? colors.success
    : colors.danger;
  return (
    <View style={styles.container}>
      <EntypoIcon name="dot-single" color={color} size={30} />
      <Subtitle
        type={6}
        text={loading ? "LOADING" : online ? "ONLINE" : "OFFLINE"}
        style={styles.textColor(online)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: online => ({
    color: online ? colors.text : colors.faded,
    letterSpacing: 1,
    left: -7,
    fontSize: 12
  }),
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  }
});

Status.propTypes = {
  online: PropTypes.bool,
  loading: PropTypes.bool
};

export default Status;
