import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../constants/colors";
import { Paper, Subtitle, BodyText, Caption } from "material-bread";
import { Expander } from "./Expander";
import Status from "./Status";
import Block from './Block';

const Node = ({ node, expanded, toggleNodeExpanded }) => (
  <TouchableOpacity onPress={() => toggleNodeExpanded(node)}>
    <Paper elevation={2} style={styles.container}>
      <View style={styles.headingContainer}>
        <Subtitle
          type={6}
          text={node.name || "Unknown"}
          style={styles.heading}
        />
        <Status loading={node.loading} online={node.online} />
      </View>
      <Caption
        text={node.url}
        color={colors.gray}
        style={styles.secondaryHeading}
      />
      <Expander expanded={expanded} style={styles.icon(expanded)} />
      {expanded && !node.loading && !node.error && 
        node.list.map(el => <Block el={el} key={el.id} />)}
      {expanded && node.loading && <ActivityIndicator />}
      {expanded && node.error && <BodyText style={styles.error}>Error</BodyText>}
    </Paper>
  </TouchableOpacity>
);

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30
  },
  error: {
    color: colors.danger,
    paddingTop: 10,
  },
  heading: {
    marginTop: 5,
    color: colors.text
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 30,
    alignItems: "center",
    width: "100%"
  },
  secondaryHeading: {
    marginTop: 5,
    color: colors.faded
  },
  icon: expanded => ({
    position: "absolute",
    top: expanded ? 10 : 20,
    right: 10
  })
});

export default Node;
